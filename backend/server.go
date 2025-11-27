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
	"local-wifi-chat-backend/features/text_chat"
	"local-wifi-chat-backend/features/voice_room"
)

// Все файлы фронтенда (Flutter Web PWA) должны быть встроены в бинарник бекенда
// После сборки фронтенда скопируйте содержимое папки "<flutter project>/build/web" в папку "frontend_bundle"
// После чего соберите или запустите бекенд
//
//go:embed frontend_bundle/*
var frontendEmbedFS embed.FS

var sessions = &text_chat.Sessions{
	All: []text_chat.Session{},
}

var messages = &text_chat.Messages{
	All: []text_chat.Message{},
}

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
			text_chat.FetchMessages(w, r, messages, config.UserHashHeaderKey)
		case http.MethodPost:
			text_chat.AddNewMessage(w, r, messages, sessions, config.UserHashHeaderKey)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	http.HandleFunc("/api/devices", text_chat.HandleDevices)

	// WebSocket endpoint для голосовой комнаты
	http.HandleFunc("/ws/voice", voice_room.HandleVoiceRoom(voiceHub))

	// Проверяем наличие Flutter Web файлов, пытаясь прочитать index.html
	_, err := frontendEmbedFS.ReadFile("frontend_bundle/index.html")
	if err == nil {
		log.Println("Flutter Web приложение обнаружено и будет обслуживаться")
		log.Println("HTML чат доступен по адресу /chat")
		text_chat.SetupHTMLChat("/chat")

		// Настраиваем оптимизированную раздачу статических файлов
		frontendWebFS, _ := fs.Sub(frontendEmbedFS, "frontend_bundle")
		fileServer := http.FileServer(http.FS(frontendWebFS))

		// // Оборачиваем в middleware для Cache-Control заголовков
		// optimizedHandler := cacheControlMiddleware(fileServer)

		// Оборачиваем в gzip handler для сжатия
		optimizedHandler := gziphandler.GzipHandler(fileServer)

		log.Println("Gzip сжатие: включено для JS, CSS и других текстовых файлов")
		// log.Println("  - Cache-Control: долгосрочное кэширование для статических ресурсов")
		// log.Println("  - Cache-Control: no-cache для index.html и service worker")

		http.Handle("/", optimizedHandler)
	} else {
		log.Println("Flutter Web файлы не найдены, используется HTML интерфейс")
		text_chat.SetupHTMLChat("/")
	}

	localIP := GetLocalIPAddress()
	if localIP != "" {
		log.Printf("Откройте в браузере: http://%s%s\n", localIP, config.Port)
	} else {
		log.Printf("Откройте в браузере: http://<ip-адрес-устройства>%s\n", config.Port)
	}
	log.Fatal(http.ListenAndServe(config.Port, sessionMiddleware(http.DefaultServeMux)))
}

func sessionMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		EnableCORS(w, r)

		// Обрабатываем preflight запрос
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		fmt.Printf("%s\n", r.URL)
		if strings.HasPrefix(r.URL.Path, "/api/") {
			// Получаем IP-адрес клиента и вычисляем(получаем) хэш устройства
			ip := GetClientIP(r)
			userHash := r.Header.Get(config.UserHashHeaderKey)

			sessions.Lock()
			sessionPtr, ok := lo.Find(sessions.All, func(s text_chat.Session) bool { return s.UserHash == userHash })
			if !ok {
				newSession := text_chat.Session{
					UserHash:  userHash,
					IP:        ip,
					JoinedAt:  time.Now(),
					UserNames: []string{},
				}
				sessions.All = append(sessions.All, newSession)
			} else {
				now := time.Now()
				sessionPtr.LastActivity = &now
			}
			sessions.Unlock()
		}
		next.ServeHTTP(w, r)
	})
}
