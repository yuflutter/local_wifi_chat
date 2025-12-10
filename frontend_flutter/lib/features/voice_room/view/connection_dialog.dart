import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';
import 'package:provider/provider.dart';
import '../model/voice_room_model.dart';

class ConnectionDialog extends StatefulWidget {
  const ConnectionDialog({super.key});

  @override
  State<ConnectionDialog> createState() => _ConnectionDialogState();
}

class _ConnectionDialogState extends State<ConnectionDialog> {
  final _formKey = GlobalKey<FormState>();
  final _urlController = TextEditingController(text: 'ws://localhost:8080/audio');
  final _userIdController = TextEditingController();
  final _userNameController = TextEditingController();
  bool _isConnecting = false;

  @override
  void initState() {
    super.initState();
    final session = di<UserSession>();
    _userIdController.text = session.userHash;
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
    if (!_formKey.currentState!.validate()) return;

    setState(() => _isConnecting = true);

    try {
      final provider = context.read<VoiceRoomModel>();
      await provider.connect(
        _urlController.text,
        _userIdController.text,
        _userNameController.text,
      );

      if (mounted) {
        Navigator.of(context).pop();
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Ошибка подключения: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } finally {
      if (mounted) {
        setState(() => _isConnecting = false);
      }
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
              controller: _userNameController,
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
              controller: _userIdController,
              decoration: const InputDecoration(
                labelText: 'ID пользователя',
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
          onPressed: _isConnecting ? null : () => Navigator.of(context).pop(),
          child: const Text('Отмена'),
        ),
        ElevatedButton(
          onPressed: _isConnecting ? null : _connect,
          child: _isConnecting
              ? const SizedBox(
                  width: 20,
                  height: 20,
                  child: CircularProgressIndicator(strokeWidth: 2),
                )
              : const Text('Подключиться'),
        ),
      ],
    );
  }
}
