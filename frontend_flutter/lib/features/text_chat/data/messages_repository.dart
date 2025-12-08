import 'dart:convert';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/data/api_client.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';

class MessagesRepository extends AbstractMessagesRepository {
  final _api = di<ApiClient>();

  @override
  Future<MessageList> fetch({Message? olderThan, Message? newerThan, required int limit, bool noLog = false}) async {
    final params = <String, String>{};
    if (olderThan != null) params['olderThan'] = olderThan.createdAt.toUtc().toIso8601String();
    if (newerThan != null) params['newerThan'] = newerThan.createdAt.toUtc().toIso8601String();
    params['limit'] = '$limit';

    final batch = await _api.get<List<Message>>(
      'messages',
      uriParams: params,
      parser: (s) => (json.decode(s) as List).map((e) => Message.fromJson(e)).toList(),
      noLog: noLog,
    );
    return MessageList(
      all: batch,
      isOlderAvailable: (batch.length == limit),
    );
  }

  @override
  Future<void> add(AddEditMessage newMessage) {
    return _api.post<Null>(
      'messages',
      body: newMessage.toJsonStr(),
      parser: (_) {},
    );
  }

  @override
  Future<Message> edit(AddEditMessage newMessage) {
    return _api.put<Message>(
      'messages',
      body: newMessage.toJsonStr(),
      parser: (s) => Message.fromJsonStr(s),
    );
  }
}
