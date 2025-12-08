import 'dart:html' as html;
import 'dart:typed_data';

class AudioPlayerService {
  final Map<String, AudioPlayerContext> _playerContexts = {};

  void playAudioChunk(String participantId, Uint8List audioData, double volume) {
    var context = _playerContexts[participantId];

    if (context == null) {
      context = AudioPlayerContext(participantId);
      _playerContexts[participantId] = context;
    }

    context.playChunk(audioData, volume);
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
  final List<html.AudioElement> _activeAudios = [];

  AudioPlayerContext(this.participantId);

  void playChunk(Uint8List audioData, double volume) {
    try {
      // Создаем blob из аудио данных
      final blob = html.Blob([audioData], 'audio/webm');
      final url = html.Url.createObjectUrlFromBlob(blob);

      // Создаем audio element
      final audio = html.AudioElement(url);
      audio.volume = volume;

      _activeAudios.add(audio);

      audio.play();

      // Очистка после воспроизведения
      audio.onEnded.listen((_) {
        html.Url.revokeObjectUrl(url);
        _activeAudios.remove(audio);
      });
    } catch (e) {
      // Игнорируем ошибки воспроизведения
    }
  }

  void setVolume(double volume) {
    for (var audio in _activeAudios) {
      audio.volume = volume;
    }
  }

  void stop() {
    for (var audio in _activeAudios) {
      try {
        audio.pause();
      } catch (e) {
        // Ignore errors when stopping
      }
    }
    _activeAudios.clear();
  }
}
