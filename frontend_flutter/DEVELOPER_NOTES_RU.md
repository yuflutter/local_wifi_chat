# Заметки для разработчика

## Что было реализовано

Создан полноценный клиентский функционал аудио-комнаты на Flutter Web с заглушкой бекенда на Go.

## Архитектура решения

### MCU без микширования

Выбрана архитектура MCU (Multipoint Control Unit), но **без микширования на сервере**:

**Почему так?**
- Сервер не тратит CPU на обработку аудио
- Каждый клиент получает отдельные потоки от всех участников
- Микширование происходит в браузере (Web Audio API)
- Каждый клиент может независимо регулировать громкость

**Альтернативы:**
- SFU (Selective Forwarding Unit) - сложнее, но масштабируемее
- MCU с микшированием - проще для клиента, но нагрузка на сервер

### Формат аудио

**Выбран:** WebM/Opus

**Почему:**
- Нативная поддержка в браузерах
- Отличное сжатие (низкий битрейт)
- Низкая задержка
- Хорошее качество голоса

**Параметры:**
- Чанки по 100ms - баланс между задержкой и overhead
- Echo cancellation, Noise suppression, Auto gain control

### Протокол WebSocket

**Текстовые сообщения (JSON):**
- Метаданные (список участников, статусы)
- Обновления статусов
- Управляющие команды

**Бинарные сообщения:**
- Аудио данные
- Формат: [36 байт userId][аудио данные]

**Почему так:**
- Эффективность: бинарные данные для аудио
- Простота: JSON для метаданных
- Расширяемость: легко добавить новые типы сообщений

## Структура кода

### Слои

```
View (UI) → Provider (State) → Services (Business Logic) → Models (Data)
```

**View:**
- `AudioPage` - главная страница
- `ConnectionDialog` - диалог подключения
- `ParticipantTile` - карточка участника

**Provider:**
- `AudioRoomProvider` - координирует все сервисы
- Реактивное обновление UI через `notifyListeners()`

**Services:**
- `AudioRoomService` - WebSocket соединение
- `AudioPlayerService` - воспроизведение
- `AudioRecorderService` - запись

**Models:**
- `Participant` - участник комнаты
- `WsMessage` - WebSocket сообщение

### Потоки данных

**Подключение:**
```
User → ConnectionDialog → AudioRoomProvider.connect()
  → AudioRoomService.connect()
  → WebSocket connection
  → Server sends metadata
  → Stream updates UI
```

**Аудио (отправка):**
```
Microphone → AudioRecorderService
  → Stream<Uint8List>
  → AudioRoomProvider
  → AudioRoomService.sendAudioChunk()
  → WebSocket → Server
```

**Аудио (получение):**
```
Server → WebSocket → AudioRoomService
  → Stream<AudioChunkData>
  → AudioRoomProvider
  → AudioPlayerService.playAudioChunk()
  → Browser Audio API
```

## Важные детали реализации

### 1. Управление памятью

```dart
// В AudioPlayerContext
final List<html.AudioElement> _activeAudios = [];

// Автоматическая очистка после воспроизведения
audio.onEnded.listen((_) {
  html.Url.revokeObjectUrl(url);
  _activeAudios.remove(audio);
});
```

### 2. Обработка разрывов соединения

```dart
_channel!.stream.listen(
  _handleMessage,
  onError: (error) {
    _isConnected = false;
    _connectionStateController.add(ConnectionState.error);
  },
  onDone: () {
    _isConnected = false;
    _connectionStateController.add(ConnectionState.disconnected);
  },
);
```

### 3. Формат ID участника

```dart
// ID всегда 36 символов (UUID формат)
final userIdBytes = Uint8List.fromList(_currentUserId!.padRight(36).codeUnits);
```

### 4. Регулировка громкости

```dart
// Громкость применяется к каждому AudioElement
void setVolume(double volume) {
  for (var audio in _activeAudios) {
    audio.volume = volume;
  }
}
```

## Известные ограничения

### 1. Нет автоматического переподключения

**Почему:** Упрощение первой версии

**Как добавить:**
```dart
Timer? _reconnectTimer;
void _scheduleReconnect() {
  _reconnectTimer = Timer(Duration(seconds: 5), () {
    connect(_lastUrl, _lastUserId, _lastUserName);
  });
}
```

### 2. Нет детекции активности голоса (VAD)

**Почему:** Требует дополнительной обработки аудио

