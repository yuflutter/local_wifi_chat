package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/NYTimes/gziphandler"
	"github.com/samber/lo"

	"local-wifi-chat-backend/config"
	"local-wifi-chat-backend/features/devices"
	"local-wifi-chat-backend/features/textchat"
	"local-wifi-chat-backend/features/voice_room"
)

// Все файлы фронтенда должны быть встроены в бинарник бекенда.
// После сборки фронтенда скопируйте содержимое папки "/local_wifi_chat/frontend/build/dist/js/productionExecutable/"
// в папку "frontend_bundle", после чего соберите или запустите бекенд.
//
//go:embed frontend_bundle/*
var frontendEmbedFS embed.FS

var userSession = NewUserSessionList()

func main() {
	// Проверяем права на запуск на порту 80
	if os.Getuid() != 0 {
		log.Println("ВНИМАНИЕ: Для запуска на портах <1023 нужны права root (sudo)!")
	}

	// Инициализировать VoiceRoomHub
	voiceHub := voice_room.NewVoiceRoomHub()
	go voiceHub.Run()
	voiceHub.StartCleanupTicker()

	// API endpoints (регистрируем первыми, чтобы они имели приоритет)
	http.HandleFunc("/api/messages", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			textchat.FetchMessages(w, r)
		case http.MethodPost:
			textchat.AddNewMessage(w, r, logUserName)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	http.HandleFunc("/api/devices", devices.HandleDevices)

	// WebSocket endpoint для голосовой комнаты
	http.HandleFunc("/ws/voice", voice_room.HandleVoiceRoom(voiceHub))

	// Проверяем наличие фронтенд-файлов, пытаясь прочитать index.html
	_, err := frontendEmbedFS.ReadFile("frontend_bundle/index.html")
	if err == nil {
		textchat.SetupHTMLChat("/chat")

		// Настраиваем оптимизированную раздачу статических файлов
		frontendWebFS, _ := fs.Sub(frontendEmbedFS, "frontend_bundle")
		fileServer := http.FileServer(http.FS(frontendWebFS))

		// // Оборачиваем в middleware для Cache-Control заголовков
		// optimizedHandler := cacheControlMiddleware(fileServer)

		// Оборачиваем в gzip handler для сжатия
		optimizedHandler := gziphandler.GzipHandler(fileServer)

		// log.Println("Gzip сжатие: включено для JS, CSS и других текстовых файлов")
		// log.Println("  - Cache-Control: долгосрочное кэширование для статических ресурсов")
		// log.Println("  - Cache-Control: no-cache для index.html и service worker")

		http.Handle("/", optimizedHandler)
	} else {
		log.Println("Фронтенд PWA не найден, используется HTML интерфейс")
		textchat.SetupHTMLChat("/")
	}

	localIP := GetLocalIPAddress()
	if localIP != "" {
		log.Printf("Откройте в браузере: http://%s%s\n", localIP, config.Port)
	} else {
		log.Printf("Откройте в браузере: http://<ip-адрес-устройства>%s\n", config.Port)
	}
	log.Fatal(http.ListenAndServe(config.Port, userSessionMiddleware(http.DefaultServeMux)))
}

func userSessionMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		EnableCORS(w, r)

		// Обрабатываем preflight запрос
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		fmt.Printf("%s\n", r.URL)
		if strings.HasPrefix(r.URL.Path, "/api/") {
			ip := GetClientIP(r)
			userHash := r.Header.Get(config.UserHashHeaderKey)

			userSession.RLock()
			session, ok := lo.Find(userSession.All, func(s UserSession) bool { return s.UserHash == userHash })
			if !ok {
				newSession := UserSession{
					UserHash:  userHash,
					IP:        ip,
					JoinedAt:  time.Now(),
					UserNames: []string{},
				}
				userSession.All = append(userSession.All, newSession)
			} else {
				now := time.Now()
				session.LastActivity = &now
			}
			userSession.RUnlock()
		}
		next.ServeHTTP(w, r)
	})
}

func logUserName(userHash string, userName string) {
	session, ok := lo.Find(userSession.All, func(e UserSession) bool { return e.UserHash == userHash })
	if ok {
		lastUserName, ok := lo.Last(session.UserNames)
		if !ok || lastUserName != userName {
			userSession.Lock()
			defer userSession.Unlock()
			session.UserNames = append(session.UserNames, userName)
		}
	}
}
