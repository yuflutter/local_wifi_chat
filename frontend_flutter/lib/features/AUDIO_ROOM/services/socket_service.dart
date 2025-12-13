import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';
import 'package:collection/collection.dart';
import 'package:local_wifi_chat_frontend/core/auto_value.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/participant.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/ws_message.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class SocketService {
  /// Аудио-чанки, приходящие с моего микрофона.
  final Stream<Uint8List> audioRecorderChunkStream;

  /// Функция для воспроизведения аудиочанков (моих и чужих).
  final void Function(AudioChunk) audioPlayerPlayFunc;

  WebSocketChannel? _socket;

  final _isConnected = AutoValue(false);
  late final isConnected = _isConnected.public;

  final _participants = AutoValue<List<Participant>>([]);
  late final participants = _participants.public;

  final _userHash = di<UserSession>().userHash;
  StreamSubscription? _audioRecorderChunkSubscription;

  SocketService({required this.audioRecorderChunkStream, required this.audioPlayerPlayFunc}) {
    _audioRecorderChunkSubscription = audioRecorderChunkStream.listen(sendMyAudioChunk);
  }

  void dispose() {
    _audioRecorderChunkSubscription?.cancel();
    disconnect();
  }

  Future<void> connect(String url, String userName) async {
    final reqNum = log.apiReq('WS CONNECT', url);

    try {
      await Future.delayed(Duration(seconds: 2));

      _socket = WebSocketChannel.connect(Uri.parse(url));
      await _socket!.ready;
      log.apiRes(reqNum, 'CONNECTED');

      // Отправляем начальную информацию о пользователе
      final initMessage = WsMessage(
        type: MessageType.metadata,
        data: {
          'userId': _userHash,
          'userName': userName,
          'action': 'join',
        },
      );

      _socket!.sink.add(jsonEncode(initMessage.toJson()));

      _socket!.stream.listen(
        _handleIncomingMessage,
        onDone: () => _isConnected.set(false),
        onError: (e) => _isConnected.set(false, error: log.error(null, e)),
      );

      _isConnected.set(true);
      //
    } catch (e, s) {
      _isConnected.set(false);
      throw log.apiError(null, reqNum, e, s);
    }
  }

  void _handleIncomingMessage(dynamic message) {
    try {
      // Бинарные данные - аудио чанк
      if (message is List<int>) {
        print('Received binary message, size: ${message.length} bytes');
        _handleIncomingAudioChunk(Uint8List.fromList(message));
        //
        // Текстовые данные - управляющая метадата
      } else if (message is String) {
        print('Received text message: $message');
        final json = jsonDecode(message) as Map<String, dynamic>;
        final wsMessage = WsMessage.fromJson(json);

        switch (wsMessage.type) {
          case MessageType.metadata:
            _handleIncomingMetadata(wsMessage.data!);
            break;
          case MessageType.participantUpdate:
            _handleIncomingParticipantUpdate(wsMessage.data!);
            break;
          case MessageType.error:
            print('Error from server: ${wsMessage.data}');
            break;
          default:
            break;
        }
      }
    } catch (e) {
      print('Error handling message: $e');
    }
  }

  void _handleIncomingAudioChunk(Uint8List data) {
    print('Processing audio chunk: ${data.length} bytes');

    try {
      final chunk = AudioChunk.fromBinaryChunk(data);
      print('Audio chunk from participant: ${chunk.participantId}, audio data size: ${chunk.audioData.length}');

      final p = _participants.value.firstWhereOrNull((p) => (p.id == chunk.participantId));
      if (p != null) {
        chunk.volume = p.volume;
        print('Found participant ${p.name} (${p.id}), volume: ${p.volume}');
      } else {
        print('Warning: participant ${chunk.participantId} not found in participants list');
      }

      audioPlayerPlayFunc(chunk);
    } catch (e) {
      print('Error processing audio chunk: $e');
    }
  }

  void _handleIncomingMetadata(Map<String, dynamic> data) {
    final newParticipants = data['participants'];
    if (newParticipants != null) {
      _participants.set((newParticipants as List).map((e) => Participant.fromJson(e as Map<String, dynamic>)).toList());
    }
  }

  void _handleIncomingParticipantUpdate(Map<String, dynamic> data) {
    final participant = Participant.fromJson(data);
    final index = _participants.value.indexWhere((p) => p.id == participant.id);

    if (index != -1) {
      _participants.value[index] = participant;
    } else {
      _participants.value.add(participant);
    }

    _participants.notifyListeners();
  }

  void sendMyAudioChunk(Uint8List audioData) {
    if (!_isConnected.value || _socket == null) return;

    // Добавляем ID пользователя к аудио данным
    final userIdBytes = Uint8List.fromList(_userHash.codeUnits);
    final message = Uint8List.fromList([...userIdBytes, ...audioData]);

    print(
      'Sending audio: userHash="$_userHash" (${_userHash.length} chars), userIdBytes=${userIdBytes.length} bytes, audioData=${audioData.length} bytes, total=${message.length} bytes',
    );
    _socket!.sink.add(message);
  }

  void updateMyMicrophoneStatus(bool isMuted) {
    if (!_isConnected.value || _socket == null) return;

    final message = WsMessage(
      type: MessageType.participantUpdate,
      data: {
        'userId': _userHash,
        'isMuted': isMuted,
      },
    );

    _socket!.sink.add(jsonEncode(message.toJson()));
  }

  void updateParticipantVolume(String participantId, double volume) {
    final index = _participants.value.indexWhere((p) => p.id == participantId);
    if (index != -1) {
      _participants.value[index] = _participants.value[index].copyWith(volume: volume);
      _participants.notifyListeners();
    }
  }

  void muteParticipant(String participantId, bool mute) {
    updateParticipantVolume(participantId, mute ? 0.0 : 1.0);
  }

  void disconnect() {
    _socket?.sink.close();
    _isConnected.set(false);
    _participants.set([]);
  }
}
