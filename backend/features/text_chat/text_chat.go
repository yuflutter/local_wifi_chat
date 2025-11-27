package text_chat

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/samber/lo"
)

func FetchMessages(w http.ResponseWriter, r *http.Request, messages *Messages, userHashHeaderKey string) {
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
		olderThen, err := time.Parse(time.RFC3339, olderThan)
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
		newerThen, err := time.Parse(time.RFC3339, newerThan)
		if err != nil {
			http.Error(w, "The \"newerThan\" is not an Iso8601 Time", http.StatusBadRequest)
			return
		}
		_, index, _ := lo.FindIndexOf(messages.All, func(m Message) bool {
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

func AddNewMessage(w http.ResponseWriter, r *http.Request, messages *Messages, sessions *Sessions, userHashHeaderKey string) {
	var message Message
	if err := json.NewDecoder(r.Body).Decode(&message); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}
	message.UserHash = r.Header.Get(userHashHeaderKey)
	message.CreatedAt = time.Now().Truncate(time.Millisecond) // на фронтенде такой формат времени
	logUserName(r, message.UserName, sessions, userHashHeaderKey)

	messages.RLock()
	defer messages.RUnlock()

	messages.All = append([]Message{message}, messages.All...) // новые вставляем в начало списка

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// logUserName записывает имя пользователя в сессию
func logUserName(r *http.Request, userName string, sessions *Sessions, userHashHeaderKey string) {
	clientHash := r.Header.Get(userHashHeaderKey)
	sessions.Lock()
	defer sessions.Unlock()

	for i := range sessions.All {
		if sessions.All[i].UserHash == clientHash {
			lastUserName, ok := lo.Last(sessions.All[i].UserNames)
			if !ok || lastUserName != userName {
				sessions.All[i].UserNames = append(sessions.All[i].UserNames, userName)
			}
			break
		}
	}
}
