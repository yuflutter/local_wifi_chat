import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/view/core/simple_future_builder.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/device_list_model.dart';
import 'package:local_wifi_chat_frontend/view/core/error_log_presenter.dart';

class DeviceListPage extends StatefulWidget {
  const DeviceListPage({super.key});

  @override
  State<DeviceListPage> createState() => _DeviceListPageState();
}

class _DeviceListPageState extends State<DeviceListPage> {
  late final _model = DeviceListModel(
    errorPresenter: (e, s) => WidgetsBinding.instance.addPostFrameCallback(
      (_) => showErrorLogWidget(context, error: e, stack: s),
    ),
  );
  late final _initFuture = _model.fetch();

  @override
  void dispose() {
    _model.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Connected Devices'),
        actions: [
          IconButton(
            icon: Icon(Icons.refresh),
            tooltip: 'Обновить',
            onPressed: _model.fetch,
          ),
        ],
      ),
      body: SimpleFutureBuilder<void>(
        future: _initFuture,
        builder: (context, _) {
          return ListenableBuilder(
            listenable: _model,
            builder: (context, _) {
              if (_model.all.isEmpty) {
                return Center(child: Text('Не удалось обнаружить устройства'));
              } else {
                return ListView(
                  children: [
                    ..._model.all.map(
                      (e) => Card(
                        margin: const EdgeInsets.only(bottom: 12.0),
                        child: Padding(
                          padding: const EdgeInsets.all(16.0),
                          child: SelectableText(
                            e,
                            style: const TextStyle(
                              fontFamily: 'monospace',
                              fontSize: 12,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                );
              }
            },
          );
        },
      ),
    );
  }
}
