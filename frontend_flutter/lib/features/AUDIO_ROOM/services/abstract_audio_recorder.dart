import 'dart:typed_data';

abstract class AbstractAudioRecorder {
  Stream<Uint8List> get audioChunkStream;

  Future<bool> requestPermission();

  Future<void> startRecording();

  void stopRecording();

  void dispose();
}
