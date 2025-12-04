package textchat

import (
	"sync"
	"time"

	"github.com/google/uuid"
)

type Message struct {
	Id             string    `json:"id"`
	UserHash       string    `json:"userHash"`
	UserName       string    `json:"userName"`
	Text           string    `json:"text"`
	CreatedAt      time.Time `json:"createdAt"`
	LastModifiedAt time.Time `json:"lastModifiedAt,omitempty"`
	ReplyToId      string    `json:"replyToId,omitempty"`
	ReplyToQuote   string    `json:"replyToQuote,omitempty"`
}

func CreateMessageFrom(newMessage EditableMessage, userHash string) Message {
	return Message{
		Id:           uuid.New().String(),
		UserHash:     userHash,
		UserName:     newMessage.UserName,
		Text:         newMessage.Text,
		ReplyToId:    newMessage.ReplyToId,
		ReplyToQuote: newMessage.ReplyToQuote,
		CreatedAt:    time.Now().Truncate(time.Millisecond), // на фронтенде такой формат времени
	}
}

type MessageList struct {
	All []Message
	sync.RWMutex
}

func CreateMessageList() *MessageList {
	return &MessageList{All: make([]Message, 0)}
}

// Создается/редактируется пользователем (приходит с фронтенда).
type EditableMessage struct {
	Id           string `json:"id,omitempty"`
	UserName     string `json:"userName"`
	Text         string `json:"text"`
	ReplyToId    string `json:"replyToId,omitempty"`
	ReplyToQuote string `json:"replyToQuote,omitempty"`
}

type DeviceInfo struct {
	IP       string `json:"ip"`
	MAC      string `json:"mac"`
	HostName string `json:"hostName,omitempty"`
}
