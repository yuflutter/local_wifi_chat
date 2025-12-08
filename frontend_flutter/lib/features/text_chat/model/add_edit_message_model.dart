import 'package:flutter/widgets.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import 'package:local_wifi_chat_frontend/model/field.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class AddEditMessageModel extends AbstractModel {
  final MessageListModel _messageListModel;
  final AbstractMessagesRepository _repository;

  late final StringField userName = StringField(label: 'Ваше имя', hint: 'Ваше имя', value: di<UserSession>().userName);
  late final StringField text = StringField(label: null, hint: 'Текст сообщения');
  String? id;
  ReplyTo? replyTo;

  var isFormExpanded = false;
  late final FocusNode textFocusNode = FocusNode()
    ..addListener(() {
      if (textFocusNode.hasFocus && !isFormExpanded) {
        startAdding();
      }
    });

  AddEditMessageModel({
    super.errorPresenter,
    MessageListModel? messageListModel,
    AbstractMessagesRepository? repository,
  }) : _messageListModel = messageListModel ?? di<MessageListModel>(),
       _repository = repository ?? di<AbstractMessagesRepository>() {
    userName.validator = userName.emptyStringValidator;
    text.validator = text.emptyStringValidator;
  }

  void _clearForm() {
    text.controller.clear();
    id = null;
    replyTo = null;
  }

  void clearForm() {
    _clearForm();
    textFocusNode.unfocus();
    isFormExpanded = false;
    notifyListeners();
  }

  @override
  void dispose() {
    userName.dispose();
    text.dispose();
    super.dispose();
  }

  void startAdding({Message? replyToMessage, String? replyToQuote}) {
    _clearForm();
    replyTo = (replyToMessage != null)
        ? ReplyTo(messageId: replyToMessage.id, userName: replyToMessage.userName, quote: replyToQuote!)
        : null;
    isFormExpanded = true;
    textFocusNode.requestFocus();
    notifyListeners();
  }

  void startEditing({Message? messageToEdit}) {
    _clearForm();
    id = messageToEdit?.id;
    userName.controller.text = messageToEdit?.userName ?? '';
    text.controller.text = messageToEdit?.text ?? '';
    textFocusNode.requestFocus();
    isFormExpanded = true;
    notifyListeners();
  }

  void clearReplyTo() {
    replyTo = null;
    notifyListeners();
  }

  Future<void> save() async {
    // предполагается, что валидация уже сделана на форме
    final addEditMessage = AddEditMessage(userName: userName.value!, text: text.value!, id: id, replyTo: replyTo);
    startWaiting();
    try {
      // await Future.delayed(Duration(seconds: 2));
      // throw Exception('Testing adding new message error');
      if (id == null) {
        await _repository.add(addEditMessage);
        await _messageListModel.fetchNewer();
      } else {
        final updatedMessage = await _repository.edit(addEditMessage);
        _messageListModel.updateInList(updatedMessage);
      }
      di<UserSession>().setUserName(userName.value!);
    } catch (e, s) {
      presentError(e, s);
    } finally {
      stopWaiting();
    }
  }
}
