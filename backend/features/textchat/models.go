package textchat

import (
	"sync"
	"time"
)

type Message struct {
	Id             string    `json:"id"`
	UserHash       string    `json:"userHash"`
	UserName       string    `json:"userName"`
	Text           string    `json:"text"`
	CreatedAt      time.Time `json:"createdAt"`
	LastModifiedAt time.Time `json:"lastModifiedAt,omitempty"`
	ReplyTo        string    `json:"replyTo,omitempty"`
	ReplyToQuote   string    `json:"replyToQuote,omitempty"`
}

func MessageFrom(newMessage NewMessage, userHash string) Message {
	return Message{
		UserHash:     userHash,
		UserName:     newMessage.UserName,
		Text:         newMessage.Text,
		ReplyTo:      newMessage.ReplyTo,
		ReplyToQuote: newMessage.ReplyToQuote,
		CreatedAt:    time.Now().Truncate(time.Millisecond), // на фронтенде такой формат времени
	}
}

type MessageList struct {
	All []Message
	sync.RWMutex
}

func NewMesaageList() *MessageList {
	return &MessageList{All: make([]Message, 0)}
}

// Создается пользователем (приходит с фронтенда)
type NewMessage struct {
	UserName     string `json:"userName"`
	Text         string `json:"text"`
	ReplyTo      string `json:"replyTo,omitempty"`
	ReplyToQuote string `json:"replyToQuote,omitempty"`
}

type DeviceInfo struct {
	IP       string `json:"ip"`
	MAC      string `json:"mac"`
	HostName string `json:"hostName,omitempty"`
}
