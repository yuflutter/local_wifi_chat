import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/audio_room_provider.dart';
import '../services/audio_room_service.dart' as audio_service;
import '../widgets/participant_tile.dart';
import '../widgets/connection_dialog.dart';

class AudioPage extends StatefulWidget {
  const AudioPage({super.key});

  @override
  State<AudioPage> createState() => _AudioPageState();
}

class _AudioPageState extends State<AudioPage> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _showConnectionDialog();
    });
  }

  void _showConnectionDialog() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => const ConnectionDialog(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Аудио-комната'),
        actions: [
          Consumer<AudioRoomProvider>(
            builder: (context, provider, _) {
              return Padding(
                padding: const EdgeInsets.all(8.0),
                child: Center(
                  child: _buildConnectionStatus(provider.connectionState),
                ),
              );
            },
          ),
        ],
      ),
      body: Consumer<AudioRoomProvider>(
        builder: (context, provider, _) {
          if (!provider.isConnected) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.cloud_off, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  const Text('Не подключено к серверу'),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: _showConnectionDialog,
                    child: const Text('Подключиться'),
                  ),
                ],
              ),
            );
          }

          if (provider.participants.isEmpty) {
            return const Center(
              child: Text('Нет участников в комнате'),
            );
          }

          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: provider.participants.length,
            itemBuilder: (context, index) {
              final participant = provider.participants[index];
              final isCurrentUser = participant.id == provider.currentUserId;

              return ParticipantTile(
                participant: participant,
                isCurrentUser: isCurrentUser,
                onVolumeChanged: (volume) {
                  provider.setParticipantVolume(participant.id, volume);
                },
                onMuteToggle: (mute) {
                  provider.muteParticipant(participant.id, mute);
                },
              );
            },
          );
        },
      ),
      floatingActionButton: Consumer<AudioRoomProvider>(
        builder: (context, provider, _) {
          if (!provider.isConnected) return const SizedBox.shrink();

          return FloatingActionButton.large(
            onPressed: provider.toggleMicrophone,
            backgroundColor: provider.isMicrophoneEnabled ? Colors.red : Colors.blue,
            child: Icon(
              provider.isMicrophoneEnabled ? Icons.mic : Icons.mic_off,
              size: 32,
            ),
          );
        },
      ),
    );
  }

  Widget _buildConnectionStatus(audio_service.ConnectionState state) {
    Color color;
    String text;

    switch (state) {
      case audio_service.ConnectionState.connected:
        color = Colors.green;
        text = 'Подключено';
        break;
      case audio_service.ConnectionState.connecting:
        color = Colors.orange;
        text = 'Подключение...';
        break;
      case audio_service.ConnectionState.error:
        color = Colors.red;
        text = 'Ошибка';
        break;
      case audio_service.ConnectionState.disconnected:
        color = Colors.grey;
        text = 'Отключено';
        break;
    }

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 8,
          height: 8,
          decoration: BoxDecoration(
            color: color,
            shape: BoxShape.circle,
          ),
        ),
        const SizedBox(width: 8),
        Text(text, style: TextStyle(color: color)),
      ],
    );
  }
}
