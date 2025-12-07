import 'dart:convert';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/scope_fun.dart';
import 'package:local_wifi_chat_frontend/model/field.dart';
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

/// Создаётся|редактируется пользователем, уходит на бекенд.
abstract class AddEditMessage implements Disposable {
  final StringField userName;
  final StringField text;

  AddEditMessage({String? userName, String? text})
    : userName = StringField(label: 'Ваше имя', hint: 'Ваше имя', value: userName),
      text = StringField(label: null, hint: 'Текст сообщения', value: text) {
    this.userName.validator = this.userName.emptyStringValidator;
    this.text.validator = this.text.emptyStringValidator;
  }

  Map<String, dynamic> toJson();

  String toJsonStr() => json.encode(toJson());

  @override
  void dispose() {
    userName.dispose();
    text.dispose();
  }
}

/// Добавляется новое, опционально - через ответ на...
class AddableMessage extends AddEditMessage {
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
    'replyTo': replyTo?.toJson(),
    'userName': userName.value,
    'text': text.value,
  };
}

/// Редактируется существующее, ответ на... не редактируется.
class EditableMessage extends AddEditMessage {
  final String? id;

  EditableMessage({required Message message}) : id = message.id, super(userName: message.userName, text: message.text);

  @override
  Map<String, dynamic> toJson() => {
    'id': id,
    'userName': userName.value,
    'text': text.value,
  };
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

///  Интерфейс в domain, реализация в data.
abstract class AbstractMessagesRepository {
  Future<MessageList> fetch({Message? olderThan, Message? newerThan, required int limit, bool noLog = false});

  Future<void> add(AddableMessage newMessage);

  Future<Message> edit(EditableMessage newMessage);
}
