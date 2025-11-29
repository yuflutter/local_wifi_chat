package textchat

import (
	"embed"
	"html/template"
	"io/fs"
	"log"
	"net/http"
)

//go:embed templates/*.html static/*
var htmlChatEmbedFS embed.FS

var htmlChatTemplate *template.Template
var htmlDevicesTemplate *template.Template

// SetupHTMLChat настраивает обработчики для HTML чата
func SetupHTMLChat(path string) {
	// Обслуживаем статические файлы (CSS, JS)
	staticFS, err := fs.Sub(htmlChatEmbedFS, "static")
	if err != nil {
		log.Fatal("Ошибка создания FS для static:", err)
	}
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.FS(staticFS))))

	// Загружаем и обслуживаем HTML-шаблоны
	templData, err := htmlChatEmbedFS.ReadFile("templates/chat.html")
	if err != nil {
		log.Fatal("Ошибка загрузки шаблона чата:", err)
	}
	htmlChatTemplate, err = template.New("chat").Parse(string(templData))
	if err != nil {
		log.Fatal("Ошибка парсинга шаблона чата:", err)
	}

	templData, err = htmlChatEmbedFS.ReadFile("templates/devices.html")
	if err != nil {
		log.Fatal("Ошибка загрузки шаблона устройств:", err)
	}
	htmlDevicesTemplate, err = template.New("devices").Parse(string(templData))
	if err != nil {
		log.Fatal("Ошибка парсинга шаблона устройств:", err)
	}

	http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
		htmlChatTemplate.Execute(w, nil)
	})
}

// GetHTMLChatTemplate возвращает шаблон HTML чата
func GetHTMLChatTemplate() *template.Template {
	return htmlChatTemplate
}

// GetHTMLDevicesTemplate возвращает шаблон HTML устройств
func GetHTMLDevicesTemplate() *template.Template {
	return htmlDevicesTemplate
}
