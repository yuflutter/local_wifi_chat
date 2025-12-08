import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/add_edit_message_form.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/message_list_widget.dart';
import 'package:local_wifi_chat_frontend/view/core/error_widgets.dart';
import 'package:local_wifi_chat_frontend/view/core/simple_future_builder.dart';
import 'package:provider/provider.dart';

class ChatPage extends StatefulWidget {
  const ChatPage({super.key});

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  late final _listModel = MessageListModel(errorPresenter: _errorPresenter);
  late final _addNewModel = AddEditMessageModel(messageListModel: _listModel, errorPresenter: _errorPresenter);
  late var _initFuture = _listModel.fetchTop();

  @override
  void dispose() {
    _listModel.dispose();
    _addNewModel.dispose();
    super.dispose();
  }

  void _errorPresenter(Object e, StackTrace? s) => WidgetsBinding.instance.addPostFrameCallback(
    (_) => showErrorLogPopup(context, error: e, stack: s),
  );

  @override
  Widget build(BuildContext context) {
    return SimpleFutureBuilder<void>(
      future: _initFuture,
      builder: (context, _) {
        return MultiProvider(
          providers: [
            ChangeNotifierProvider.value(value: _listModel),
            ChangeNotifierProvider.value(value: _addNewModel),
          ],
          builder: (context, _) {
            return ListenableBuilder(
              listenable: _listModel,
              builder: (context, _) {
                return Scaffold(
                  appBar: AppBar(
                    title: Text(di<AppConfig>().appName),
                    actions: [
                      IconButton(
                        icon: Icon(Icons.refresh),
                        tooltip: 'Обновить',
                        onPressed: _fullRefresh,
                      ),
                    ],
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
                  floatingActionButton: (_listModel.existsUnread)
                      ? Padding(
                          padding: const EdgeInsets.fromLTRB(0, 0, 0, 45),
                          child: FloatingActionButton(
                            onPressed: () => _listModel.scrollController.jumpTo(0),
                            backgroundColor: Colors.red,
                            child: Icon(Icons.arrow_downward),
                          ),
                        )
                      : null,
                );
              },
            );
          },
        );
      },
    );
  }

  void _fullRefresh() {
    setState(() => _initFuture = _listModel.fetchTop());
  }
}
