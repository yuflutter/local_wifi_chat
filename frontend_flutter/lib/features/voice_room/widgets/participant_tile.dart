import 'package:flutter/material.dart';
import '../models/participant.dart';

class ParticipantTile extends StatelessWidget {
  final Participant participant;
  final bool isCurrentUser;
  final ValueChanged<double>? onVolumeChanged;
  final ValueChanged<bool>? onMuteToggle;

  const ParticipantTile({
    super.key,
    required this.participant,
    required this.isCurrentUser,
    this.onVolumeChanged,
    this.onMuteToggle,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                CircleAvatar(
                  backgroundColor: isCurrentUser ? Colors.blue : Colors.grey,
                  child: Text(
                    participant.name.isNotEmpty ? participant.name[0].toUpperCase() : '?',
                    style: const TextStyle(color: Colors.white),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            participant.name,
                            style: const TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          if (isCurrentUser) ...[
                            const SizedBox(width: 8),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                              decoration: BoxDecoration(
                                color: Colors.blue,
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: const Text(
                                'Вы',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 12,
                                ),
                              ),
                            ),
                          ],
                        ],
                      ),
                      const SizedBox(height: 4),
                      Row(
                        children: [
                          Icon(
                            participant.isMuted ? Icons.mic_off : Icons.mic,
                            size: 16,
                            color: participant.isMuted ? Colors.red : Colors.green,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            participant.isMuted ? 'Микрофон выключен' : 'Микрофон включен',
                            style: TextStyle(
                              fontSize: 12,
                              color: Colors.grey[600],
                            ),
                          ),
                          if (participant.isSpeaking) ...[
                            const SizedBox(width: 8),
                            const Icon(
                              Icons.graphic_eq,
                              size: 16,
                              color: Colors.green,
                            ),
                          ],
                        ],
                      ),
                    ],
                  ),
                ),
                if (!isCurrentUser)
                  IconButton(
                    icon: Icon(
                      participant.volume == 0 ? Icons.volume_off : Icons.volume_up,
                      color: participant.volume == 0 ? Colors.red : Colors.blue,
                    ),
                    onPressed: () {
                      onMuteToggle?.call(participant.volume > 0);
                    },
                  ),
              ],
            ),
            if (!isCurrentUser) ...[
              const SizedBox(height: 12),
              Row(
                children: [
                  const Icon(Icons.volume_down, size: 20),
                  Expanded(
                    child: Slider(
                      value: participant.volume,
                      min: 0.0,
                      max: 1.0,
                      divisions: 10,
                      label: '${(participant.volume * 100).round()}%',
                      onChanged: onVolumeChanged,
                    ),
                  ),
                  const Icon(Icons.volume_up, size: 20),
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }
}
