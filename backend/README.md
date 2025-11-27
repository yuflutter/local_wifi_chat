
/
/flutter_bootstrap.js
/canvaskit/canvaskit.js
/canvaskit/canvaskit.wasm
/main.dart.js
/assets/FontManifest.json
/assets/fonts/MaterialIcons-Regular.otf
/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf
/api/messages?limit=50



# WiFi Chat - Backend (Go Server)

Go HTTP сервер с поддержкой WebSocket для голосовой комнаты.

## Структура

```
backend/
├── voice_room/              # Пакет голосовой комнаты
│   ├── hub.go              # WebSocket hub (управление клиентами)
│   ├── client.go           # WebSocket client
│   └── handler.go          # HTTP handler
├── templates/               # HTML шаблоны
│   ├── chat.html           # Текстовый чат
│   └── devices.html        # Список устройств
├── static/                  # Статические файлы
│   ├── style.css
│   └── script.js
├── flutter_web_build/       # Собранное Flutter приложение (встраивается)
├── server.go               # Основной сервер
├── entities.go             # Модели данных
├── go.mod                  # Go модуль
└── go.sum                  # Зависимости
```

## Установка зависимостей

```bash
go mod download
```

## Запуск

### Режим разработки

```bash
go run server.go
```

### Production сборка

```bash
go build -o wifi-chat-server server.go entities.go
./wifi-chat-server
```

Сервер запустится на порту `8080`.

## Endpoints

### HTTP

- `GET /` - Flutter Web приложение (главная страница)
- `GET /voice-room` - Голосовая комната (Flutter)
- `GET /chat` - Текстовый чат (HTML)
- `GET /api/messages` - Получить все сообщения (JSON)
- `POST /api/send` - Отправить сообщение (JSON)
- `GET /api/devices` - Список устройств в сети (JSON)
- `GET /api/devices?format=html` - Список устройств (HTML)
- `GET /static/*` - Статические файлы (CSS, JS)

### WebSocket

- `WS /ws/voice` - WebSocket для голосовой комнаты

## WebSocket протокол

### Клиент → Сервер

**Join (присоединиться к комнате):**
```json
{
  "type": "join",
  "name": "Имя пользователя"
}
```

**Leave (покинуть комнату):**
```json
{
  "type": "leave"
}
```

**Mute (изменить состояние микрофона):**
```json
{
  "type": "mute",
  "muted": true
}
```

**Audio (аудио пакет):**
- Binary message с аудио данными

### Сервер → Клиент

**Room State (состояние комнаты):**
```json
{
  "type": "room_state",
  "participants": [
    {
      "id": "abc123",
      "name": "Иван",
      "muted": false,
      "joinedAt": "2024-11-10T10:00:00Z"
    }
  ],
  "timestamp": "2024-11-10T10:00:00Z"
}
```

**Error (ошибка):**
```json
{
  "type": "error",
  "message": "Описание ошибки"
}
```

**Audio (аудио пакет):**
- Binary message с аудио данными от других участников

## Встраивание Flutter приложения

Сервер использует `//go:embed` для встраивания Flutter файлов в binary.

### Подготовка файлов

1. Соберите Flutter приложение:
```bash
cd ../frontend
flutter build web --release
```

2. Скопируйте файлы:
```bash
cd ../backend
cp -r ../frontend/build/web/* flutter_web_build/
```

3. Соберите сервер:
```bash
go build -o wifi-chat-server server.go entities.go
```

Теперь `wifi-chat-server` содержит все файлы внутри и не требует внешних зависимостей.

## Конфигурация

### Изменение порта

В `server.go`:
```go
port := ":8080"  // Измените на нужный порт
```

### CORS

По умолчанию разрешены запросы с `localhost` для разработки. Для production настройте CORS в функции `enableCORS()`.

## Особенности

### Автоматическая очистка

- Неактивные клиенты автоматически отключаются через 60 секунд
- Периодическая очистка каждые 30 секунд

### Обнаружение устройств

Сервер может показывать список устройств в локальной сети через:
- Чтение `/proc/net/arp` (Linux)
- Команда `arp -a` (fallback)

### Embedded файлы

Все статические файлы встраиваются в binary:
- HTML шаблоны (`templates/`)
- CSS и JS (`static/`)
- Flutter приложение (`flutter_web_build/`)

## Разработка

### Hot reload с Air

Установите [air](https://github.com/cosmtrek/air):
```bash
go install github.com/cosmtrek/air@latest
```

Создайте `.air.toml`:
```toml
root = "."
tmp_dir = "tmp"

[build]
  cmd = "go build -o ./tmp/main server.go entities.go"
  bin = "tmp/main"
  include_ext = ["go", "html", "css", "js"]
  exclude_dir = ["tmp", "flutter_web_build"]
```

Запуск:
```bash
air
```

### Тестирование WebSocket

Используйте инструменты:
- [websocat](https://github.com/vi/websocat)
- Browser DevTools
- Postman

Пример с websocat:
```bash
websocat ws://localhost:8080/ws/voice
```

## Логирование

Сервер выводит логи в stdout:
- Запуск сервера и IP-адрес
- Подключения/отключения клиентов
- Ошибки WebSocket
- HTTP запросы (опционально)

## Безопасность

### Рекомендации для production

1. **HTTPS**: Используйте TLS для защиты данных
2. **CORS**: Ограничьте allowed origins
3. **Rate limiting**: Добавьте ограничение запросов
4. **Authentication**: Добавьте аутентификацию для голосовой комнаты
5. **Validation**: Валидируйте все входные данные

### Пример TLS

```go
log.Fatal(http.ListenAndServeTLS(":443", "cert.pem", "key.pem", nil))
```

## Мониторинг

### Метрики

Можно добавить:
- Количество активных WebSocket соединений
- Количество сообщений в секунду
- Использование памяти
- Latency

### Пример с Prometheus

```go
import "github.com/prometheus/client_golang/prometheus"

var (
    activeConnections = prometheus.NewGauge(...)
    messagesTotal = prometheus.NewCounter(...)
)
```

## Устранение неполадок

### Порт занят

```bash
# Найти процесс
lsof -i :8080

# Завершить
kill -9 <PID>
```

### Flutter файлы не загружаются

Проверьте, что файлы скопированы:
```bash
ls flutter_web_build/index.html
```

### WebSocket не подключается

1. Проверьте, что сервер запущен
2. Проверьте URL (ws:// или wss://)
3. Проверьте CORS настройки
4. Проверьте firewall

## Дополнительная информация

См. документацию в папке `../docs/`:
- [QUICK_START.md](../docs/QUICK_START.md) - Быстрый старт
- [VOICE_ROOM_INTEGRATION.md](../docs/VOICE_ROOM_INTEGRATION.md) - Интеграция голосовой комнаты
