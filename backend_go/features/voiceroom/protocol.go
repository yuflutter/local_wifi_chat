package voiceroom

import (
	"encoding/binary"
	"encoding/json"
	"errors"
	"fmt"
	"hash/fnv"
)

// Типы control messages
const (
	MessageTypeJoin      = "join"
	MessageTypeLeave     = "leave"
	MessageTypeMute      = "mute"
	MessageTypeRoomState = "room_state"
	MessageTypePing      = "ping"
	MessageTypePong      = "pong"
	MessageTypeError     = "error"
)

// ControlMessage представляет JSON control message
type ControlMessage struct {
	Type      string                 `json:"type"`
	Data      map[string]interface{} `json:",inline"`
	Name      string                 `json:"name,omitempty"`
	Muted     *bool                  `json:"muted,omitempty"`
	Timestamp int64                  `json:"timestamp,omitempty"`
	Message   string                 `json:"message,omitempty"`
}

// JoinMessage представляет сообщение присоединения к комнате
type JoinMessage struct {
	Type string `json:"type"`
	Name string `json:"name"`
}

// LeaveMessage представляет сообщение выхода из комнаты
type LeaveMessage struct {
	Type string `json:"type"`
}

// MuteMessage представляет сообщение изменения статуса микрофона
type MuteMessage struct {
	Type  string `json:"type"`
	Muted bool   `json:"muted"`
}

// PingMessage представляет ping сообщение для измерения задержки
type PingMessage struct {
	Type      string `json:"type"`
	Timestamp int64  `json:"timestamp"`
}

// PongMessage представляет pong ответ
type PongMessage struct {
	Type      string `json:"type"`
	Timestamp int64  `json:"timestamp"`
}

// ErrorMessage представляет сообщение об ошибке
type ErrorMessage struct {
	Type    string `json:"type"`
	Message string `json:"message"`
}

// AudioPacketHeader представляет заголовок бинарного аудио-пакета
// Структура: [0-3]: Sender ID hash, [4-7]: Sequence number, [8-11]: Timestamp, [12-end]: Opus data
type AudioPacketHeader struct {
	SenderIDHash uint32
	SequenceNum  uint32
	Timestamp    uint32
}

const (
	// AudioHeaderSize размер заголовка аудио-пакета в байтах
	AudioHeaderSize = 12
	// MinAudioPacketSize минимальный размер аудио-пакета (заголовок + хотя бы 1 байт данных)
	MinAudioPacketSize = AudioHeaderSize + 1
)

// ParseControlMessage парсит JSON control message
func ParseControlMessage(data []byte) (*ControlMessage, error) {
	var msg ControlMessage
	if err := json.Unmarshal(data, &msg); err != nil {
		return nil, fmt.Errorf("failed to parse control message: %w", err)
	}

	if msg.Type == "" {
		return nil, errors.New("control message missing 'type' field")
	}

	return &msg, nil
}

// ParseJoinMessage парсит join message
func ParseJoinMessage(data []byte) (*JoinMessage, error) {
	var msg JoinMessage
	if err := json.Unmarshal(data, &msg); err != nil {
		return nil, fmt.Errorf("failed to parse join message: %w", err)
	}

	if msg.Type != MessageTypeJoin {
		return nil, fmt.Errorf("invalid message type: expected '%s', got '%s'", MessageTypeJoin, msg.Type)
	}

	if msg.Name == "" {
		return nil, errors.New("join message missing 'name' field")
	}

	return &msg, nil
}

// ParseMuteMessage парсит mute message
func ParseMuteMessage(data []byte) (*MuteMessage, error) {
	var msg MuteMessage
	if err := json.Unmarshal(data, &msg); err != nil {
		return nil, fmt.Errorf("failed to parse mute message: %w", err)
	}

	if msg.Type != MessageTypeMute {
		return nil, fmt.Errorf("invalid message type: expected '%s', got '%s'", MessageTypeMute, msg.Type)
	}

	return &msg, nil
}

