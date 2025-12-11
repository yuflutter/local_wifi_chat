import 'dart:async';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import '../entity/participant.dart';
import '../services/audio_room_service.dart';
import '../services/audio_player_service.dart';
import '../services/audio_recorder_service.dart';

class VoiceRoomModel extends AbstractModel {
  final AudioRoomService _roomService = AudioRoomService();
  final AudioPlayerService _playerService = AudioPlayerService();
  final AudioRecorderService _recorderService = AudioRecorderService();

  List<Participant> _participants = [];
  ConnectionStatus _connectionState = ConnectionStatus.disconnected;

  bool _isMicrophoneEnabled = false;
  String? _error;

  StreamSubscription? _participantsSubscription;
  StreamSubscription? _audioChunkSubscription;
  StreamSubscription? _connectionStateSubscription;
  StreamSubscription? _recorderSubscription;

  List<Participant> get participants => _participants;
  ConnectionStatus get connectionStatus => _connectionState;
  bool get isMicrophoneEnabled => _isMicrophoneEnabled;
  bool get isConnected => _connectionState == ConnectionStatus.connected;
  String? get error => _error;

  Future<void> connect(String url, String userId, String userName) async {
    try {
      _error = null;
      notifyListeners();

      await _roomService.connect(url, userId, userName);

      _participantsSubscription = _roomService.participantsStream.listen((participants) {
        _participants = participants;
        notifyListeners();
      });

      _audioChunkSubscription = _roomService.audioChunkStream.listen((chunkData) {
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

      _connectionStateSubscription = _roomService.connectionStateStream.listen((state) {
        _connectionState = state;
        if (state == ConnectionStatus.error) {
          _error = 'Connection error';
        }
        notifyListeners();
      });
    } catch (e) {
      _error = e.toString();
      _connectionState = ConnectionStatus.error;
      notifyListeners();
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
        _error = 'Microphone permission denied';
        notifyListeners();
        return;
      }

      await _recorderService.startRecording();

      _recorderSubscription = _recorderService.audioChunkStream.listen((audioData) {
        _roomService.sendAudioChunk(audioData);
      });

      _isMicrophoneEnabled = true;
      _roomService.updateMicrophoneStatus(false);
      notifyListeners();
    } catch (e) {
      _error = 'Failed to start microphone: $e';
      notifyListeners();
    }
  }

  void _stopMicrophone() {
    _recorderService.stopRecording();
    _recorderSubscription?.cancel();
    _recorderSubscription = null;
    _isMicrophoneEnabled = false;
    _roomService.updateMicrophoneStatus(true);
    notifyListeners();
  }

  void setParticipantVolume(String participantId, double volume) {
    _roomService.updateParticipantVolume(participantId, volume);
    _playerService.setVolume(participantId, volume);
  }

  void muteParticipant(String participantId, bool mute) {
    _roomService.muteParticipant(participantId, mute);
    _playerService.setVolume(participantId, mute ? 0.0 : 1.0);
  }

  void disconnect() {
    _stopMicrophone();
    _participantsSubscription?.cancel();
    _audioChunkSubscription?.cancel();
    _connectionStateSubscription?.cancel();
    _recorderSubscription?.cancel();

    _roomService.disconnect();
    _playerService.stopAll();

    _participants = [];
    _connectionState = ConnectionStatus.disconnected;
    _isMicrophoneEnabled = false;
    notifyListeners();
  }

  @override
  void dispose() {
    disconnect();
    _roomService.dispose();
    _playerService.dispose();
    _recorderService.dispose();
    super.dispose();
  }
}
