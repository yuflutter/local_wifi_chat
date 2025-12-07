import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/message_list_tile.dart';
import 'package:local_wifi_chat_frontend/view/core/simple_future_builder.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/add_edit_message_dialog.dart';
import 'package:local_wifi_chat_frontend/view/core/error_widgets.dart';
import 'package:provider/provider.dart';

class MessageListPage extends StatefulWidget {
  const MessageListPage({super.key});

  @override
  State<MessageListPage> createState() => _MessageListPageState();
}

class _MessageListPageState extends State<MessageListPage> {
  late final _model = MessageListModel(
    errorPresenter: (e, s) => WidgetsBinding.instance.addPostFrameCallback(
      (_) => showErrorLogPopup(context, error: e, stack: s),
    ),
  );
  late var _initFuture = _model.fetchTop();
  final _scroller = ScrollController();

  @override
  void initState() {
    _scroller.addListener(() {
      if (_scroller.position.pixels < 10) _model.clearExistsUnread();
    });
    super.initState();
  }

  @override
  void dispose() {
    _model.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider.value(
      value: _model,
      builder: (context, _) {
        final list = context.watch<MessageListModel>().list;
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
          body: SimpleFutureBuilder<void>(
            future: _initFuture,
            builder: (context, _) {
              if (list.all.isEmpty) {
                return Center(child: Text('Нет сообщений'));
              } else {
                return ListView.builder(
                  controller: _scroller,
                  reverse: true,
                  itemCount: list.all.length + 1,
                  itemBuilder: (context, i) {
                    if (i == list.all.length) {
                      if (list.isOlderAvailable) {
                        _model.fetchOlder();
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
            },
          ),
          floatingActionButton: (_model.existsUnread && _scroller.hasClients && _scroller.position.pixels > 10)
              ? FloatingActionButton(
                  onPressed: () => _scroller.jumpTo(0),
                  backgroundColor: Colors.red,
                  child: Icon(Icons.arrow_downward),
                )
              : FloatingActionButton(
                  onPressed: () => showAddMessageDialog(context),
                  backgroundColor: Colors.green,
                  child: Icon(Icons.add),
                ),
        );
      },
    );
  }

  void _fullRefresh() async {
    setState(() => _initFuture = _model.fetchTop());
  }
}
