package voiceroom

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

const (
	// MaxParticipants максимальное количество участников в комнате
	MaxParticipants = 20
	// MaxMessagesPerSecond максимальное количество сообщений в секунду от одного клиента
	MaxMessagesPerSecond = 100
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		// В локальной сети разрешаем все origins
		return true
	},
}

// HandleVoiceRoom обрабатывает WebSocket соединения для голосовой комнаты
func HandleVoiceRoom(hub *VoiceRoomHub) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Проверить количество участников
		hub.mutex.RLock()
		participantCount := len(hub.participants)
		hub.mutex.RUnlock()

		if participantCount >= MaxParticipants {
			log.Printf("Room is full: %d participants", participantCount)
			http.Error(w, "Room is full", http.StatusServiceUnavailable)
			return
		}

		// Upgrade HTTP соединения до WebSocket
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			log.Printf("Failed to upgrade connection: %v", err)
			return
		}

		// Создать уникальный ID для участника
		participantID := uuid.New().String()

		// Создать участника с пустым именем (будет установлено при join)
		participant := &Participant{
			ID:           participantID,
			Name:         "",
			Conn:         conn,
			Send:         make(chan []byte, 256),
			MicMuted:     false,
			LastActivity: time.Now(),
			messageCount: 0,
			lastReset:    time.Now(),
		}

		// Зарегистрировать участника в Hub
		hub.register <- participant

		// Запустить goroutines для чтения и записи
		go participant.writePump(hub)
		go participant.readPump(hub)
	}
}

// readPump читает сообщения из WebSocket соединения
func (p *Participant) readPump(hub *VoiceRoomHub) {
	defer func() {
		// Отключить участника при выходе
		hub.unregister <- p
		p.Conn.Close()
	}()

	// Настроить параметры чтения
	p.Conn.SetReadDeadline(time.Now().Add(60 * time.Second))
	p.Conn.SetPongHandler(func(string) error {
		p.Conn.SetReadDeadline(time.Now().Add(60 * time.Second))
		return nil
	})

	for {
		messageType, message, err := p.Conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("WebSocket error for participant %s: %v", p.ID, err)
			}
			break
		}

		// Rate limiting: проверить количество сообщений в секунду
		p.mutex.Lock()
		now := time.Now()
		if now.Sub(p.lastReset) >= time.Second {
			// Сбросить счетчик каждую секунду
			p.messageCount = 0
			p.lastReset = now
		}
		p.messageCount++
		if p.messageCount > MaxMessagesPerSecond {
			p.mutex.Unlock()
			log.Printf("Rate limit exceeded for participant %s: %d messages/sec", p.ID, p.messageCount)
			// Отправить error message
			errorMsg := CreateErrorMessage("Rate limit exceeded")
			if data, err := EncodeControlMessage(errorMsg); err == nil {
				select {
				case p.Send <- data:
				default:
				}
			}
			continue
		}

		// Обновить время последней активности
		p.LastActivity = time.Now()
		p.mutex.Unlock()

		// Обработать сообщение в зависимости от типа
		switch messageType {
		case websocket.TextMessage:
			// Control message (JSON)
			if err := p.handleControlMessage(message, hub); err != nil {
				log.Printf("Error handling control message from %s: %v", p.ID, err)
				// Отправить error message клиенту
				errorMsg := CreateErrorMessage(err.Error())
				if data, err := EncodeControlMessage(errorMsg); err == nil {
					select {
					case p.Send <- data:
					default:
						// Буфер переполнен, пропустить
					}
				}
			}

		case websocket.BinaryMessage:
			// Audio message
			if err := ValidateAudioPacket(message); err != nil {
				log.Printf("Invalid audio packet from %s: %v", p.ID, err)
				continue
			}

			// Отправить аудио-пакет в broadcast канал
			audioMsg := &AudioMessage{
				SenderID: p.ID,
				Data:     message,
			}
			select {
			case hub.broadcast <- audioMsg:
				// Успешно отправлено
			default:
				// Broadcast канал переполнен, пропустить пакет
				log.Printf("Broadcast channel full, dropping audio packet from %s", p.ID)
			}
		}
	}
}

// handleControlMessage обрабатывает control messages (JSON)
func (p *Participant) handleControlMessage(data []byte, hub *VoiceRoomHub) error {
	// Парсить control message
	ctrlMsg, err := ParseControlMessage(data)
	if err != nil {
		return err
	}

	switch ctrlMsg.Type {
	case MessageTypeJoin:
		// Обработать join message
		joinMsg, err := ParseJoinMessage(data)
		if err != nil {
			return err
		}

		// Валидировать имя участника
		if err := ValidateParticipantName(joinMsg.Name); err != nil {
			return err
		}

		// Установить имя участника
		p.mutex.Lock()
		p.Name = joinMsg.Name
		p.mutex.Unlock()

		log.Printf("Participant %s joined with name: %s", p.ID, joinMsg.Name)

		// Отправить обновленное состояние комнаты
		hub.BroadcastRoomState()

	case MessageTypeLeave:
		// Обработать leave message
		log.Printf("Participant %s (%s) leaving", p.ID, p.Name)
		// Отключение будет обработано в defer readPump

	case MessageTypeMute:
		// Обработать mute message
		muteMsg, err := ParseMuteMessage(data)
		if err != nil {
			return err
		}

		p.mutex.Lock()
		p.MicMuted = muteMsg.Muted
		p.mutex.Unlock()

		log.Printf("Participant %s (%s) muted: %v", p.ID, p.Name, muteMsg.Muted)

		// Отправить обновленное состояние комнаты
		hub.BroadcastRoomState()

	case MessageTypePing:
		// Обработать ping message
		pingMsg, err := ParsePingMessage(data)
		if err != nil {
			return err
		}

		// Отправить pong ответ
		pongMsg := CreatePongMessage(pingMsg.Timestamp)
		pongData, err := EncodeControlMessage(pongMsg)
		if err != nil {
			return err
		}

		select {
		case p.Send <- pongData:
			// Успешно отправлено
		default:
			// Буфер переполнен, пропустить
		}

	default:
		return fmt.Errorf("unknown message type: %s", ctrlMsg.Type)
	}

	return nil
}

// writePump отправляет сообщения из канала Send в WebSocket соединение
func (p *Participant) writePump(hub *VoiceRoomHub) {
	ticker := time.NewTicker(54 * time.Second)
	defer func() {
		ticker.Stop()
		p.Conn.Close()
	}()

	for {
		select {
		case message, ok := <-p.Send:
			// Установить deadline для записи
			p.Conn.SetWriteDeadline(time.Now().Add(10 * time.Second))

			if !ok {
				// Канал закрыт, отправить close message
				p.Conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			// Определить тип сообщения (text или binary)
			messageType := websocket.BinaryMessage
			// Если сообщение начинается с '{', это JSON (text message)
			if len(message) > 0 && message[0] == '{' {
				messageType = websocket.TextMessage
			}

			// Отправить сообщение
			if err := p.Conn.WriteMessage(messageType, message); err != nil {
				log.Printf("Error writing message to participant %s: %v", p.ID, err)
				return
			}

		case <-ticker.C:
			// Отправить ping для поддержания соединения
			p.Conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
			if err := p.Conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				log.Printf("Error sending ping to participant %s: %v", p.ID, err)
				return
			}
		}
	}
}
