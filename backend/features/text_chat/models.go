package text_chat

import (
	"sync"
	"time"
)

// Session представляет сессию пользователя
type Session struct {
	UserHash     string     `json:"userHash"`
	IP           string     `json:"ip"`
	JoinedAt     time.Time  `json:"joinedAt"`
	LastActivity *time.Time `json:"lastActivity"`
	UserNames    []string   `json:"userNames,omitempty"`
}

// Sessions хранит все сессии с синхронизацией
type Sessions struct {
	All []Session
	sync.RWMutex
}

// Message представляет сообщение чата
type Message struct {
	UserHash       string    `json:"userHash"`
	UserName       string    `json:"userName"`
	Text           string    `json:"text"`
	CreatedAt      time.Time `json:"createdAt"`
	LastModifiedAt time.Time `json:"lastModifiedAt,omitempty"`
}

// Messages хранит все сообщения с синхронизацией
type Messages struct {
	All []Message
	sync.RWMutex
}

// DeviceInfo представляет информацию об устройстве
type DeviceInfo struct {
	IP       string `json:"ip"`
	MAC      string `json:"mac"`
	HostName string `json:"hostName,omitempty"`
}
