import 'dart:async';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/participant.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/audio_player_service.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/audio_recorder_service.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/socket_service.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class AudioRoomModel extends AbstractModel {
  bool _isConnected = false;
  bool get isConnected => _isConnected;

  List<Participant> _participants = [];
  List<Participant> get participants => _participants;

  final AudioRecorderService _recorderService = AudioRecorderService();
  final AudioPlayerService _playerService = AudioPlayerService();

  late final _socketService =
      SocketService(
          audioRecorderChunkStream: _recorderService.audioChunkStream,
          audioPlayerPlayFunc: _playerService.playAudioChunk,
        )
        ..isConnectedStream.listen(
          (s) => notify(() => _isConnected = s),
          onError: (e) {
            presentError(e);
            notify(() => _isConnected = false);
          },
        )
        ..participantsStream.listen(
          (pp) => notify(() => _participants = pp),
          onError: (e) => presentError(e),
        );

  bool _isMicrophoneEnabled = false;
  bool get isMicrophoneEnabled => _isMicrophoneEnabled;

  AudioRoomModel({super.errorPresenter});

  @override
  void dispose() {
    disconnect();
    // _socketStatusSubscription.cancel();
    _socketService.dispose();
    _playerService.dispose();
    _recorderService.dispose();
    super.dispose();
  }

  Future<void> connect(String url, String userName) async {
    try {
      await _socketService.connect(url, userName);
      di<UserSession>().setUserName(userName);
      //
    } catch (e, s) {
      presentError(e, s);
      notify(() => _isConnected = false);
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
      final hasPermission = await _recorderService.requestPermission();
      if (!hasPermission) {
        throw 'Microphone permission denied';
      }

      await _recorderService.startRecording();

      _isMicrophoneEnabled = true;
      _socketService.updateMyMicrophoneStatus(false);
      notifyListeners();
    } catch (e, s) {
      presentError('Failed to start microphone: $e', s);
    }
  }

  void _stopMicrophone() {
    _recorderService.stopRecording();
    _isMicrophoneEnabled = false;
    _socketService.updateMyMicrophoneStatus(true);
    notifyListeners();
  }

  void setParticipantVolume(String participantId, double volume) {
    _socketService.updateParticipantVolume(participantId, volume);
    _playerService.setVolume(participantId, volume);
  }

  void muteParticipant(String participantId, bool mute) {
    _socketService.muteParticipant(participantId, mute);
    _playerService.setVolume(participantId, mute ? 0.0 : 1.0);
  }

  void disconnect() {
    _stopMicrophone();

    _socketService.disconnect();
    _playerService.stopAll();

    _participants = [];
    _isConnected = false;
    _isMicrophoneEnabled = false;
    notifyListeners();
  }
}
