import 'dart:async';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/participant.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/audio_player_service.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/audio_recorder_service.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/services/socket_service.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class AudioRoomModel extends AbstractModel {
  ConnectionStatus _connectionState = ConnectionStatus.disconnected;

  final _socketService = SocketService();
  late final _connectionStatusSubscription = _socketService.connectionStatusStream.listen(
    (s) => notify(() => _connectionState = s),
    onError: (e) {
      presentError(e);
      notify(() => _connectionState = ConnectionStatus.disconnected);
    },
  );

  final AudioPlayerService _playerService = AudioPlayerService();
  final AudioRecorderService _recorderService = AudioRecorderService();

  List<Participant> _participants = [];

  bool _isMicrophoneEnabled = false;

  StreamSubscription? _participantsSubscription;
  StreamSubscription? _audioChunkSubscription;
  StreamSubscription? _recorderSubscription;

  List<Participant> get participants => _participants;
  ConnectionStatus get connectionStatus => _connectionState;
  bool get isMicrophoneEnabled => _isMicrophoneEnabled;
  bool get isConnected => _connectionState == ConnectionStatus.connected;

  AudioRoomModel({super.errorPresenter});

  Future<void> connect(String url, String userName) async {
    try {
      await _socketService.connect(url, userName);

      _participantsSubscription = _socketService.participantsStream.listen((participants) {
        _participants = participants;
        notifyListeners();
      });

      _audioChunkSubscription = _socketService.audioChunkStream.listen((chunkData) {
        // Не воспроизводим свой собственный звук
        // if (chunkData.participantId == userId) return;

        final participant = _participants.firstWhere(
          (p) => p.id == chunkData.participantId,
          orElse: () => Participant(id: chunkData.participantId, name: 'Unknown'),
        );

        _playerService.playAudioChunk(
          chunkData.participantId,
          chunkData.data,
          participant.volume,
        );
      });

      di<UserSession>().setUserName(userName);
      //
    } catch (e, s) {
      presentError(e, s);
      _connectionState = ConnectionStatus.disconnected;
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

      _recorderSubscription = _recorderService.audioChunkStream.listen((audioData) {
        _socketService.sendAudioChunk(audioData);
      });

      _isMicrophoneEnabled = true;
      _socketService.updateMicrophoneStatus(false);
      notifyListeners();
    } catch (e, s) {
      presentError('Failed to start microphone: $e', s);
    }
  }

  void _stopMicrophone() {
    _recorderService.stopRecording();
    _recorderSubscription?.cancel();
    _recorderSubscription = null;
    _isMicrophoneEnabled = false;
    _socketService.updateMicrophoneStatus(true);
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
    _participantsSubscription?.cancel();
    _audioChunkSubscription?.cancel();
    _connectionStatusSubscription.cancel();
    _recorderSubscription?.cancel();

    _socketService.disconnect();
    _playerService.stopAll();

    _participants = [];
    _connectionState = ConnectionStatus.disconnected;
    _isMicrophoneEnabled = false;
    notifyListeners();
  }

  @override
  void dispose() {
    disconnect();
    _socketService.dispose();
    _playerService.dispose();
    _recorderService.dispose();
    super.dispose();
  }
}
