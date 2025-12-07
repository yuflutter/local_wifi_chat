import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class AddEditMessageModel extends AbstractModel {
  final NewMessage newMessage;
  final MessageListModel messageListModel;

  AddEditMessageModel.addable({
    Message? replyToMessage,
    String? replyToQuote,
    required this.messageListModel,
    super.errorPresenter,
  }) : newMessage = AddableMessage(
         replyToMessage: replyToMessage,
         replyToQuote: replyToQuote,
       );

  AddEditMessageModel.editable({
    Message? messageToEdit,
    required this.messageListModel,
    super.errorPresenter,
  }) : newMessage = EditableMessage(message: messageToEdit!);

  @override
  void dispose() {
    newMessage.dispose();
    super.dispose();
  }

  void clearReplyTo() {
    if (newMessage is AddableMessage) {
      (newMessage as AddableMessage).clearReplyTo();
    }
    notifyListeners();
  }

  Future<void> save() async {
    startWaiting();
    try {
      // await Future.delayed(Duration(seconds: 2));
      // throw Exception('Testing adding new message error');
      switch (newMessage) {
        case AddableMessage m:
          await di<AbstractMessagesRepository>().add(m);
        case EditableMessage m:
          final updatedMessage = await di<AbstractMessagesRepository>().edit(m);
          messageListModel.updateInList(updatedMessage);
        default:
          throw '$AddEditMessageModel: Unknown type ${newMessage.runtimeType}';
      }
      di<UserSession>().setUserName(newMessage.userName.value!);
      await messageListModel.fetchNewer();
    } catch (e, s) {
      presentError(e, s);
    } finally {
      stopWaiting();
    }
  }
}

// Future<void> _addNewDialog(BuildContext context) async {
//   final newMessage = NewMessage();
//   final authorController = TextEditingController(text: newMessage.authorName.value);
//   final textController = TextEditingController(text: newMessage.text.value);
//   final formKey = GlobalKey<FormState>();
//   await showDialog(
//     context: context,
//     builder: (BuildContext dialogContext) {
//       return AlertDialog(
//         title: const Text('Написать сообщение'),
//         content: Form(
//           key: formKey,
//           child: SingleChildScrollView(
//             child: Column(
//               mainAxisSize: MainAxisSize.min,
//               children: [
//                 TextFormField(
//                   controller: authorController,
//                   decoration: InputDecoration(
//                     labelText: newMessage.authorName.label,
//                     hintText: newMessage.authorName.hint,
//                     border: OutlineInputBorder(),
//                   ),
//                   validator: newMessage.authorName.validator,
//                   autofocus: (newMessage.authorName.value?.isNotEmpty != true),
//                 ),
//                 const SizedBox(height: 16),
//                 TextFormField(
//                   controller: textController,
//                   decoration: InputDecoration(
//                     labelText: newMessage.text.label,
//                     hintText: newMessage.text.hint,
//                     border: OutlineInputBorder(),
//                     alignLabelWithHint: true,
//                   ),
//                   maxLines: null,
//                   minLines: 3,
//                   validator: newMessage.text.validator,
//                   autofocus: (newMessage.authorName.value?.isNotEmpty == true),
//                 ),
//               ],
//             ),
//           ),
//         ),
//         actions: [
//           TextButton(onPressed: () => Navigator.of(dialogContext).pop(), child: const Text('Отмена')),
//           TextButton(
//             onPressed: () async {
//               if (formKey.currentState!.validate()) {
//                 await _addNew(context: dialogContext, newMessage: newMessage);
//               }
//             },
//             child: const Text('Отправить'),
//           ),
//         ],
//       );
//     },
//   );
// }