**Как добавить:**
```dart
double _calculateRMS(Uint8List data) {
  // Вычисление RMS (Root Mean Square)
  // Если RMS > threshold, то участник говорит
}
```

### 3. Нет поддержки комнат (rooms)

**Почему:** Упрощение архитектуры

**Как добавить:**
- Добавить `roomId` в модели
- Обновить протокол WebSocket
- Добавить UI для выбора комнаты

### 4. Простая обработка ошибок

**Почему:** Фокус на основном функционале

**Как улучшить:**
- Добавить retry логику
- Детальные коды ошибок
- Логирование на сервер

## Оптимизации

### Производительность

**Текущее состояние:**
- Чанки по 100ms
- Без буферизации
- Прямая пересылка

**Возможные улучшения:**
```dart
// Буферизация для сглаживания
class AudioBuffer {
  final Queue<Uint8List> _buffer = Queue();
  
  void add(Uint8List chunk) {
    _buffer.add(chunk);
    if (_buffer.length > 5) {
      _playNext();
    }
  }
}
```

### Память

**Текущее состояние:**
- Автоматическая очистка AudioElement
- Нет кэширования

**Возможные улучшения:**
```dart
// Ограничение количества активных элементов
if (_activeAudios.length > 10) {
  final oldest = _activeAudios.removeAt(0);
  oldest.pause();
}
```

### Сеть

**Текущее состояние:**
- Фиксированный битрейт
- Без адаптации

**Возможные улучшения:**
```dart
// Адаптивный битрейт на основе RTT
if (rtt > 200) {
  _mediaRecorder.audioBitsPerSecond = 16000;
} else {
  _mediaRecorder.audioBitsPerSecond = 32000;
}
```

## Тестирование

### Юнит-тесты

```dart
test('Participant model serialization', () {
  final participant = Participant(
    id: 'test-id',
    name: 'Test User',
  );
  
  final json = participant.toJson();
  final restored = Participant.fromJson(json);
  
  expect(restored.id, participant.id);
  expect(restored.name, participant.name);
});
```

### Интеграционные тесты

```dart
testWidgets('AudioPage shows participants', (tester) async {
  await tester.pumpWidget(
    ChangeNotifierProvider(
      create: (_) => AudioRoomProvider(),
      child: MaterialApp(home: AudioPage()),
    ),
  );
  
  // Проверки UI
});
```

### E2E тесты

Используйте `test_client.html` для ручного тестирования.

## Безопасность

### Текущее состояние (DEV)

- ❌ Нет аутентификации
- ❌ Нет шифрования (ws://)
- ❌ Нет валидации данных
- ❌ Нет rate limiting

### Для продакшена

```dart
// 1. WSS вместо WS
final url = 'wss://your-server.com/audio';

// 2. Аутентификация
final initMessage = WsMessage(
  type: MessageType.metadata,
  data: {
    'userId': userId,
    'userName': userName,
    'token': await _authService.getToken(),
  },
);

// 3. Валидация на сервере
if !isValidToken(token) {
  return error("Unauthorized")
}

// 4. Rate limiting
if rateLimiter.isExceeded(userId) {
  return error("Too many requests")
}
```

## Мониторинг

### Метрики для отслеживания

```dart
class AudioMetrics {
  int packetsReceived = 0;
  int packetsLost = 0;
  double averageLatency = 0;
  int activeParticipants = 0;
  
  double get packetLossRate => 
    packetsLost / (packetsReceived + packetsLost);
}
```

### Логирование

```dart
// Используйте logger вместо print
import 'package:logger/logger.dart';

final logger = Logger();

logger.i('Connected to room');
logger.w('High latency detected: ${latency}ms');
logger.e('Failed to send audio chunk', error);
```

## Следующие шаги

### Краткосрочные (1-2 недели)

1. Добавить автоматическое переподключение
2. Улучшить обработку ошибок
3. Добавить индикатор качества соединения
4. Написать тесты

### Среднесрочные (1-2 месяца)

1. Реализовать VAD (Voice Activity Detection)
2. Добавить поддержку комнат
3. Реализовать запись сессий
4. Добавить администрирование

### Долгосрочные (3+ месяца)

1. Миграция на продакшн бекенд
2. Добавить аутентификацию и авторизацию
3. Реализовать масштабирование
4. Добавить аналитику и мониторинг

## Полезные ссылки

- [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
- [Opus Codec](https://opus-codec.org/)

## Контакты

Для вопросов по реализации обращайтесь к документации или создавайте issue.
