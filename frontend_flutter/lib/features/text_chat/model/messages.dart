import 'dart:convert';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/scope_fun.dart';
import 'package:local_wifi_chat_frontend/model/field.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

// Ответ на сообщение
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

/// Приходит с бекенда
class Message {
  final String id;
  final String userHash;
  final String userName;
  final ReplyTo? replyTo;
  final String text;
  final DateTime createdAt;
  final DateTime? lastModifiedAt;
  final bool isMine;

  Message.fromJson(Map<String, dynamic> json)
    : id = json['id'],
      userHash = json['userHash'],
      userName = json['userName'],
      replyTo = (json['replyTo'] as Map<String, dynamic>?).let((v) => ReplyTo.fromJson(v)),
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

/// Создаётся|редактируется пользователем, уходит на бекенд.
abstract class NewMessage {
  final StringField userName;
  final StringField text;

  NewMessage({String? userName, String? text})
    : userName = StringField(label: 'Ваше имя', hint: 'Ваше имя', value: userName),
      text = StringField(label: 'Текст', hint: 'Текст сообщения', value: text) {
    this.userName.validator = this.userName.emptyStringValidator;
    this.text.validator = this.text.emptyStringValidator;
  }

  Map<String, dynamic> toJson();

  String toJsonStr() => json.encode(toJson());
}

/// Добавление нового
class AddableMessage extends NewMessage {
  ReplyTo? replyTo;

  AddableMessage({Message? replyToMessage, String? replyToQuote})
    : replyTo = (replyToMessage != null)
          ? ReplyTo(messageId: replyToMessage.id, userName: replyToMessage.userName, quote: replyToQuote!)
          : null,
      super(userName: di<UserSession>().userName);

  void clearReplyTo() {
    replyTo = null;
  }

  @override
  Map<String, dynamic> toJson() => {
    'userName': userName.value,
    'replyTo': replyTo?.toJson(),
    'text': text.value,
  };
}

/// Редактирование существующего
class EditableMessage extends NewMessage {
  final String? id;

  EditableMessage({required Message message}) : id = message.id, super(userName: message.userName, text: message.text);

  @override
  Map<String, dynamic> toJson() => {
    'id': id,
    'userName': userName.value,
    'text': text.value,
  };
}

///  Интерфейс в domain, реализация в data.
abstract class AbstractMessagesRepository {
  Future<MessageList> fetch({Message? olderThan, Message? newerThan, required int limit, bool noLog = false});

  Future<void> add(AddableMessage newMessage);

  Future<Message> update(EditableMessage newMessage);
}
