# Руководство по интеграции аудио-комнаты

## Что было создано

### Frontend (Flutter Web)

```
lib/features/voice_room/
├── models/
│   ├── participant.dart          # Модель участника комнаты
│   └── ws_message.dart           # Модель WebSocket сообщений
├── services/
│   ├── audio_room_service.dart   # WebSocket соединение и управление комнатой
│   ├── audio_player_service.dart # Воспроизведение аудио от участников
│   └── audio_recorder_service.dart # Запись аудио с микрофона
├── providers/
│   └── audio_room_provider.dart  # Provider для управления состоянием
├── widgets/
│   ├── connection_dialog.dart    # Диалог подключения к комнате
│   └── participant_tile.dart     # Карточка участника
└── view/
    └── audio_page.dart           # Главная страница аудио-комнаты
```

### Backend Mock (Go)

```
backend_mock/
├── main.go                       # WebSocket сервер
├── go.mod                        # Go зависимости
├── README.md                     # Документация
├── API.md                        # Описание протокола
└── test_client.html              # HTML тестовый клиент
```

### Документация

- `AUDIO_ROOM_README.md` - Общее описание функционала
- `AUDIO_ROOM_SETUP.md` - Инструкция по настройке и запуску
- `INTEGRATION_GUIDE.md` - Это руководство
- `start_audio_room.sh` - Скрипт для быстрого запуска

## Зависимости

Добавлены в `pubspec.yaml`:
```yaml
web_socket_channel: ^3.0.1
permission_handler: ^11.3.1
record: ^5.1.2
```

## Интеграция в существующее приложение

### 1. Provider уже добавлен в main.dart

```dart
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => AudioRoomProvider()),
  ],
  child: MaterialApp(...)
)
```

### 2. Использование AudioPage

Страница `AudioPage` уже готова к использованию. Просто добавьте её в навигацию:

```dart
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const AudioPage()),
);
```

### 3. Программное управление

Если нужно управлять аудио-комнатой программно:

```dart
final provider = context.read<AudioRoomProvider>();

// Подключение
await provider.connect(
  'ws://localhost:8080/audio',
  'user-id-123',
  'User Name',
);

// Включение/выключение микрофона
await provider.toggleMicrophone();

// Регулировка громкости участника
provider.setParticipantVolume('participant-id', 0.5);

// Mute участника
provider.muteParticipant('participant-id', true);

// Отключение
provider.disconnect();
```

## Запуск

### Быстрый старт

```bash
./start_audio_room.sh
```

### Пошаговый запуск

1. **Установите зависимости:**
```bash
flutter pub get
```

2. **Запустите бекенд:**
```bash
cd backend_mock
go mod download
go run main.go
```

3. **Запустите Flutter:**
```bash
flutter run -d chrome --web-browser-flag "--disable-web-security"
```

## Тестирование

### Тест с Flutter приложением

1. Откройте несколько вкладок браузера
2. В каждой вкладке подключитесь с разным именем
3. Включите микрофон в одной вкладке
4. Проверьте, что звук слышен в других вкладках

### Тест с HTML клиентом

```bash
cd backend_mock
# Откройте test_client.html в браузере
```

## Настройка для продакшена

### 1. Замените URL сервера

В `ConnectionDialog` измените дефолтный URL:

```dart
final _urlController = TextEditingController(
  text: 'wss://your-production-server.com/audio'
);
```

### 2. Добавьте аутентификацию

В `AudioRoomService.connect()` добавьте токен:

```dart
final initMessage = WsMessage(
  type: MessageType.metadata,
  data: {
    'userId': userId,
    'userName': userName,
    'action': 'join',
    'token': authToken, // Добавьте токен
  },
);
```

### 3. Обработка ошибок

Добавьте более детальную обработку ошибок в `AudioRoomProvider`:

```dart
try {
  await _roomService.connect(url, userId, userName);
} on WebSocketException catch (e) {
  _error = 'WebSocket error: ${e.message}';
} on TimeoutException catch (e) {
  _error = 'Connection timeout';
} catch (e) {
  _error = 'Unknown error: $e';
}
```

### 4. Автоматическое переподключение

Добавьте в `AudioRoomService`:

