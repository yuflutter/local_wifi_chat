import 'package:local_wifi_chat_frontend/features/text_chat/entity/messages.dart';

abstract class AbstractMessagesRepository {
  Future<MessageList> fetch({Message? olderThan, Message? newerThan, required int limit, bool noLog = false});

  Future<void> add(AddEditMessage newMessage);

  Future<Message> edit(AddEditMessage newMessage);
}

abstract class AbstractDevicesRepository {
  Future<List<String>> fetch();
}
