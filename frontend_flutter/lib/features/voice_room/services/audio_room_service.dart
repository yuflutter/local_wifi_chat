import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';
import 'package:web_socket_channel/web_socket_channel.dart';
import '../models/participant.dart';
import '../models/ws_message.dart';

class AudioRoomService {
  WebSocketChannel? _channel;
  final _participantsController = StreamController<List<Participant>>.broadcast();
  final _audioChunkController = StreamController<AudioChunkData>.broadcast();
  final _connectionStateController = StreamController<ConnectionState>.broadcast();

  final List<Participant> _participants = [];
  String? _currentUserId;
  bool _isConnected = false;

  Stream<List<Participant>> get participantsStream => _participantsController.stream;
  Stream<AudioChunkData> get audioChunkStream => _audioChunkController.stream;
  Stream<ConnectionState> get connectionStateStream => _connectionStateController.stream;

  List<Participant> get participants => List.unmodifiable(_participants);
  bool get isConnected => _isConnected;
  String? get currentUserId => _currentUserId;

  Future<void> connect(String url, String userId, String userName) async {
    try {
      _currentUserId = userId;
      _channel = WebSocketChannel.connect(Uri.parse(url));

      _connectionStateController.add(ConnectionState.connecting);

      // Отправляем начальную информацию о пользователе
      final initMessage = WsMessage(
        type: MessageType.metadata,
        data: {
          'userId': userId,
          'userName': userName,
          'action': 'join',
        },
      );

      _channel!.sink.add(jsonEncode(initMessage.toJson()));

      _channel!.stream.listen(
        _handleMessage,
        onError: (error) {
          _isConnected = false;
          _connectionStateController.add(ConnectionState.error);
        },
        onDone: () {
          _isConnected = false;
          _connectionStateController.add(ConnectionState.disconnected);
        },
      );

      _isConnected = true;
      _connectionStateController.add(ConnectionState.connected);
    } catch (e) {
      _isConnected = false;
      _connectionStateController.add(ConnectionState.error);
      rethrow;
    }
  }

  void _handleMessage(dynamic message) {
    try {
      if (message is String) {
        final json = jsonDecode(message) as Map<String, dynamic>;
        final wsMessage = WsMessage.fromJson(json);

        switch (wsMessage.type) {
          case MessageType.metadata:
            _handleMetadata(wsMessage.data!);
            break;
          case MessageType.participantUpdate:
            _handleParticipantUpdate(wsMessage.data!);
            break;
          case MessageType.error:
            print('Error from server: ${wsMessage.data}');
            break;
          default:
            break;
        }
      } else if (message is List<int>) {
        // Бинарные данные - аудио чанк
        _handleAudioChunk(Uint8List.fromList(message));
      }
    } catch (e) {
      print('Error handling message: $e');
    }
  }

  void _handleMetadata(Map<String, dynamic> data) {
    final participantsList = data['participants'] as List<dynamic>?;
    if (participantsList != null) {
      _participants.clear();
      for (var p in participantsList) {
        _participants.add(Participant.fromJson(p as Map<String, dynamic>));
      }
      _participantsController.add(_participants);
    }
  }

  void _handleParticipantUpdate(Map<String, dynamic> data) {
    final participant = Participant.fromJson(data);
    final index = _participants.indexWhere((p) => p.id == participant.id);

    if (index != -1) {
      _participants[index] = participant;
    } else {
      _participants.add(participant);
    }

    _participantsController.add(_participants);
  }

  void _handleAudioChunk(Uint8List data) {
    // Первые 36 байт - это ID участника (UUID в строковом формате)
    if (data.length < 36) return;

    final participantId = String.fromCharCodes(data.sublist(0, 36));
    final audioData = data.sublist(36);

    _audioChunkController.add(
      AudioChunkData(
        participantId: participantId,
        data: audioData,
      ),
    );
  }

  void sendAudioChunk(Uint8List audioData) {
    if (!_isConnected || _channel == null || _currentUserId == null) return;

    // Добавляем ID пользователя к аудио данным
    final userIdBytes = Uint8List.fromList(_currentUserId!.padRight(36).codeUnits);
    final message = Uint8List.fromList([...userIdBytes, ...audioData]);

    _channel!.sink.add(message);
  }

  void updateMicrophoneStatus(bool isMuted) {
    if (!_isConnected || _channel == null) return;

    final message = WsMessage(
      type: MessageType.participantUpdate,
      data: {
        'userId': _currentUserId,
        'isMuted': isMuted,
      },
    );

    _channel!.sink.add(jsonEncode(message.toJson()));
  }

  void updateParticipantVolume(String participantId, double volume) {
    final index = _participants.indexWhere((p) => p.id == participantId);
    if (index != -1) {
      _participants[index] = _participants[index].copyWith(volume: volume);
      _participantsController.add(_participants);
    }
  }

  void muteParticipant(String participantId, bool mute) {
    updateParticipantVolume(participantId, mute ? 0.0 : 1.0);
  }

  void disconnect() {
    _channel?.sink.close();
    _isConnected = false;
    _participants.clear();
    _connectionStateController.add(ConnectionState.disconnected);
  }

  void dispose() {
    disconnect();
    _participantsController.close();
    _audioChunkController.close();
    _connectionStateController.close();
  }
}

class AudioChunkData {
  final String participantId;
  final Uint8List data;

  AudioChunkData({
    required this.participantId,
    required this.data,
  });
}

enum ConnectionState {
  disconnected,
  connecting,
  connected,
  error,
}