```dart
Timer? _reconnectTimer;
int _reconnectAttempts = 0;
final int _maxReconnectAttempts = 5;

void _scheduleReconnect() {
  if (_reconnectAttempts >= _maxReconnectAttempts) {
    _connectionStateController.add(ConnectionState.error);
    return;
  }
  
  _reconnectTimer = Timer(
    Duration(seconds: 2 * (_reconnectAttempts + 1)),
    () => _attemptReconnect(),
  );
  _reconnectAttempts++;
}
```

## Кастомизация UI

### Изменение темы

В `ParticipantTile` измените цвета:

```dart
CircleAvatar(
  backgroundColor: isCurrentUser ? Colors.purple : Colors.teal,
  // ...
)
```

### Добавление анимаций

```dart
AnimatedContainer(
  duration: const Duration(milliseconds: 300),
  decoration: BoxDecoration(
    border: Border.all(
      color: participant.isSpeaking ? Colors.green : Colors.transparent,
      width: 2,
    ),
  ),
  child: ParticipantTile(...),
)
```

### Индикатор активности голоса

Добавьте в `ParticipantTile`:

```dart
if (participant.isSpeaking)
  const Padding(
    padding: EdgeInsets.all(8.0),
    child: CircularProgressIndicator(strokeWidth: 2),
  )
```

## Расширение функционала

### Добавление комнат (rooms)

1. Добавьте `roomId` в модели
2. Обновите протокол WebSocket
3. Добавьте UI для выбора/создания комнаты

### Детекция активности голоса (VAD)

```dart
// В AudioRecorderService
import 'package:flutter_sound/flutter_sound.dart';

void _analyzeAudioLevel(Uint8List data) {
  // Анализ уровня звука
  final level = _calculateRMS(data);
  final isSpeaking = level > threshold;
  
  if (isSpeaking != _lastSpeakingState) {
    _roomService.updateSpeakingStatus(isSpeaking);
  }
}
```

### Запись сессий

```dart
class SessionRecorder {
  final List<AudioChunk> _chunks = [];
  
  void recordChunk(String participantId, Uint8List data) {
    _chunks.add(AudioChunk(
      participantId: participantId,
      data: data,
      timestamp: DateTime.now(),
    ));
  }
  
  Future<void> saveSession(String filename) async {
    // Сохранение в файл
  }
}
```

## Troubleshooting

### Микрофон не работает

1. Проверьте разрешения в браузере
2. Используйте HTTPS или localhost
3. Проверьте флаг `--disable-web-security` при разработке

### Нет звука от других участников

1. Проверьте консоль браузера на ошибки
2. Убедитесь, что формат аудио поддерживается (WebM/Opus)
3. Проверьте настройки громкости

### WebSocket не подключается

1. Убедитесь, что сервер запущен
2. Проверьте URL (ws:// или wss://)
3. Проверьте CORS настройки на сервере

### Высокая задержка

1. Уменьшите размер чанков (сейчас 100ms)
2. Используйте более быстрый сервер
3. Оптимизируйте сетевое соединение

## Производительность

### Оптимизация памяти

```dart
// Ограничьте количество активных аудио элементов
if (_activeAudios.length > 10) {
  final oldest = _activeAudios.removeAt(0);
  oldest.pause();
}
```

### Оптимизация CPU

```dart
// Используйте debounce для обновлений UI
Timer? _updateTimer;
void _scheduleUpdate() {
  _updateTimer?.cancel();
  _updateTimer = Timer(
    const Duration(milliseconds: 100),
    () => notifyListeners(),
  );
}
```

## Безопасность

### Для продакшена обязательно:

1. ✅ Используйте WSS (WebSocket Secure)
2. ✅ Добавьте аутентификацию
3. ✅ Валидируйте данные на сервере
4. ✅ Ограничьте размер сообщений
5. ✅ Добавьте rate limiting
6. ✅ Настройте CORS правильно

## Поддержка

Для вопросов и проблем:
- Проверьте документацию в `AUDIO_ROOM_README.md`
- Изучите API в `backend_mock/API.md`
- Используйте тестовый клиент для отладки

## Лицензия

Часть проекта Local WiFi Chat
