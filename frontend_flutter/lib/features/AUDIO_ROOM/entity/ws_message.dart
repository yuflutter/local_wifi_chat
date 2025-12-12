import 'dart:typed_data';

import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';

enum MessageType {
  metadata,
  audioChunk,
  participantUpdate,
  error,
}

class WsMessage {
  final MessageType type;
  final Map<String, dynamic>? data;
  final Uint8List? audioData;
  final String? participantId;

  WsMessage({
    required this.type,
    this.data,
    this.audioData,
    this.participantId,
  });

  factory WsMessage.fromJson(Map<String, dynamic> json) {
    final typeStr = json['type'] as String;
    MessageType type;

    switch (typeStr) {
      case 'metadata':
        type = MessageType.metadata;
        break;
      case 'audio_chunk':
        type = MessageType.audioChunk;
        break;
      case 'participant_update':
        type = MessageType.participantUpdate;
        break;
      case 'error':
        type = MessageType.error;
        break;
      default:
        type = MessageType.error;
    }

    return WsMessage(
      type: type,
      data: json['data'] as Map<String, dynamic>?,
      participantId: json['participantId'] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    String typeStr;
    switch (type) {
      case MessageType.metadata:
        typeStr = 'metadata';
        break;
      case MessageType.audioChunk:
        typeStr = 'audio_chunk';
        break;
      case MessageType.participantUpdate:
        typeStr = 'participant_update';
        break;
      case MessageType.error:
        typeStr = 'error';
        break;
    }

    return {
      'type': typeStr,
      if (data != null) 'data': data,
      if (participantId != null) 'participantId': participantId,
    };
  }
}

class AudioChunk {
  final String participantId;
  final Uint8List audioData;
  double volume = 1.0;

  // инициализируется один раз, нужно быть уверенным, что первое использование AudioChunkData
  // наступило позже инициализации конфига. В нашем случае это так, конфиг инициализируется в main().
  static int userIdFixedLength = di<AppConfig>().userHashFixedLength;

  AudioChunk({
    required this.participantId,
    required this.audioData,
    this.volume = 1.0,
  });

  factory AudioChunk.fromBinaryChunk(Uint8List data) {
    if (data.length < userIdFixedLength) throw 'AudioChunkData.fromBinaryChunk(): слишком короткий чанк';

    final participantId = String.fromCharCodes(data.sublist(0, userIdFixedLength));
    final audioData = data.sublist(userIdFixedLength);

    return AudioChunk(
      participantId: participantId,
      audioData: audioData,
    );
  }
}
