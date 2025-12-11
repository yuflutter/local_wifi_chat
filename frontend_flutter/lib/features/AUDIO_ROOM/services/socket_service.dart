import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/participant.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/ws_message.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class SocketService {
  WebSocketChannel? _socket;
  final _connectionStatusController = StreamController<ConnectionStatus>.broadcast();
  final _participantsController = StreamController<List<Participant>>.broadcast();
  final _audioChunkController = StreamController<AudioChunkData>.broadcast();

  final List<Participant> _participants = [];
  final _userId = di<UserSession>().userHash;
  bool _isConnected = false;

  Stream<List<Participant>> get participantsStream => _participantsController.stream;
  Stream<AudioChunkData> get audioChunkStream => _audioChunkController.stream;
  Stream<ConnectionStatus> get connectionStatusStream => _connectionStatusController.stream;

  List<Participant> get participants => List.unmodifiable(_participants);
  bool get isConnected => _isConnected;

  Future<void> connect(String url, String userName) async {
    final reqNum = log.apiReq('WS CONNECT', url);
    _connectionStatusController.add(ConnectionStatus.connecting);
    try {
      _socket = WebSocketChannel.connect(Uri.parse(url));
      await _socket!.ready;
      log.apiRes(reqNum, 'CONNECTED');
      _connectionStatusController.add(ConnectionStatus.connected);

      // Отправляем начальную информацию о пользователе
      final initMessage = WsMessage(
        type: MessageType.metadata,
        data: {
          'userId': _userId,
          'userName': userName,
          'action': 'join',
        },
      );

      _socket!.sink.add(jsonEncode(initMessage.toJson()));

      _socket!.stream.listen(
        _handleMessage,
        onDone: () {
          _isConnected = false;
          _connectionStatusController.add(ConnectionStatus.disconnected);
        },
        onError: (e) {
          _isConnected = false;
          _connectionStatusController.addError(e);
        },
      );

      _isConnected = true;
      _connectionStatusController.add(ConnectionStatus.connected);
    } catch (e, s) {
      log.apiError(null, reqNum, e, s);
      _isConnected = false;
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
    if (!_isConnected || _socket == null) return;

    // Добавляем ID пользователя к аудио данным
    final userIdBytes = Uint8List.fromList(_userId.padRight(36).codeUnits);
    final message = Uint8List.fromList([...userIdBytes, ...audioData]);

    _socket!.sink.add(message);
  }

  void updateMicrophoneStatus(bool isMuted) {
    if (!_isConnected || _socket == null) return;

    final message = WsMessage(
      type: MessageType.participantUpdate,
      data: {
        'userId': _userId,
        'isMuted': isMuted,
      },
    );

    _socket!.sink.add(jsonEncode(message.toJson()));
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
    _socket?.sink.close();
    _isConnected = false;
    _participants.clear();
    _connectionStatusController.add(ConnectionStatus.disconnected);
  }

  void dispose() {
    disconnect();
    _participantsController.close();
    _audioChunkController.close();
    _connectionStatusController.close();
  }
}
