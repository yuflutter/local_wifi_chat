import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class AddEditMessageModel extends AbstractModel {
  AddEditMessage addNewMessage = AddableMessage(); // может менять тип в процессе жизни вьюмодели
  final MessageListModel _messageListModel;
  final AbstractMessagesRepository _repository;

  AddEditMessageModel({
    super.errorPresenter,
    MessageListModel? messageListModel,
    AbstractMessagesRepository? repository,
  }) : _messageListModel = messageListModel ?? di<MessageListModel>(),
       _repository = repository ?? di<AbstractMessagesRepository>();

  @override
  void dispose() {
    addNewMessage.dispose();
    super.dispose();
  }

  void initAddable({Message? replyToMessage, String? replyToQuote}) {
    addNewMessage.dispose();
    addNewMessage = AddableMessage(replyToMessage: replyToMessage, replyToQuote: replyToQuote);
    notifyListeners();
  }

  void initEditable({Message? messageToEdit}) {
    addNewMessage.dispose();
    addNewMessage = EditableMessage(message: messageToEdit!);
    notifyListeners();
  }

  void clear() => initAddable();

  void clearReplyTo() {
    if (addNewMessage is AddableMessage?) {
      (addNewMessage as AddableMessage?)?.clearReplyTo();
    }
    notifyListeners();
  }

  Future<void> save() async {
    startWaiting();
    try {
      // await Future.delayed(Duration(seconds: 2));
      // throw Exception('Testing adding new message error');
      switch (addNewMessage) {
        case AddableMessage m:
          await _repository.add(m);
          await _messageListModel.fetchNewer();
        case EditableMessage m:
          final updatedMessage = await _repository.edit(m);
          _messageListModel.updateInList(updatedMessage);
        default:
          throw '$AddEditMessageModel: Unknown type ${addNewMessage.runtimeType}';
      }
      di<UserSession>().setUserName(addNewMessage.userName.value!);
    } catch (e, s) {
      presentError(e, s);
    } finally {
      stopWaiting();
    }
  }
}
