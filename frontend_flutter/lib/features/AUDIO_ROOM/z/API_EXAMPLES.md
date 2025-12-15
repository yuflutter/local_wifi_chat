# Примеры использования API аудио-комнаты

## Базовое использование

### 1. Подключение к комнате

```dart
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/features/voice_room/providers/audio_room_provider.dart';

// В вашем виджете
final provider = context.read<AudioRoomProvider>();

try {
  await provider.connect(
    'ws://localhost:8080/audio',  // URL сервера
    'user-123',                    // Уникальный ID пользователя
    'Иван Иванов',                 // Имя пользователя
  );
  
  print('Подключено!');
} catch (e) {
  print('Ошибка подключения: $e');
}
```

### 2. Отслеживание состояния подключения

```dart
Consumer<AudioRoomProvider>(
  builder: (context, provider, child) {
    switch (provider.connectionState) {
      case ConnectionState.connected:
        return Text('Подключено', style: TextStyle(color: Colors.green));
      case ConnectionState.connecting:
        return Text('Подключение...', style: TextStyle(color: Colors.orange));
      case ConnectionState.disconnected:
        return Text('Отключено', style: TextStyle(color: Colors.grey));
      case ConnectionState.error:
        return Text('Ошибка: ${provider.error}', style: TextStyle(color: Colors.red));
    }
  },
)
```

### 3. Отображение списка участников

```dart
Consumer<AudioRoomProvider>(
  builder: (context, provider, child) {
    if (provider.participants.isEmpty) {
      return Center(child: Text('Нет участников'));
    }
    
    return ListView.builder(
      itemCount: provider.participants.length,
      itemBuilder: (context, index) {
        final participant = provider.participants[index];
        return ListTile(
          leading: CircleAvatar(
            child: Text(participant.name[0]),
          ),
          title: Text(participant.name),
          subtitle: Text(
            participant.isMuted ? 'Микрофон выключен' : 'Микрофон включен',
          ),
          trailing: Icon(
            participant.isMuted ? Icons.mic_off : Icons.mic,
            color: participant.isMuted ? Colors.red : Colors.green,
          ),
        );
      },
    );
  },
)
```

### 4. Управление микрофоном

```dart
// Включение/выключение микрофона
FloatingActionButton(
  onPressed: () async {
    final provider = context.read<AudioRoomProvider>();
    await provider.toggleMicrophone();
  },
  child: Consumer<AudioRoomProvider>(
    builder: (context, provider, child) {
      return Icon(
        provider.isMicrophoneEnabled ? Icons.mic : Icons.mic_off,
      );
    },
  ),
)
```

### 5. Регулировка громкости участника

```dart
Slider(
  value: participant.volume,
  min: 0.0,
  max: 1.0,
  divisions: 10,
  label: '${(participant.volume * 100).round()}%',
  onChanged: (value) {
    final provider = context.read<AudioRoomProvider>();
    provider.setParticipantVolume(participant.id, value);
  },
)
```

### 6. Mute участника

```dart
IconButton(
  icon: Icon(
    participant.volume == 0 ? Icons.volume_off : Icons.volume_up,
  ),
  onPressed: () {
    final provider = context.read<AudioRoomProvider>();
    provider.muteParticipant(participant.id, participant.volume > 0);
  },
)
```

### 7. Отключение от комнаты

```dart
ElevatedButton(
  onPressed: () {
    final provider = context.read<AudioRoomProvider>();
    provider.disconnect();
    Navigator.pop(context);
  },
  child: Text('Выйти из комнаты'),
)
```

## Продвинутое использование

### 1. Кастомный диалог подключения

```dart
class CustomConnectionDialog extends StatefulWidget {
  @override
  State<CustomConnectionDialog> createState() => _CustomConnectionDialogState();
}

class _CustomConnectionDialogState extends State<CustomConnectionDialog> {
  final _nameController = TextEditingController();
  String? _selectedRoom;
  
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Подключение'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          TextField(
            controller: _nameController,
            decoration: InputDecoration(labelText: 'Ваше имя'),
          ),
          DropdownButton<String>(
            value: _selectedRoom,
            hint: Text('Выберите комнату'),
            items: ['Комната 1', 'Комната 2', 'Комната 3']
                .map((room) => DropdownMenuItem(
                      value: room,
                      child: Text(room),
                    ))
                .toList(),
            onChanged: (value) => setState(() => _selectedRoom = value),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: Text('Отмена'),
        ),
        ElevatedButton(
          onPressed: () async {
            if (_nameController.text.isEmpty || _selectedRoom == null) {
              return;
            }
            
            final provider = context.read<AudioRoomProvider>();
            await provider.connect(
              'ws://localhost:8080/audio',
              DateTime.now().millisecondsSinceEpoch.toString(),
              _nameController.text,
            );
            
            Navigator.pop(context);
          },
          child: Text('Подключиться'),
        ),
      ],
    );
  }
}
```

