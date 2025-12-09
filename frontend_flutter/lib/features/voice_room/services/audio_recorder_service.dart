import 'dart:async';
import 'dart:html' as html;
import 'dart:typed_data';

class AudioRecorderService {
  html.MediaStream? _mediaStream;
  html.MediaRecorder? _mediaRecorder;
  final _audioChunkController = StreamController<Uint8List>.broadcast();
  bool _isRecording = false;

  Stream<Uint8List> get audioChunkStream => _audioChunkController.stream;
  bool get isRecording => _isRecording;

  Future<bool> requestPermission() async {
    try {
      final stream = await html.window.navigator.mediaDevices!.getUserMedia({
        'audio': {
          'echoCancellation': true,
          'noiseSuppression': true,
          'autoGainControl': true,
        },
      });

      // Останавливаем стрим сразу после получения разрешения
      stream.getTracks().forEach((track) => track.stop());
      return true;
    } catch (e) {
      print('Error requesting microphone permission: $e');
      return false;
    }
  }

  Future<void> startRecording() async {
    if (_isRecording) return;

    try {
      _mediaStream = await html.window.navigator.mediaDevices!.getUserMedia({
        'audio': {
          'echoCancellation': true,
          'noiseSuppression': true,
          'autoGainControl': true,
        },
      });

      _mediaRecorder = html.MediaRecorder(_mediaStream!, {
        'mimeType': 'audio/webm;codecs=opus',
      });

      _mediaRecorder!.addEventListener('dataavailable', (event) {
        final dataEvent = event as html.BlobEvent;
        if (dataEvent.data != null && dataEvent.data!.size > 0) {
          _readBlobAsUint8List(dataEvent.data!).then((data) {
            if (data != null) {
              _audioChunkController.add(data);
            }
          });
        }
      });

      // Запрашиваем данные каждые 100ms для низкой задержки
      _mediaRecorder!.start(100);
      _isRecording = true;
    } catch (e) {
      print('Error starting recording: $e');
      rethrow;
    }
  }

  Future<Uint8List?> _readBlobAsUint8List(html.Blob blob) async {
    final completer = Completer<Uint8List?>();
    final reader = html.FileReader();

    reader.onLoadEnd.listen((_) {
      if (reader.result != null) {
        completer.complete(reader.result as Uint8List);
      } else {
        completer.complete(null);
      }
    });

    reader.onError.listen((_) {
      completer.complete(null);
    });

    reader.readAsArrayBuffer(blob);
    return completer.future;
  }

  void stopRecording() {
    if (!_isRecording) return;

    _mediaRecorder?.stop();
    _mediaStream?.getTracks().forEach((track) => track.stop());

    _mediaRecorder = null;
    _mediaStream = null;
    _isRecording = false;
  }

  void dispose() {
    stopRecording();
    _audioChunkController.close();
  }
}
