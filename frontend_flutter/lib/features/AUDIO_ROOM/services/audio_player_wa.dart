import 'dart:js_interop';
import 'dart:typed_data';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/abstract_audio_player.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/ws_message.dart';

// --- Привязки к Web Audio API (Interop bindings) ---
// Эти классы и расширения позволяют Dart "видеть" и вызывать нативные функции JavaScript

@JS('AudioContext')
@staticInterop
class AudioContext {
  external factory AudioContext();
}

extension AudioContextExtension on AudioContext {
  external JSPromise<JSAny> decodeAudioData(JSArrayBuffer audioData);
  external AudioBufferSourceNode createBufferSource();
  external GainNode createGain();
  external num get currentTime;
  external AudioDestinationNode get destination;
}

@JS()
@staticInterop
class AudioBufferSourceNode {}

extension AudioBufferSourceNodeExtension on AudioBufferSourceNode {
  external set buffer(AudioBuffer value);
  external void connect(GainNode destination);
  external void connectToDestination(AudioDestinationNode destination);
  external void start([num when]);
  external void stop([num when]);
}

@JS()
@staticInterop
class GainNode {}

extension GainNodeExtension on GainNode {
  external AudioParam get gain;
  external void connect(AudioDestinationNode destination);
}

@JS()
@staticInterop
class AudioParam {}

extension AudioParamExtension on AudioParam {
  external set value(num value);
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

// --- Контекст для каждого участника ---
class ParticipantAudioContext {
  final List<Uint8List> bufferQueue = [];
  bool isPlaying = false;
  num nextPlaybackTime = 0;
  double volume = 1.0;
  final List<AudioBufferSourceNode> activeSources = [];
  GainNode? gainNode;

  ParticipantAudioContext(AudioContext audioContext) {
    nextPlaybackTime = audioContext.currentTime;
    gainNode = audioContext.createGain();
    gainNode!.connect(audioContext.destination);
  }

  void dispose() {
    // Останавливаем все активные источники
    for (final source in activeSources) {
      try {
        source.stop();
      } catch (e) {
        // Игнорируем ошибки при остановке
      }
    }
    activeSources.clear();
    bufferQueue.clear();
  }
}

// --- Класс-обертка для управления воспроизведением ---
class AudioPlayerWA implements AbstractAudioPlayer {
  late final AudioContext _audioContext;
  final Map<String, ParticipantAudioContext> _participantContexts = {};
  bool _disposed = false;

  AudioPlayerWA() {
    _audioContext = AudioContext();
  }

  @override
  void playAudioChunk(AudioChunk chunk) {
    if (_disposed) return;

    final participantId = chunk.participantId;

    // Создаем контекст для участника, если его еще нет
    _participantContexts[participantId] ??= ParticipantAudioContext(_audioContext);

    final context = _participantContexts[participantId]!;
    context.bufferQueue.add(chunk.audioData);

    // Устанавливаем громкость из чанка
    if (context.gainNode != null) {
      context.gainNode!.gain.value = chunk.volume;
    }

    // Если плеер простаивает, запускаем обработку очереди
    if (!context.isPlaying) {
      _processQueue(participantId);
    }
  }

  @override
  void setVolume(String participantId, double volume) {
    if (_disposed) return;

    final context = _participantContexts[participantId];
    if (context != null) {
      context.volume = volume;
      if (context.gainNode != null) {
        context.gainNode!.gain.value = volume;
      }
    }
  }

  @override
  void stopParticipant(String participantId) {
    if (_disposed) return;

    final context = _participantContexts[participantId];
    if (context != null) {
      context.dispose();
      _participantContexts.remove(participantId);
    }
  }

  @override
  void stopAll() {
    if (_disposed) return;

    for (final context in _participantContexts.values) {
      context.dispose();
    }
    _participantContexts.clear();
  }

  @override
  void dispose() {
    if (_disposed) return;

    _disposed = true;
    stopAll();
  }

  /// Асинхронно обрабатывает очередь для конкретного участника
  Future<void> _processQueue(String participantId) async {
    if (_disposed) return;

    final context = _participantContexts[participantId];
    if (context == null || context.bufferQueue.isEmpty) {
      if (context != null) {
        context.isPlaying = false;
      }
      return;
    }

    context.isPlaying = true;
    final chunk = context.bufferQueue.removeAt(0);

    try {
      // 1. Конвертируем Dart Uint8List в JavaScript ArrayBuffer
      final JSArrayBuffer jsBuffer = chunk.buffer.toJS;

      // 2. Асинхронно декодируем бинарные данные
      final JSPromise<JSAny> promise = _audioContext.decodeAudioData(jsBuffer);
      final JSAny bufferAny = await promise.toDart;
      final AudioBuffer buffer = bufferAny as AudioBuffer;

      // 3. Рассчитываем точное время старта для бесшовного воспроизведения
      if (context.nextPlaybackTime < _audioContext.currentTime) {
        context.nextPlaybackTime = _audioContext.currentTime;
      }

      // 4. Создаем источник звука и подключаем через gain node для контроля громкости
      final source = _audioContext.createBufferSource();
      source.buffer = buffer;

      if (context.gainNode != null) {
        source.connect(context.gainNode!);
        context.gainNode!.gain.value = context.volume;
      } else {
        source.connectToDestination(_audioContext.destination);
      }

      // Добавляем источник в список активных
      context.activeSources.add(source);

      source.start(context.nextPlaybackTime);

      // 5. Обновляем время старта следующего чанка
      context.nextPlaybackTime += buffer.duration;

      // Удаляем источник из списка активных после завершения воспроизведения
      Future.delayed(Duration(milliseconds: (buffer.duration * 1000).round() + 100), () {
        context.activeSources.remove(source);
      });

      // 6. Рекурсивно обрабатываем следующий элемент в очереди
      _processQueue(participantId);
    } catch (e) {
      // Если чанк поврежден, пропускаем его и идем дальше
      _processQueue(participantId);
    }
  }
}
