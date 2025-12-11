import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/model/audio_room_model.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/view/connect_dialog.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/view/participant_tile.dart';
import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/participant.dart';
import 'package:local_wifi_chat_frontend/view/core/error_log_presenter.dart';

class AudioRoomPage extends StatefulWidget {
  const AudioRoomPage({super.key});

  @override
  State<AudioRoomPage> createState() => _AudioRoomPageState();
}

class _AudioRoomPageState extends State<AudioRoomPage> {
  late final _model = AudioRoomModel(errorPresenter: (e, s) => errorLogPresenter(context, e, s));

  @override
  void initState() {
    super.initState();
    if (_model.connectionStatus == SocketStatus.disconnected) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        showConnectDialog(context, model: _model);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider.value(
      value: _model,
      child: ListenableBuilder(
        listenable: _model,
        builder: (context, _) {
          return Scaffold(
            appBar: AppBar(
              title: const Text('Voice Room'),
              actions: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Center(
                    child: _buildConnectionStatus(_model.connectionStatus),
                  ),
                ),
              ],
            ),
            body: (!_model.isConnected)
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Icon(Icons.cloud_off, size: 64, color: Colors.grey),
                        const SizedBox(height: 16),
                        const Text('Не подключено к серверу'),
                        const SizedBox(height: 16),
                        ElevatedButton(
                          onPressed: () => showConnectDialog(context, model: _model),
                          child: const Text('Подключиться'),
                        ),
                      ],
                    ),
                  )
                : (_model.participants.isEmpty)
                ? const Center(
                    child: Text('Нет участников в комнате'),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: _model.participants.length,
                    itemBuilder: (context, index) {
                      final participant = _model.participants[index];
                      return ParticipantTile(
                        participant: participant,
                        onVolumeChanged: (volume) {
                          _model.setParticipantVolume(participant.id, volume);
                        },
                        onMuteToggle: (mute) {
                          _model.muteParticipant(participant.id, mute);
                        },
                      );
                    },
                  ),
            floatingActionButton: Consumer<AudioRoomModel>(
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
        },
      ),
    );
  }

  Widget _buildConnectionStatus(SocketStatus state) {
    Color color;
    String text;

    switch (state) {
      case SocketStatus.connected:
        color = Colors.green;
        text = 'Подключено';
        break;
      case SocketStatus.connecting:
        color = Colors.orange;
        text = 'Подключение...';
        break;
      case SocketStatus.disconnected:
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
