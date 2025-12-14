# Audio Room WebSocket API

## Endpoint

```
ws://localhost:8080/audio
```

## Типы сообщений

### 1. Подключение к комнате (Client → Server)

```json
{
  "type": "metadata",
  "data": {
    "action": "join",
    "userId": "unique-user-id-123",
    "userName": "Иван Иванов"
  }
}
```

**Описание**: Отправляется клиентом сразу после установки WebSocket соединения.

**Поля**:
- `userId` (string): Уникальный идентификатор пользователя
- `userName` (string): Отображаемое имя пользователя
- `action` (string): Всегда "join"

---

### 2. Список участников (Server → Client)

```json
{
  "type": "metadata",
  "data": {
    "participants": [
      {
        "id": "user-id-123",
        "name": "Иван Иванов",
        "isMuted": false,
        "isSpeaking": false,
        "volume": 1.0
      },
      {
        "id": "user-id-456",
        "name": "Петр Петров",
        "isMuted": true,
        "isSpeaking": false,
        "volume": 1.0
      }
    ]
  }
}
```

**Описание**: Отправляется сервером при изменении списка участников (подключение/отключение/обновление статуса).

**Поля участника**:
- `id` (string): Уникальный идентификатор
- `name` (string): Имя участника
- `isMuted` (boolean): Микрофон выключен
- `isSpeaking` (boolean): Участник говорит (для будущей реализации)
- `volume` (float): Громкость (0.0 - 1.0)

---

### 3. Обновление статуса микрофона (Client → Server)

```json
{
  "type": "participant_update",
  "data": {
    "userId": "user-id-123",
    "isMuted": true
  }
}
```

**Описание**: Клиент уведомляет сервер об изменении статуса микрофона.

**Поля**:
- `userId` (string): ID пользователя
- `isMuted` (boolean): true = микрофон выключен, false = включен

---

### 4. Аудио данные (Binary Messages)

**Формат**: WebSocket Binary Frame

**Структура**:
```
[0-35 байт]   - ID участника (UUID в строковом формате, дополненный пробелами до 36 символов)
[36-N байт]   - Аудио данные в формате WebM/Opus
```

**Направление**: Bidirectional (Client ↔ Server)

**Поведение сервера**: 
- Получает аудио от клиента
- Пересылает всем остальным участникам (кроме отправителя)
- Не выполняет микширование или обработку

**Пример**:
```
Байты 0-35:  "user-id-123                        "
Байты 36+:   [WebM/Opus audio data]
```

---

## Последовательность работы

### Подключение нового участника

1. **Client**: Устанавливает WebSocket соединение
2. **Client → Server**: Отправляет сообщение `metadata` с `action: "join"`
3. **Server → All Clients**: Рассылает обновленный список участников
4. **Client**: Получает список и отображает участников

### Включение микрофона

1. **Client**: Запрашивает доступ к микрофону через браузер
2. **Client**: Начинает запись аудио (чанки по 100ms)
3. **Client → Server**: Отправляет бинарные сообщения с аудио
4. **Client → Server**: Отправляет `participant_update` с `isMuted: false`
5. **Server → Other Clients**: Пересылает аудио всем кроме отправителя
6. **Server → All Clients**: Рассылает обновленный статус участника

### Выключение микрофона

1. **Client**: Останавливает запись
2. **Client → Server**: Отправляет `participant_update` с `isMuted: true`
3. **Server → All Clients**: Рассылает обновленный статус

### Отключение участника

1. **Client**: Закрывает WebSocket соединение
2. **Server**: Обнаруживает разрыв соединения
3. **Server**: Удаляет участника из списка
4. **Server → All Clients**: Рассылает обновленный список участников

---

## Особенности реализации

### MCU без микширования

Сервер работает по принципу MCU (Multipoint Control Unit), но **не выполняет микширование**:
- Каждый аудио-поток пересылается отдельно
- Микширование происходит на стороне клиента (в браузере)
- Клиент может независимо регулировать громкость каждого участника

### Формат аудио

- **Кодек**: Opus (через WebM контейнер)
- **Частота чанков**: ~100ms
- **Преимущества**: 
  - Низкая задержка
  - Хорошее сжатие
  - Нативная поддержка в браузерах

### Управление громкостью

- Громкость регулируется **только на клиенте**
- Сервер не знает о настройках громкости
- Каждый клиент может иметь свои настройки для одного и того же участника

---

## Примеры использования

### JavaScript/TypeScript (Browser)

```javascript
const ws = new WebSocket('ws://localhost:8080/audio');

// Подключение
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'metadata',
    data: {
      action: 'join',
      userId: 'my-unique-id',
      userName: 'Мое Имя'
    }
  }));
};

// Получение сообщений
ws.onmessage = (event) => {
  if (typeof event.data === 'string') {
    const msg = JSON.parse(event.data);
    console.log('Received:', msg);
  } else {
    // Binary audio data
    const audioData = event.data;
    playAudio(audioData);
  }
};

// Отправка аудио
function sendAudio(audioChunk) {
  const userId = 'my-unique-id'.padEnd(36, ' ');
  const userIdBytes = new TextEncoder().encode(userId);
  const combined = new Uint8Array(userIdBytes.length + audioChunk.length);
  combined.set(userIdBytes, 0);
  combined.set(new Uint8Array(audioChunk), userIdBytes.length);
  ws.send(combined);
}
```

---

## Ограничения текущей реализации

1. **Нет аутентификации**: Любой может подключиться
2. **Нет шифрования**: Используйте wss:// в продакшене
3. **Нет переподключения**: Клиент должен сам обрабатывать разрывы
4. **Нет контроля качества**: Сервер не проверяет формат аудио
5. **Нет лимитов**: Нет ограничений на количество участников или размер данных

---

## Будущие улучшения

- [ ] Аутентификация и авторизация
- [ ] Поддержка комнат (rooms)
- [ ] Детекция активности голоса (VAD)
- [ ] Статистика качества соединения
- [ ] Запись сессий
- [ ] Администрирование (kick, mute)