### 2. Индикатор качества соединения

```dart
class ConnectionQualityIndicator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<AudioRoomProvider>(
      builder: (context, provider, child) {
        if (!provider.isConnected) {
          return Icon(Icons.signal_wifi_off, color: Colors.red);
        }
        
        // Здесь можно добавить логику определения качества
        // на основе задержки, потери пакетов и т.д.
        return Icon(Icons.signal_wifi_4_bar, color: Colors.green);
      },
    );
  }
}
```

### 3. Кастомная карточка участника с анимацией

```dart
class AnimatedParticipantCard extends StatelessWidget {
  final Participant participant;
  final bool isCurrentUser;
  
  const AnimatedParticipantCard({
    required this.participant,
    required this.isCurrentUser,
  });
  
  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: Duration(milliseconds: 300),
      decoration: BoxDecoration(
        border: Border.all(
          color: participant.isSpeaking ? Colors.green : Colors.transparent,
          width: 3,
        ),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Card(
        child: ListTile(
          leading: Stack(
            children: [
              CircleAvatar(
                backgroundColor: isCurrentUser ? Colors.blue : Colors.grey,
                child: Text(participant.name[0].toUpperCase()),
              ),
              if (participant.isSpeaking)
                Positioned(
                  right: 0,
                  bottom: 0,
                  child: Container(
                    width: 12,
                    height: 12,
                    decoration: BoxDecoration(
                      color: Colors.green,
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 2),
                    ),
                  ),
                ),
            ],
          ),
          title: Text(participant.name),
          subtitle: Row(
            children: [
              Icon(
                participant.isMuted ? Icons.mic_off : Icons.mic,
                size: 16,
                color: participant.isMuted ? Colors.red : Colors.green,
              ),
              SizedBox(width: 4),
              Text(participant.isMuted ? 'Выкл' : 'Вкл'),
            ],
          ),
          trailing: VolumeControl(participant: participant),
        ),
      ),
    );
  }
}

class VolumeControl extends StatelessWidget {
  final Participant participant;
  
  const VolumeControl({required this.participant});
  
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        IconButton(
          icon: Icon(Icons.volume_down),
          onPressed: () {
            final provider = context.read<AudioRoomProvider>();
            final newVolume = (participant.volume - 0.1).clamp(0.0, 1.0);
            provider.setParticipantVolume(participant.id, newVolume);
          },
        ),
        Text('${(participant.volume * 100).round()}%'),
        IconButton(
          icon: Icon(Icons.volume_up),
          onPressed: () {
            final provider = context.read<AudioRoomProvider>();
            final newVolume = (participant.volume + 0.1).clamp(0.0, 1.0);
            provider.setParticipantVolume(participant.id, newVolume);
          },
        ),
      ],
    );
  }
}
```

### 4. Обработка ошибок с retry

```dart
class RobustAudioConnection {
  final AudioRoomProvider provider;
  int _retryCount = 0;
  final int _maxRetries = 3;
  
  RobustAudioConnection(this.provider);
  
  Future<void> connectWithRetry(String url, String userId, String userName) async {
    while (_retryCount < _maxRetries) {
      try {
        await provider.connect(url, userId, userName);
        _retryCount = 0; // Сброс счетчика при успехе
        return;
      } catch (e) {
        _retryCount++;
        if (_retryCount >= _maxRetries) {
          throw Exception('Не удалось подключиться после $_maxRetries попыток');
        }
        
        // Экспоненциальная задержка
        await Future.delayed(Duration(seconds: 2 * _retryCount));
      }
    }
  }
}

// Использование
final robustConnection = RobustAudioConnection(provider);
try {
  await robustConnection.connectWithRetry(url, userId, userName);
} catch (e) {
  showDialog(
    context: context,
    builder: (context) => AlertDialog(
      title: Text('Ошибка'),
      content: Text('Не удалось подключиться: $e'),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: Text('OK'),
        ),
      ],
    ),
  );
}
```

