package main

import (
	"sync"
	"time"
)

type UserSession struct {
	UserHash     string     `json:"userHash"`
	IP           string     `json:"ip"`
	JoinedAt     time.Time  `json:"joinedAt"`
	LastActivity *time.Time `json:"lastActivity"`
	UserNames    []string   `json:"userNames,omitempty"`
}

type UserSessionList struct {
	All []UserSession
	sync.RWMutex
}

func NewUserSessionList() *UserSessionList {
	return &UserSessionList{All: make([]UserSession, 0)}
}
