import 'dart:html' as html;
import 'dart:typed_data';
import 'dart:async';

import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/ws_message.dart';

class AudioPlayerService {
  final Map<String, AudioPlayerContext> _playerContexts = {};

  void playAudioChunk(AudioChunk chunk) {
    var context = _playerContexts[chunk.participantId];

    if (context == null) {
      context = AudioPlayerContext(chunk.participantId);
      _playerContexts[chunk.participantId] = context;
    }

    context.addChunk(chunk.audioData, chunk.volume);
  }

  void setVolume(String participantId, double volume) {
    _playerContexts[participantId]?.setVolume(volume);
  }

  void stopParticipant(String participantId) {
    _playerContexts[participantId]?.stop();
    _playerContexts.remove(participantId);
  }

  void stopAll() {
    for (var context in _playerContexts.values) {
      context.stop();
    }
    _playerContexts.clear();
  }

  void dispose() {
    stopAll();
  }
}

class AudioPlayerContext {
  final String participantId;
  final List<Uint8List> _buffer = [];
  Timer? _playbackTimer;
  html.AudioElement? _currentAudio;
  double _volume = 1.0;
  bool _isPlaying = false;

  AudioPlayerContext(this.participantId) {
    // Запускаем таймер для периодического воспроизведения буфера
    _playbackTimer = Timer.periodic(Duration(milliseconds: 200), (_) {
      _playBufferedAudio();
    });
  }

  void addChunk(Uint8List audioData, double volume) {
    _volume = volume;
    _buffer.add(audioData);

    // Ограничиваем размер буфера (максимум 2 секунды)
    if (_buffer.length > 20) {
      _buffer.removeAt(0);
    }
  }

  void _playBufferedAudio() {
    if (_buffer.isEmpty || _isPlaying) return;

    try {
      // Объединяем все чанки в один
      final totalLength = _buffer.fold<int>(0, (sum, chunk) => sum + chunk.length);
      final combined = Uint8List(totalLength);
      var offset = 0;
      for (var chunk in _buffer) {
        combined.setRange(offset, offset + chunk.length, chunk);
        offset += chunk.length;
      }
      _buffer.clear();

      // Создаем blob и воспроизводим
      final blob = html.Blob([combined], 'audio/webm');
      final url = html.Url.createObjectUrlFromBlob(blob);

      _currentAudio?.pause();
      _currentAudio = html.AudioElement(url);
      _currentAudio!.volume = _volume;

      _isPlaying = true;

      _currentAudio!.onEnded.listen((_) {
        html.Url.revokeObjectUrl(url);
        _isPlaying = false;
        _currentAudio = null;
      });

      _currentAudio!.onError.listen((_) {
        html.Url.revokeObjectUrl(url);
        _isPlaying = false;
        _currentAudio = null;
      });

      _currentAudio!.play().catchError((_) {
        _isPlaying = false;
      });
    } catch (e) {
      _isPlaying = false;
    }
  }

  void setVolume(double volume) {
    _volume = volume;
    _currentAudio?.volume = volume;
  }

  void stop() {
    _playbackTimer?.cancel();
    _playbackTimer = null;
    _currentAudio?.pause();
    _currentAudio = null;
    _buffer.clear();
    _isPlaying = false;
  }
}
