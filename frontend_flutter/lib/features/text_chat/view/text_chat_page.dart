import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/add_edit_message_form.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/message_list_widget.dart';
import 'package:local_wifi_chat_frontend/view/core/error_log_widget.dart';
import 'package:local_wifi_chat_frontend/view/core/simple_future_builder.dart';

class TextChatPage extends StatefulWidget {
  const TextChatPage({super.key});

  @override
  State<TextChatPage> createState() => TextChatPageState();
}

class TextChatPageState extends State<TextChatPage> {
  late final _messageListModel = MessageListModel(errorPresenter: _errorPresenter);

  // Ошибку первого фетча показываем на экране (вместо контента), остальные презентером (попапом).
  late final _initFuture = _messageListModel.fetchTop(noPresentError: true);

  @override
  Widget build(BuildContext context) {
    return SimpleFutureBuilder<void>(
      future: _initFuture,
      builder: (context, _) {
        return MultiProvider(
          providers: [
            ChangeNotifierProvider.value(value: _messageListModel),
            ChangeNotifierProvider(
              create: (_) => AddEditMessageModel(messageListModel: _messageListModel, errorPresenter: _errorPresenter),
            ),
          ],
          child: ListenableBuilder(
            listenable: _messageListModel,
            builder: (context, _) {
              return Scaffold(
                appBar: PreferredSize(
                  preferredSize: Size.fromHeight(50),
                  child: AppBar(
                    title: Text(di<AppConfig>().appName),
                    actions: [
                      IconButton(
                        icon: Icon(Icons.refresh),
                        tooltip: 'Обновить всё',
                        onPressed: _messageListModel.fetchTop,
                      ),
                    ],
                  ),
                ),
                body: Padding(
                  padding: const EdgeInsets.fromLTRB(8, 0, 8, 0),
                  child: Stack(
                    fit: StackFit.loose,
                    alignment: AlignmentDirectional.bottomCenter,
                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(0, 0, 0, 60),
                        child: MessageListWidget(),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(0, 0, 0, 4),
                        child: AddEditMessageForm(),
                      ),
                    ],
                  ),
                ),
                floatingActionButton: (_messageListModel.existsUnread)
                    ? Padding(
                        padding: const EdgeInsets.fromLTRB(0, 0, 0, 52),
                        child: FloatingActionButton(
                          onPressed: _messageListModel.scrollToTop,
                          tooltip: 'Имеются новые непрочитанные',
                          backgroundColor: Colors.red,
                          mini: true,
                          child: Icon(Icons.arrow_downward),
                        ),
                      )
                    : null,
              );
            },
          ),
        );
      },
    );
  }

  void _errorPresenter(Object e, StackTrace? s) => WidgetsBinding.instance.addPostFrameCallback(
    (_) => showErrorLogWidget(context, error: e, stack: s),
  );
}
