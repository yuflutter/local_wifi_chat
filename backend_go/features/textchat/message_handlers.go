package textchat

import (
	"encoding/json"
	"fmt"
	"local-wifi-chat-backend/config"
	"net/http"
	"strconv"
	"time"

	"github.com/samber/lo"
)

var messages = CreateMessageList()

func HandleTextChat(path string, logUserName func(string, string)) {

	http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			getMessages(w, r)
		case http.MethodPost:
			addMessage(w, r, logUserName)
		case http.MethodPut:
			updateMessage(w, r, logUserName)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
}

func getMessages(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	olderThan := query.Get("olderThan")
	newerThan := query.Get("newerThan")

	if olderThan != "" && newerThan != "" {
		http.Error(w, "The \"olderThan\" and \"newerThan\" cannot be set at the same time", http.StatusBadRequest)
		return
	}

	limit, err := strconv.Atoi(query.Get("limit"))
	if err != nil || limit < 0 {
		limit = 0
	}

	messages.RLock()
	defer messages.RUnlock()

	batch := []Message{}

	if olderThan != "" {
		olderThen, err := time.Parse(config.TimeParseLayout, olderThan)
		if err != nil {
			http.Error(w, "The \"olderThan\" is not an Iso8601 Time", http.StatusBadRequest)
			return
		}
		_, index, _ := lo.FindIndexOf(messages.All, func(m Message) bool {
			return m.CreatedAt.Before(olderThen)
		})
		if index != -1 {
			batch = messages.All[index:]
		}
		goto final

	} else if newerThan != "" {
		newerThen, err := time.Parse(config.TimeParseLayout, newerThan)
		if err != nil {
			http.Error(w, "The \"newerThan\" is not an Iso8601 Time", http.StatusBadRequest)
			return
		}
		_, index, _ := lo.FindLastIndexOf(messages.All, func(m Message) bool {
			return m.CreatedAt.After(newerThen)
		})
		if index != -1 {
			batch = messages.All[0 : index+1]
		}
		limit = 0 // новые выбираем сразу все
		goto final

	} else {
		batch = messages.All
		goto final
	}

final:
	if limit > 0 {
		batch = batch[:min(limit, len(batch))]
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(batch)
}

func addMessage(w http.ResponseWriter, r *http.Request, logUserName func(string, string)) {
	var newMessage NewMessage
	if err := json.NewDecoder(r.Body).Decode(&newMessage); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	message := CreateMessageFrom(newMessage, r.Header.Get(config.UserHashHeaderKey))
	logUserName(message.UserHash, message.UserName)

	messages.RLock()
	defer messages.RUnlock()

	messages.All = append([]Message{message}, messages.All...) // новые вставляем в начало списка

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func updateMessage(w http.ResponseWriter, r *http.Request, logUserName func(string, string)) {
	var newMessage NewMessage
	if err := json.NewDecoder(r.Body).Decode(&newMessage); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}
	_, i, ok := lo.FindIndexOf(messages.All, func(e Message) bool { return e.Id == newMessage.Id })
	if !ok {
		http.Error(w, fmt.Sprintf("%+v not found in messages", newMessage), http.StatusNotFound)
		return
	} else {
		var message = &messages.All[i]
		userHash := r.Header.Get(config.UserHashHeaderKey)
		if message.UserHash != userHash {
			http.Error(w, fmt.Sprintf("%+v is not your message", newMessage), http.StatusForbidden)
			return
		}
		message.UpdateFrom(newMessage)
		logUserName(message.UserHash, message.UserName)

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(message)
	}

}
