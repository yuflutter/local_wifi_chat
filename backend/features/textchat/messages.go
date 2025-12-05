package textchat

import (
	"sync"
	"time"

	"github.com/google/uuid"
)

type ReplyTo struct {
	MessageId string `json:"messageId"`
	UserName  string `json:"userName"`
	Quote     string `json:"quote"`
}

type Message struct {
	Id             string    `json:"id"`
	UserHash       string    `json:"userHash"`
	UserName       string    `json:"userName"`
	ReplyTo        *ReplyTo  `json:"replyTo,omitempty"`
	Text           string    `json:"text"`
	CreatedAt      time.Time `json:"createdAt"`
	LastModifiedAt time.Time `json:"lastModifiedAt,omitempty"`
}

func CreateMessageFrom(newMessage NewMessage, userHash string) Message {
	return Message{
		Id:        uuid.New().String(),
		UserHash:  userHash,
		UserName:  newMessage.UserName,
		Text:      newMessage.Text,
		ReplyTo:   newMessage.ReplyTo,
		CreatedAt: time.Now().Truncate(time.Millisecond), // на фронтенде такой формат времени
	}
}

func (m *Message) UpdateFrom(newMessage NewMessage) {
	m.UserName = newMessage.UserName
	m.Text = newMessage.Text
	m.LastModifiedAt = time.Now().Truncate(time.Millisecond) // на фронтенде такой формат времени
}

type MessageList struct {
	All []Message
	sync.RWMutex
}

func CreateMessageList() *MessageList {
	return &MessageList{All: make([]Message, 0)}
}

// Создается/редактируется пользователем (приходит с фронтенда).
type NewMessage struct {
	Id       string   `json:"id,omitempty"`
	UserName string   `json:"userName"`
	ReplyTo  *ReplyTo `json:"replyTo,omitempty"`
	Text     string   `json:"text"`
}

type DeviceInfo struct {
	IP       string `json:"ip"`
	MAC      string `json:"mac"`
	HostName string `json:"hostName,omitempty"`
}
