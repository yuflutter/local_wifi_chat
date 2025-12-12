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

  late final _socketService = SocketService()
    ..isConnectedStream.listen(
      (s) => notify(() => _isConnected = s),
      onError: (e) {
        presentError(e);
        notify(() => _isConnected = false);
      },
    );

  final AudioPlayerService _playerService = AudioPlayerService();
  final AudioRecorderService _recorderService = AudioRecorderService();

  bool _isMicrophoneEnabled = false;
  bool get isMicrophoneEnabled => _isMicrophoneEnabled;

  StreamSubscription? _participantsSubscription;
  StreamSubscription? _audioChunkSubscription;
  StreamSubscription? _recorderSubscription;

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
      // _socketStatusSubscription = _socketService.socketStatusStream.listen(
      //   (s) {
      //     print(s);
      //     notify(() => _socketStatus = s);
      //   },
      //   onDone: () => print('onDone'),
      //   onError: (e) {
      //     print(e);
      //     presentError(e);
      //     notify(() => _socketStatus = SocketStatus.disconnected);
      //   },
      // );

      await _socketService.connect(url, userName);

      _participantsSubscription = _socketService.participantsStream.listen((participants) {
        _participants = participants;
        notifyListeners();
      });

      _audioChunkSubscription = _socketService.audioChunkStream.listen(
        (chunkData) {
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
        },
      );
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
    _recorderSubscription?.cancel();

    _socketService.disconnect();
    _playerService.stopAll();

    _participants = [];
    _isConnected = false;
    _isMicrophoneEnabled = false;
    notifyListeners();
  }
}
