import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/features/TEXT_CHAT/view/message_list_tile.dart';
import 'package:local_wifi_chat_frontend/features/TEXT_CHAT/model/message_list_model.dart';
import 'package:provider/provider.dart';

class MessageListWidget extends StatelessWidget {
  const MessageListWidget({super.key});

  @override
  Widget build(BuildContext context) {
    late final model = context.watch<MessageListModel>();
    final list = model.list;
    if (list.all.isEmpty) {
      return Center(child: Text('Нет сообщений'));
    } else {
      return ListView.builder(
        controller: model.scrollController,
        reverse: true,
        itemCount: list.all.length + 1,
        itemBuilder: (context, i) {
          if (i == list.all.length) {
            if (list.isOlderAvailable) {
              model.fetchOlder();
              return Center(child: CircularProgressIndicator());
            } else {
              return SizedBox.shrink();
            }
          } else {
            return MessageListTile(message: list.all[i]);
          }
        },
      );
    }
  }
}
