import 'dart:convert';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/scope_fun.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

/// Приходит с бекенда
class Message {
  final String id;
  final ReplyTo? replyTo;
  final String userHash;
  final String userName;
  final String text;
  final DateTime createdAt;
  final DateTime? lastModifiedAt;
  final bool isMine;

  Message.fromJson(Map<String, dynamic> json)
    : id = json['id'],
      replyTo = (json['replyTo'] as Map<String, dynamic>?).let((v) => ReplyTo.fromJson(v)),
      userHash = json['userHash'],
      userName = json['userName'],
      text = json['text'],
      createdAt = DateTime.parse(json['createdAt']),
      lastModifiedAt = DateTime.parse(json['lastModifiedAt']),
      isMine = (json['userHash'] == di<UserSession>().userHash);

  factory Message.fromJsonStr(String str) => Message.fromJson(json.decode(str));
}

/// Приходит с бэкенда, отсортирован в обратном порядке — от новых к старым (новые в начале списка, старые в хвосте).
/// Однако в виджете список отображается наоборот — новые внизу экрана, старые вверху.
/// Но отображение в виджете не влияет на порядок в самом списке. Виджет делает реверс на лету.
class MessageList {
  final List<Message> all;
  final bool isOlderAvailable;

  MessageList({required this.all, required this.isOlderAvailable});

  MessageList.empty() : all = [], isOlderAvailable = false;
}

/// Создаётся | редактируется пользователем, уходит на бекенд.
class AddEditMessage {
  final String userName;
  final String text;
  final String? id;
  final ReplyTo? replyTo;

  AddEditMessage({required this.userName, required this.text, this.id, this.replyTo});

  Map<String, dynamic> toJson() => {
    'userName': userName,
    'text': text,
    'id': id,
    'replyTo': replyTo?.toJson(),
  };

  String toJsonStr() => json.encode(toJson());
}

/// Ответ на...
class ReplyTo {
  final String messageId;
  final String userName;
  final String quote;

  ReplyTo({required this.messageId, required this.userName, required this.quote});

  ReplyTo.fromJson(Map<String, dynamic> json)
    : messageId = json['messageId'],
      userName = json['userName'],
      quote = json['quote'];

  Map<String, dynamic> toJson() => {
    'messageId': messageId,
    'userName': userName,
    'quote': quote,
  };
}
