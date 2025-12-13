// lib/web_audio_player_interop.dart
import 'dart:js_interop';
import 'dart:html' as html;
import 'dart:typed_data';

// --- Привязки к Web Audio API (Interop bindings) ---
// Эти классы и расширения позволяют Dart "видеть" и вызывать нативные функции JavaScript

@JS('AudioContext')
@staticInterop
class AudioContext {}

extension AudioContextExtension on AudioContext {
  external Future<JSAny> decodeAudioData(JSArrayBuffer audioData);

  external AudioBufferSourceNode createBufferSource();

  external num get currentTime;

  external AudioDestinationNode get destination;
}

@JS()
@staticInterop
class AudioBufferSourceNode {}

extension AudioBufferSourceNodeExtension on AudioBufferSourceNode {
  external set buffer(AudioBuffer value);

  external void connect(AudioDestinationNode destination);

  external void start([num when]);
}

@JS()
@staticInterop
class AudioBuffer {}

extension AudioBufferExtension on AudioBuffer {
  external num get duration;
}

@JS()
@staticInterop
class AudioDestinationNode {}

// --- Класс-обертка для управления воспроизведением ---

class WebAudioPlayerInterop {
  // Инициализируем AudioContext через нативный JS-конструктор
  late final AudioContext audioContext = (html.window as dynamic).AudioContext().externalConstructor() as AudioContext;
  // late final AudioContext audioContext = AudioContext().externalConstructor();

  // Очередь для хранения входящих чанков
  final List<Uint8List> _bufferQueue = [];
  bool _isPlaying = false;
  num _nextPlaybackTime = 0; // Время начала следующего чанка

  WebAudioPlayerInterop() {
    _nextPlaybackTime = audioContext.currentTime;
  }

  /// Добавляет новый аудио-чанк в очередь воспроизведения.
  void addChunk(Uint8List chunk) {
    _bufferQueue.add(chunk);
    // Если плеер простаивает, запускаем обработку очереди
    if (!_isPlaying) {
      _processQueue();
    }
  }

  /// Асинхронно обрабатывает очередь, декодирует чанки и ставит их на воспроизведение.
  Future<void> _processQueue() async {
    if (_bufferQueue.isEmpty) {
      _isPlaying = false;
      return;
    }

    _isPlaying = true;
    final chunk = _bufferQueue.removeAt(0);

    try {
      // 1. Конвертируем Dart Uint8List в JavaScript ArrayBuffer
      final JSArrayBuffer jsBuffer = chunk.buffer.toJS;

      // 2. Асинхронно декодируем бинарные данные (ожидается формат MP3, WAV, AAC...)
      final JSAny bufferAny = await audioContext.decodeAudioData(jsBuffer);
      final AudioBuffer buffer = bufferAny as AudioBuffer;

      // 3. Рассчитываем точное время старта для бесшовного воспроизведения
      // Если текущее время AudioContext "убежало" вперед (задержка сети),
      // стартуем немедленно.
      if (_nextPlaybackTime < audioContext.currentTime) {
        _nextPlaybackTime = audioContext.currentTime;
      }

      // 4. Создаем источник звука (Source Node) и подключаем его
      final source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start(_nextPlaybackTime); // Запуск в конкретный момент времени

      // 5. Обновляем время старта следующего чанка, добавляя длительность текущего
      _nextPlaybackTime += buffer.duration;

      // 6. Рекурсивно вызываем себя для обработки следующего элемента в очереди
      _processQueue();
    } catch (e) {
      print("Error decoding audio data: $e");
      // Если чанк поврежден, пропускаем его и идем дальше
      _processQueue();
    }
  }
}
