import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/features/voice_room/entity/participant.dart';
import 'package:provider/provider.dart';
import '../model/voice_room_model.dart';
import 'participant_tile.dart';
import 'connection_dialog.dart';

class VoiceRoomPage extends StatefulWidget {
  const VoiceRoomPage({super.key});

  @override
  State<VoiceRoomPage> createState() => _VoiceRoomPageState();
}

class _VoiceRoomPageState extends State<VoiceRoomPage> {
  @override
  void initState() {
    super.initState();
    // WidgetsBinding.instance.addPostFrameCallback((_) {
    //   showConnectionDialog(context);
    // });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Voice Room'),
        actions: [
          Consumer<VoiceRoomModel>(
            builder: (context, model, _) {
              return Padding(
                padding: const EdgeInsets.all(8.0),
                child: Center(
                  child: _buildConnectionStatus(model.connectionStatus),
                ),
              );
            },
          ),
        ],
      ),
      body: Consumer<VoiceRoomModel>(
        builder: (context, model, _) {
          if (!model.isConnected) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.cloud_off, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  const Text('Не подключено к серверу'),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () => showConnectionDialog(context),
                    child: const Text('Подключиться'),
                  ),
                ],
              ),
            );
          }

          if (model.participants.isEmpty) {
            return const Center(
              child: Text('Нет участников в комнате'),
            );
          }

          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: model.participants.length,
            itemBuilder: (context, index) {
              final participant = model.participants[index];
              return ParticipantTile(
                participant: participant,
                onVolumeChanged: (volume) {
                  model.setParticipantVolume(participant.id, volume);
                },
                onMuteToggle: (mute) {
                  model.muteParticipant(participant.id, mute);
                },
              );
            },
          );
        },
      ),
      floatingActionButton: Consumer<VoiceRoomModel>(
        builder: (context, model, _) {
          if (!model.isConnected) return const SizedBox.shrink();

          return FloatingActionButton.large(
            onPressed: model.toggleMicrophone,
            backgroundColor: model.isMicrophoneEnabled ? Colors.red : Colors.blue,
            child: Icon(
              model.isMicrophoneEnabled ? Icons.mic : Icons.mic_off,
              size: 32,
            ),
          );
        },
      ),
    );
  }

  Widget _buildConnectionStatus(ConnectionStatus state) {
    Color color;
    String text;

    switch (state) {
      case ConnectionStatus.connected:
        color = Colors.green;
        text = 'Подключено';
        break;
      case ConnectionStatus.connecting:
        color = Colors.orange;
        text = 'Подключение...';
        break;
      case ConnectionStatus.error:
        color = Colors.red;
        text = 'Ошибка';
        break;
      case ConnectionStatus.disconnected:
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
