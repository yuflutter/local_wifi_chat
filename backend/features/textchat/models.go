package textchat

import (
	"sync"
	"time"
)

type Message struct {
	UserHash       string    `json:"userHash"`
	UserName       string    `json:"userName"`
	Text           string    `json:"text"`
	CreatedAt      time.Time `json:"createdAt"`
	LastModifiedAt time.Time `json:"lastModifiedAt,omitempty"`
}

type MessageList struct {
	All []Message
	sync.RWMutex
}

func NewMesaageList() *MessageList {
	return &MessageList{All: make([]Message, 0)}
}