// ParsePingMessage парсит ping message
func ParsePingMessage(data []byte) (*PingMessage, error) {
	var msg PingMessage
	if err := json.Unmarshal(data, &msg); err != nil {
		return nil, fmt.Errorf("failed to parse ping message: %w", err)
	}

	if msg.Type != MessageTypePing {
		return nil, fmt.Errorf("invalid message type: expected '%s', got '%s'", MessageTypePing, msg.Type)
	}

	return &msg, nil
}

// EncodeControlMessage кодирует control message в JSON
func EncodeControlMessage(msg interface{}) ([]byte, error) {
	data, err := json.Marshal(msg)
	if err != nil {
		return nil, fmt.Errorf("failed to encode control message: %w", err)
	}
	return data, nil
}

// CreatePongMessage создает pong message из ping message
func CreatePongMessage(timestamp int64) *PongMessage {
	return &PongMessage{
		Type:      MessageTypePong,
		Timestamp: timestamp,
	}
}

// CreateErrorMessage создает error message
func CreateErrorMessage(message string) *ErrorMessage {
	return &ErrorMessage{
		Type:    MessageTypeError,
		Message: message,
	}
}

// HashSenderID создает 4-байтовый хеш из sender ID
func HashSenderID(senderID string) uint32 {
	h := fnv.New32a()
	h.Write([]byte(senderID))
	return h.Sum32()
}

// EncodeAudioPacket кодирует аудио-пакет с заголовком
// Формат: [0-3]: Sender ID hash, [4-7]: Sequence number, [8-11]: Timestamp, [12-end]: Opus data
func EncodeAudioPacket(senderID string, sequenceNum uint32, timestamp uint32, opusData []byte) []byte {
	packet := make([]byte, AudioHeaderSize+len(opusData))

	// Sender ID hash (4 bytes)
	senderIDHash := HashSenderID(senderID)
	binary.BigEndian.PutUint32(packet[0:4], senderIDHash)

	// Sequence number (4 bytes)
	binary.BigEndian.PutUint32(packet[4:8], sequenceNum)

	// Timestamp (4 bytes)
	binary.BigEndian.PutUint32(packet[8:12], timestamp)

	// Opus audio data
	copy(packet[12:], opusData)

	return packet
}

// DecodeAudioPacketHeader декодирует заголовок аудио-пакета
func DecodeAudioPacketHeader(packet []byte) (*AudioPacketHeader, error) {
	if len(packet) < AudioHeaderSize {
		return nil, fmt.Errorf("packet too small: expected at least %d bytes, got %d", AudioHeaderSize, len(packet))
	}

	header := &AudioPacketHeader{
		SenderIDHash: binary.BigEndian.Uint32(packet[0:4]),
		SequenceNum:  binary.BigEndian.Uint32(packet[4:8]),
		Timestamp:    binary.BigEndian.Uint32(packet[8:12]),
	}

	return header, nil
}

// ExtractAudioData извлекает Opus данные из аудио-пакета (без заголовка)
func ExtractAudioData(packet []byte) ([]byte, error) {
	if len(packet) < MinAudioPacketSize {
		return nil, fmt.Errorf("packet too small: expected at least %d bytes, got %d", MinAudioPacketSize, len(packet))
	}

	return packet[AudioHeaderSize:], nil
}

// ValidateAudioPacket проверяет корректность аудио-пакета
func ValidateAudioPacket(packet []byte) error {
	if len(packet) < MinAudioPacketSize {
		return fmt.Errorf("packet too small: expected at least %d bytes, got %d", MinAudioPacketSize, len(packet))
	}

	// Проверяем, что можем декодировать заголовок
	_, err := DecodeAudioPacketHeader(packet)
	if err != nil {
		return fmt.Errorf("invalid packet header: %w", err)
	}

	return nil
}

// ValidateParticipantName проверяет корректность имени участника
func ValidateParticipantName(name string) error {
	if name == "" {
		return errors.New("participant name cannot be empty")
	}

	if len(name) > 50 {
		return errors.New("participant name too long: maximum 50 characters")
	}

	// Проверка на недопустимые символы (базовая валидация)
	for _, r := range name {
		if r < 32 || r == 127 {
			return errors.New("participant name contains invalid control characters")
		}
	}

	return nil
}
