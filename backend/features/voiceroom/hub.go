package voiceroom

import (
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

// Participant представляет участника голосовой комнаты
type Participant struct {
	ID           string
	Name         string
	Conn         *websocket.Conn
	Send         chan []byte // Буфер исходящих сообщений
	MicMuted     bool
	LastActivity time.Time
	mutex        sync.RWMutex
	// Rate limiting
	messageCount int
	lastReset    time.Time
}

// AudioMessage представляет аудио-сообщение для трансляции
type AudioMessage struct {
	SenderID string
	Data     []byte // Полный бинарный пакет с заголовком
}

// VoiceRoomHub управляет голосовой комнатой и координирует аудио-потоки
type VoiceRoomHub struct {
	participants map[string]*Participant // participantID -> Participant
	broadcast    chan *AudioMessage      // Канал для трансляции аудио
	register     chan *Participant       // Регистрация нового участника
	unregister   chan *Participant       // Отключение участника
	mutex        sync.RWMutex
}

// NewVoiceRoomHub создает новый экземпляр VoiceRoomHub
func NewVoiceRoomHub() *VoiceRoomHub {
	return &VoiceRoomHub{
		participants: make(map[string]*Participant),
		broadcast:    make(chan *AudioMessage, 256),
		register:     make(chan *Participant, 10),
		unregister:   make(chan *Participant, 10),
	}
}

// Run запускает основной цикл обработки событий Hub
func (h *VoiceRoomHub) Run() {
	for {
		select {
		case participant := <-h.register:
			// Регистрация нового участника
			h.mutex.Lock()
			h.participants[participant.ID] = participant
			h.mutex.Unlock()

			// Отправить обновленное состояние комнаты всем участникам
			h.BroadcastRoomState()

		case participant := <-h.unregister:
			// Отключение участника
			h.mutex.Lock()
			if _, exists := h.participants[participant.ID]; exists {
				delete(h.participants, participant.ID)
				close(participant.Send)
			}
			h.mutex.Unlock()

			// Отправить обновленное состояние комнаты всем оставшимся участникам
			h.BroadcastRoomState()

		case audioMsg := <-h.broadcast:
			// Трансляция аудио-сообщения
			h.BroadcastAudio(audioMsg)
		}
	}
}

// BroadcastRoomState отправляет обновленное состояние комнаты всем участникам
func (h *VoiceRoomHub) BroadcastRoomState() {
	h.mutex.RLock()
	defer h.mutex.RUnlock()

	// Создать список участников для отправки
	participants := make([]map[string]interface{}, 0, len(h.participants))
	for _, p := range h.participants {
		p.mutex.RLock()
		participants = append(participants, map[string]interface{}{
			"id":    p.ID,
			"name":  p.Name,
			"muted": p.MicMuted,
		})
		p.mutex.RUnlock()
	}

	// Создать room_state сообщение
	roomStateMsg := map[string]interface{}{
		"type":         MessageTypeRoomState,
		"participants": participants,
	}

	// Кодировать в JSON
	data, err := EncodeControlMessage(roomStateMsg)
	if err != nil {
		// Логировать ошибку, но не прерывать работу
		return
	}

	// Отправить всем участникам
	for _, participant := range h.participants {
		select {
		case participant.Send <- data:
			// Сообщение отправлено
		default:
			// Буфер переполнен, пропустить это сообщение
			// Room state будет отправлено при следующем обновлении
		}
	}
}

// BroadcastAudio транслирует аудио-пакет всем участникам кроме отправителя
func (h *VoiceRoomHub) BroadcastAudio(audioMsg *AudioMessage) {
	h.mutex.RLock()
	defer h.mutex.RUnlock()

	// Отправить аудио всем участникам кроме отправителя
	for id, participant := range h.participants {
		// Пропустить отправителя
		if id == audioMsg.SenderID {
			continue
		}

		// Попытаться отправить в канал
		select {
		case participant.Send <- audioMsg.Data:
			// Сообщение успешно отправлено
		default:
			// Буфер переполнен - пропустить старые пакеты
			// Попытаться освободить место, удалив один старый пакет
			select {
			case <-participant.Send:
				// Удалили старый пакет, попробуем отправить новый
				select {
				case participant.Send <- audioMsg.Data:
					// Успешно отправлено
				default:
					// Все еще переполнен, пропускаем этот пакет
				}
			default:
				// Не удалось освободить место, пропускаем пакет
			}
		}
	}
}

// RemoveInactiveParticipants удаляет участников, неактивных более 30 секунд
func (h *VoiceRoomHub) RemoveInactiveParticipants() {
	h.mutex.Lock()
	defer h.mutex.Unlock()

	now := time.Now()
	inactiveTimeout := 30 * time.Second
	removedAny := false

	for id, participant := range h.participants {
		participant.mutex.RLock()
		lastActivity := participant.LastActivity
		participant.mutex.RUnlock()

		// Проверить, неактивен ли участник более 30 секунд
		if now.Sub(lastActivity) > inactiveTimeout {
			// Закрыть канал отправки
			close(participant.Send)
			// Удалить из map
			delete(h.participants, id)
			removedAny = true
		}
	}

	// Если удалили хотя бы одного участника, отправить обновленное состояние
	if removedAny {
		// Разблокировать mutex перед вызовом BroadcastRoomState
		h.mutex.Unlock()
		h.BroadcastRoomState()
		h.mutex.Lock()
	}
}

// StartCleanupTicker запускает периодическую очистку неактивных участников
func (h *VoiceRoomHub) StartCleanupTicker() {
	ticker := time.NewTicker(30 * time.Second)
	go func() {
		for range ticker.C {
			h.RemoveInactiveParticipants()
		}
	}()
}
