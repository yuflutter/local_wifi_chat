package main

import (
	"encoding/json"
	"log"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true // Разрешаем все origins для разработки
	},
}

type Participant struct {
	ID         string          `json:"id"`
	Name       string          `json:"name"`
	IsMuted    bool            `json:"isMuted"`
	IsSpeaking bool            `json:"isSpeaking"`
	Volume     float64         `json:"volume"`
	Conn       *websocket.Conn `json:"-"`
}

type Message struct {
	Type          string                 `json:"type"`
	Data          map[string]interface{} `json:"data,omitempty"`
	ParticipantID string                 `json:"participantId,omitempty"`
}

type Room struct {
	participants map[string]*Participant
	mu           sync.RWMutex
	broadcast    chan []byte
}

func NewRoom() *Room {
	return &Room{
		participants: make(map[string]*Participant),
		broadcast:    make(chan []byte, 256),
	}
}

func (r *Room) addParticipant(p *Participant) {
	r.mu.Lock()
	defer r.mu.Unlock()
	r.participants[p.ID] = p
}

func (r *Room) removeParticipant(id string) {
	r.mu.Lock()
	defer r.mu.Unlock()
	delete(r.participants, id)
}

func (r *Room) getParticipants() []*Participant {
	r.mu.RLock()
	defer r.mu.RUnlock()

	participants := make([]*Participant, 0, len(r.participants))
	for _, p := range r.participants {
		participants = append(participants, &Participant{
			ID:         p.ID,
			Name:       p.Name,
			IsMuted:    p.IsMuted,
			IsSpeaking: p.IsSpeaking,
			Volume:     p.Volume,
		})
	}
	return participants
}

func (r *Room) broadcastMetadata() {
	participants := r.getParticipants()

	msg := Message{
		Type: "metadata",
		Data: map[string]interface{}{
			"participants": participants,
		},
	}

	data, err := json.Marshal(msg)
	if err != nil {
		log.Printf("Error marshaling metadata: %v", err)
		return
	}

	r.mu.RLock()
	defer r.mu.RUnlock()

	for _, p := range r.participants {
		if err := p.Conn.WriteMessage(websocket.TextMessage, data); err != nil {
			log.Printf("Error sending metadata to %s: %v", p.ID, err)
		}
	}
}

func (r *Room) broadcastAudio(senderID string, audioData []byte) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	log.Printf("Broadcasting audio from %s to %d participants", senderID, len(r.participants)-1)

	// Отправляем аудио всем участникам кроме отправителя
	// Данные пересылаем как есть - фронтенд уже добавил ID отправителя
	for id, p := range r.participants {
		if id == senderID {
			continue
		}

		log.Printf("Sending audio to participant %s (sender: %s, size: %d bytes)", id, senderID, len(audioData))
		if err := p.Conn.WriteMessage(websocket.BinaryMessage, audioData); err != nil {
			log.Printf("Error sending audio to %s: %v", id, err)
		} else {
			log.Printf("Successfully sent %d bytes of audio to %s", len(audioData), id)
		}
	}
}

func (r *Room) handleConnection(w http.ResponseWriter, req *http.Request) {
	conn, err := upgrader.Upgrade(w, req, nil)
	if err != nil {
		log.Printf("Error upgrading connection: %v", err)
		return
	}
	defer conn.Close()

	var participant *Participant

	for {
		messageType, data, err := conn.ReadMessage()
		if err != nil {
			if participant != nil {
				r.removeParticipant(participant.ID)
				r.broadcastMetadata()
			}
			log.Printf("Error reading message: %v", err)
			break
		}

		if messageType == websocket.TextMessage {
			var msg Message
			if err := json.Unmarshal(data, &msg); err != nil {
				log.Printf("Error unmarshaling message: %v", err)
				continue
			}

			switch msg.Type {
			case "metadata":
				// Новый участник присоединяется
				if action, ok := msg.Data["action"].(string); ok && action == "join" {
					userID := msg.Data["userId"].(string)
					userName := msg.Data["userName"].(string)

					participant = &Participant{
						ID:      userID,
						Name:    userName,
						IsMuted: false,
						Volume:  1.0,
						Conn:    conn,
					}

					r.addParticipant(participant)
					r.broadcastMetadata()

					log.Printf("Participant %s (%s) joined", userName, userID)
				}

			case "participant_update":
				// Обновление статуса участника
				if participant != nil {
					if isMuted, ok := msg.Data["isMuted"].(bool); ok {
						participant.IsMuted = isMuted
						r.broadcastMetadata()
					}
				}
			}

		} else if messageType == websocket.BinaryMessage {
			// Аудио данные - пересылаем всем кроме отправителя
			log.Printf("Received binary message, size: %d bytes", len(data))

			var senderID string
			if participant != nil {
				senderID = participant.ID
				log.Printf("Using known participant: %s (%s)", participant.Name, participant.ID)
			} else {
				// Пытаемся извлечь ID отправителя из данных
				if len(data) >= 36 {
					senderID = string(data[:36])
					log.Printf("Extracted sender ID from audio data: '%s'", senderID)
				} else {
					log.Printf("Audio data too short to contain sender ID, size: %d bytes", len(data))
					continue
				}
			}

			// Проверяем, что данные содержат ID отправителя
			if len(data) >= 36 {
				receivedID := string(data[:36])
				log.Printf("Audio data contains sender ID: '%s' (length: %d)", receivedID, len(receivedID))
				// Показываем первые несколько байт для отладки
				log.Printf("First 10 bytes as hex: %x", data[:min(10, len(data))])
			}

			r.broadcastAudio(senderID, data)
		}
	}
}

func (r *Room) run() {
	// Периодически отправляем обновления метаданных
	ticker := time.NewTicker(5 * time.Second)
	defer ticker.Stop()

	for range ticker.C {
		r.broadcastMetadata()
	}
}

func main() {
	room := NewRoom()

	go room.run()

	http.HandleFunc("/audio", room.handleConnection)

	log.Println("WebSocket server starting on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("ListenAndServe error: ", err)
	}
}
