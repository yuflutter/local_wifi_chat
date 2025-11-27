# Структура проекта

## Организация кода

Проект реорганизован для лучшей модульности и разделения ответственности.

### Корневая директория

- `server.go` - главный файл сервера, инициализация и middleware
- `common.go` - общие утилиты (работа с IP, хеширование, CORS)
- `config/` - конфигурация приложения

### Features

#### `/features/text_chat`

Функциональность текстового чата:

- `handler.go` - обработчики HTTP запросов для чата
- `html_chat.go` - HTML интерфейс чата
- `devices.go` - работа с устройствами в сети
- `models.go` - модели данных (Session, Message, DeviceInfo)
- `templates/` - HTML шаблоны
- `static/` - статические файлы (CSS, JS)

**API endpoints:**
- `GET /api/messages` - получение сообщений
- `POST /api/send` - отправка сообщения
- `GET /api/devices` - список устройств в сети

#### `/features/voice_room`

Функциональность голосовой комнаты:

- `handler.go` - обработчики WebSocket соединений
- `hub.go` - управление участниками и трансляция аудио
- `protocol.go` - протокол обмена сообщениями
- `integration_test.go` - интеграционные тесты

**WebSocket endpoint:**
- `WS /ws/voice` - WebSocket для голосовой комнаты

### Frontend

- `frontend_bundle/` - встроенное Flutter Web приложение

## Импорты

```go
import (
    "local-wifi-chat-backend/config"
    "local-wifi-chat-backend/features/text_chat"
    "local-wifi-chat-backend/features/voice_room"
)
```

## Сборка

```bash
go build -o local-wifi-chat-backend
```

## Запуск

```bash
./local-wifi-chat-backend
```
