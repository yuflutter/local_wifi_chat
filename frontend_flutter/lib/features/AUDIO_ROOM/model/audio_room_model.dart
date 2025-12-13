import 'dart:async';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/participant.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/abstract_audio_player.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/audio_recorder.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/socket_service.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class AudioRoomModel extends AbstractModel {
  final _audioRecorder = AudioRecorder();
  final _audioPlayer = di<AbstractAudioPlayer>();

  late final _socketService =
      SocketService(
          audioRecorderChunkStream: _audioRecorder.audioChunkStream,
          audioPlayerPlayFunc: _audioPlayer.playAudioChunk,
        )
        ..isConnected.stream.listen(
          (v) => notifyListeners(),
          onError: (e) {
            presentError(e);
            notifyListeners();
          },
        )
        ..participants.stream.listen(
          (v) => notifyListeners(),
          onError: (e) {
            presentError(e);
            notifyListeners();
          },
        );

  bool get isConnected => _socketService.isConnected.value;
  List<Participant> get participants => _socketService.participants.value;

  bool _isMicrophoneEnabled = false;
  bool get isMicrophoneEnabled => _isMicrophoneEnabled;

  AudioRoomModel({super.errorPresenter});

  @override
  void dispose() {
    disconnect();
    _socketService.dispose();
    _audioPlayer.dispose();
    _audioRecorder.dispose();
    super.dispose();
  }

  Future<void> connect(String url, String userName) async {
    try {
      await _socketService.connect(url, userName);
      di<UserSession>().setUserName(userName);
      //
    } catch (e, s) {
      presentError(e, s);
      rethrow;
    }
  }

  Future<void> toggleMicrophone() async {
    if (_isMicrophoneEnabled) {
      _stopMicrophone();
    } else {
      await _startMicrophone();
    }
  }

  Future<void> _startMicrophone() async {
    try {
      final hasPermission = await _audioRecorder.requestPermission();
      if (!hasPermission) {
        throw 'Microphone permission denied';
      }

      await _audioRecorder.startRecording();

      _isMicrophoneEnabled = true;
      _socketService.updateMyMicrophoneStatus(false);
      notifyListeners();
    } catch (e, s) {
      presentError('Failed to start microphone: $e', s);
    }
  }

  void _stopMicrophone() {
    _audioRecorder.stopRecording();
    _isMicrophoneEnabled = false;
    _socketService.updateMyMicrophoneStatus(true);
    notifyListeners();
  }

  void setParticipantVolume(String participantId, double volume) {
    _socketService.updateParticipantVolume(participantId, volume);
    _audioPlayer.setVolume(participantId, volume);
  }

  void muteParticipant(String participantId, bool mute) {
    _socketService.muteParticipant(participantId, mute);
    _audioPlayer.setVolume(participantId, mute ? 0.0 : 1.0);
  }

  void disconnect() {
    _stopMicrophone();

    _socketService.disconnect();
    _audioPlayer.stopAll();

    _isMicrophoneEnabled = false;
    notifyListeners();
  }
}
