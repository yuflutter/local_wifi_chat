package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/NYTimes/gziphandler"
	"github.com/samber/lo"

	"local-wifi-chat-backend/config"
	"local-wifi-chat-backend/features/textchat"
	"local-wifi-chat-backend/features/voiceroom"
)

// Все файлы фронтенда должны быть встроены в бинарник бекенда.
// После сборки фронтенда скопируйте содержимое папки "/local_wifi_chat/frontend/build/dist/js/productionExecutable/"
// в папку "frontend_bundle", после чего соберите или запустите бекенд.
//
//go:embed frontend_bundle/*
var frontendEmbedFS embed.FS

var userSessions = NewUserSessionList()

func main() {
	// Проверяем права на запуск на порту 80
	if os.Getuid() != 0 {
		log.Println("ВНИМАНИЕ: Для запуска на портах <1023 нужны права root (sudo)!")
	}

	textchat.HandleTextChat("/api/messages", logUserName)

	textchat.HandleDevices("/api/devices")

	// Инициализировать VoiceRoomHub
	voiceHub := voiceroom.NewVoiceRoomHub()
	go voiceHub.Run()
	voiceHub.StartCleanupTicker()

	// WebSocket endpoint для голосовой комнаты
	http.HandleFunc("/ws/voice", voiceroom.HandleVoiceRoom(voiceHub))

	// Проверяем наличие фронтенд-файлов, пытаясь прочитать index.html
	_, err := frontendEmbedFS.ReadFile("frontend_bundle/index.html")
	if err != nil {
		log.Fatal("Фронтенд-бандл не найден!")
		return

	} else {
		frontendWebFS, _ := fs.Sub(frontendEmbedFS, "frontend_bundle")
		fileServer := http.FileServer(http.FS(frontendWebFS))

		// Оборачиваем в gzip handler для сжатия
		optimizedHandler := gziphandler.GzipHandler(fileServer)

		http.Handle("/", optimizedHandler)
	}

	localIP := GetLocalIPAddress()
	if localIP != "" {
		log.Printf("Откройте в браузере: http://%s%s\n", localIP, config.Port)
	} else {
		log.Printf("Откройте в браузере: http://<ip-адрес-устройства>%s\n", config.Port)
	}

	log.Fatal(
		http.ListenAndServe(config.Port, userSessionMiddleware(http.DefaultServeMux)),
	)
}

func userSessionMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		EnableCORS(w, r)

		// Обрабатываем preflight запрос
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		// fmt.Printf("%s\n", r.URL)
		if strings.HasPrefix(r.URL.Path, "/api/") {
			ip := GetClientIP(r)
			userHash := r.Header.Get(config.UserHashHeaderKey)

			userSessions.RLock()
			session, ok := lo.Find(userSessions.All, func(s UserSession) bool { return s.UserHash == userHash })
			if !ok {
				newSession := UserSession{
					UserHash:  userHash,
					IP:        ip,
					JoinedAt:  time.Now(),
					UserNames: []string{},
				}
				userSessions.All = append(userSessions.All, newSession)
			} else {
				now := time.Now()
				session.LastActivity = &now
			}
			userSessions.RUnlock()
		}
		next.ServeHTTP(w, r)
	})
}

func logUserName(userHash string, userName string) {
	session, ok := lo.Find(userSessions.All, func(e UserSession) bool { return e.UserHash == userHash })
	if ok {
		lastUserName, ok := lo.Last(session.UserNames)
		if !ok || lastUserName != userName {
			userSessions.Lock()
			defer userSessions.Unlock()
			session.UserNames = append(session.UserNames, userName)
		}
	}
}
