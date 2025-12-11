import 'dart:typed_data';

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

class AudioChunkData {
  final String participantId;
  final Uint8List data;

  AudioChunkData({
    required this.participantId,
    required this.data,
  });
}
