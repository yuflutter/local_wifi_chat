import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class Participant {
  final String id;
  final String name;
  final bool isMuted;
  final bool isSpeaking;
  final double volume;
  final bool isMe;

  Participant({
    required this.id,
    required this.name,
    this.isMuted = false,
    this.isSpeaking = false,
    this.volume = 1.0,
  }) : isMe = (id == di<UserSession>().userHash);

  Participant copyWith({
    String? id,
    String? name,
    bool? isMuted,
    bool? isSpeaking,
    double? volume,
  }) {
    return Participant(
      id: id ?? this.id,
      name: name ?? this.name,
      isMuted: isMuted ?? this.isMuted,
      isSpeaking: isSpeaking ?? this.isSpeaking,
      volume: volume ?? this.volume,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'isMuted': isMuted,
      'isSpeaking': isSpeaking,
      'volume': volume,
    };
  }

  factory Participant.fromJson(Map<String, dynamic> json) {
    return Participant(
      id: json['id'] as String,
      name: json['name'] as String,
      isMuted: json['isMuted'] as bool? ?? false,
      isSpeaking: json['isSpeaking'] as bool? ?? false,
      volume: (json['volume'] as num?)?.toDouble() ?? 1.0,
    );
  }
}

enum SocketStatus {
  disconnected,
  connecting,
  connected,
  // error, // Ошибки в стейте не храним, а обрабатываем одноразовым презентером модели (см. AbstractModel).
}