### 5. Сохранение настроек громкости

```dart
import 'package:shared_preferences/shared_preferences.dart';

class VolumePreferences {
  static const _prefix = 'participant_volume_';
  
  static Future<void> saveVolume(String participantId, double volume) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setDouble('$_prefix$participantId', volume);
  }
  
  static Future<double> loadVolume(String participantId) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getDouble('$_prefix$participantId') ?? 1.0;
  }
  
  static Future<void> clearAll() async {
    final prefs = await SharedPreferences.getInstance();
    final keys = prefs.getKeys().where((key) => key.startsWith(_prefix));
    for (var key in keys) {
      await prefs.remove(key);
    }
  }
}

// Использование
// При изменении громкости
provider.setParticipantVolume(participantId, volume);
await VolumePreferences.saveVolume(participantId, volume);

// При загрузке участника
final savedVolume = await VolumePreferences.loadVolume(participant.id);
provider.setParticipantVolume(participant.id, savedVolume);
```

### 6. Уведомления о событиях

```dart
class AudioRoomNotifications {
  static void showParticipantJoined(BuildContext context, String name) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            Icon(Icons.person_add, color: Colors.white),
            SizedBox(width: 8),
            Text('$name присоединился'),
          ],
        ),
        backgroundColor: Colors.green,
        duration: Duration(seconds: 2),
      ),
    );
  }
  
  static void showParticipantLeft(BuildContext context, String name) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            Icon(Icons.person_remove, color: Colors.white),
            SizedBox(width: 8),
            Text('$name вышел'),
          ],
        ),
        backgroundColor: Colors.orange,
        duration: Duration(seconds: 2),
      ),
    );
  }
  
  static void showConnectionError(BuildContext context, String error) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            Icon(Icons.error, color: Colors.white),
            SizedBox(width: 8),
            Expanded(child: Text(error)),
          ],
        ),
        backgroundColor: Colors.red,
        duration: Duration(seconds: 5),
        action: SnackBarAction(
          label: 'Повторить',
          textColor: Colors.white,
          onPressed: () {
            // Логика переподключения
          },
        ),
      ),
    );
  }
}

// Использование в Provider
class AudioRoomProviderWithNotifications extends AudioRoomProvider {
  final BuildContext context;
  
  AudioRoomProviderWithNotifications(this.context);
  
  @override
  Future<void> connect(String url, String userId, String userName) async {
    try {
      await super.connect(url, userId, userName);
    } catch (e) {
      AudioRoomNotifications.showConnectionError(context, e.toString());
      rethrow;
    }
  }
}
```

## Интеграция с существующим кодом

### Добавление в навигацию

```dart
// В вашем главном меню
ListTile(
  leading: Icon(Icons.mic),
  title: Text('Аудио-комната'),
  onTap: () {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => AudioPage(),
      ),
    );
  },
)
```

### Использование в TabBar

```dart
DefaultTabController(
  length: 2,
  child: Scaffold(
    appBar: AppBar(
      title: Text('Чат'),
      bottom: TabBar(
        tabs: [
          Tab(icon: Icon(Icons.chat), text: 'Текст'),
          Tab(icon: Icon(Icons.mic), text: 'Аудио'),
        ],
      ),
    ),
    body: TabBarView(
      children: [
        TextChatPage(),
        AudioPage(),
      ],
    ),
  ),
)
```

## Тестирование

### Мок для тестов

```dart
class MockAudioRoomProvider extends AudioRoomProvider {
  @override
  Future<void> connect(String url, String userId, String userName) async {
    await Future.delayed(Duration(milliseconds: 100));
    // Симуляция успешного подключения
  }
  
  @override
  Future<void> toggleMicrophone() async {
    await Future.delayed(Duration(milliseconds: 50));
    // Симуляция переключения микрофона
  }
}

// В тестах
testWidgets('AudioPage shows participants', (tester) async {
  await tester.pumpWidget(
    ChangeNotifierProvider<AudioRoomProvider>(
      create: (_) => MockAudioRoomProvider(),
      child: MaterialApp(home: AudioPage()),
    ),
  );
  
  // Ваши проверки
});
```

Эти примеры покрывают большинство сценариев использования API аудио-комнаты.
