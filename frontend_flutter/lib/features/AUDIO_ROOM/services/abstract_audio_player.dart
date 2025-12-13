import 'package:local_wifi_chat_frontend/features/AUDIO_ROOM/entity/ws_message.dart';

abstract class AbstractAudioPlayer {
  void playAudioChunk(AudioChunk chunk);

  void setVolume(String participantId, double volume);

  void stopParticipant(String participantId);

  void stopAll();

  void dispose();
}
