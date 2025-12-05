package textchat

import (
	"sync"
	"time"

	"github.com/google/uuid"
)

type Message struct {
	Id              string    `json:"id"`
	UserHash        string    `json:"userHash"`
	UserName        string    `json:"userName"`
	Text            string    `json:"text"`
	CreatedAt       time.Time `json:"createdAt"`
	LastModifiedAt  time.Time `json:"lastModifiedAt,omitempty"`
	ReplyToId       string    `json:"replyToId,omitempty"`
	ReplyToUserName string    `json:"replyToUserName,omitempty"`
	ReplyToQuote    string    `json:"replyToQuote,omitempty"`
}

func CreateMessageFrom(newMessage NewMessage, userHash string) Message {
	return Message{
		Id:              uuid.New().String(),
		UserHash:        userHash,
		UserName:        newMessage.UserName,
		Text:            newMessage.Text,
		ReplyToId:       newMessage.ReplyToId,
		ReplyToUserName: newMessage.ReplyToUserName,
		ReplyToQuote:    newMessage.ReplyToQuote,
		CreatedAt:       time.Now().Truncate(time.Millisecond), // на фронтенде такой формат времени
	}
}

// func (m *Message) UpdateFrom(newMessage NewMessage) {
// 	m.UserName = newMessage.UserName
// 	m.Text = newMessage.Text
// 	m.ReplyToId = newMessage.ReplyToId
// 	m.ReplyToUserName = newMessage.UserName
// 	m.ReplyToQuote = newMessage.ReplyToQuote
// }

type MessageList struct {
	All []Message
	sync.RWMutex
}

func CreateMessageList() *MessageList {
	return &MessageList{All: make([]Message, 0)}
}

// Создается/редактируется пользователем (приходит с фронтенда).
type NewMessage struct {
	Id              string `json:"id,omitempty"`
	UserName        string `json:"userName"`
	Text            string `json:"text"`
	ReplyToId       string `json:"replyToId,omitempty"`
	ReplyToUserName string `json:"replyToUserName,omitempty"`
	ReplyToQuote    string `json:"replyToQuote,omitempty"`
}

type DeviceInfo struct {
	IP       string `json:"ip"`
	MAC      string `json:"mac"`
	HostName string `json:"hostName,omitempty"`
}
