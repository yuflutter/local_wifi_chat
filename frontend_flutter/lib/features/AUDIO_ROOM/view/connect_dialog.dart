import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/view/core/waiting_overlay.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/model/audio_room_model.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

void showConnectDialog(BuildContext context, {required AudioRoomModel model}) {
  showDialog(
    context: context,
    barrierDismissible: true,
    builder: (_) => ChangeNotifierProvider.value(value: model, child: const ConnectDialog()),
  );
}

class ConnectDialog extends StatefulWidget {
  const ConnectDialog({super.key});

  @override
  State<ConnectDialog> createState() => _ConnectDialogState();
}

class _ConnectDialogState extends State<ConnectDialog> {
  final _formKey = GlobalKey<FormState>();
  final _urlController = TextEditingController(text: 'ws://localhost:8080/audio');
  final _userIdController = TextEditingController();
  final _userNameController = TextEditingController();

  @override
  void initState() {
    super.initState();
    final session = di<UserSession>();
    _userIdController.text = session.userId;
    _userNameController.text = session.userName ?? '';
  }

  @override
  void dispose() {
    _urlController.dispose();
    _userIdController.dispose();
    _userNameController.dispose();
    super.dispose();
  }

  Future<void> _connect() async {
    if (_formKey.currentState!.validate()) {
      showWaitingOverlay(context);
      try {
        await context.read<AudioRoomModel>().connect(
          _urlController.text,
          _userNameController.text,
        );
        if (mounted) Navigator.pop(context);
      } catch (_) {
        // ошибка уже презентуется в модели
      }
      if (mounted) Navigator.pop(context);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Подключение к аудио-комнате'),
      content: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextFormField(
              controller: _userNameController,
              autofocus: true,
              decoration: const InputDecoration(
                labelText: 'Ваше имя',
                hintText: 'Введите имя',
                prefixIcon: Icon(Icons.person),
              ),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Введите имя';
                }
                return null;
              },
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _urlController,
              decoration: const InputDecoration(
                labelText: 'URL сервера',
                hintText: 'ws://localhost:8080/audio',
                prefixIcon: Icon(Icons.link),
              ),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Введите URL сервера';
                }
                if (!value.startsWith('ws://') && !value.startsWith('wss://')) {
                  return 'URL должен начинаться с ws:// или wss://';
                }
                return null;
              },
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _userIdController,
              decoration: const InputDecoration(
                labelText: 'User ID',
                hintText: 'Автоматически сгенерирован',
                prefixIcon: Icon(Icons.fingerprint),
              ),
              enabled: false,
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Отмена'),
        ),
        ElevatedButton(
          onPressed: _connect,
          child: const Text('Подключиться'),
        ),
      ],
    );
  }
}
