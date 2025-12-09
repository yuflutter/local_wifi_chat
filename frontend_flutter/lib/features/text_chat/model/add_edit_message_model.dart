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

  final StringField userName = StringField(label: 'Ваше имя', hint: null, value: di<UserSession>().userName);
  final StringField text = StringField(label: 'Текст сообщения', hint: null);
  String? id;
  ReplyTo? replyTo;

  var isFormExpanded = false;
  final formKey = GlobalKey<FormState>();

  final FocusNode userNameFocusNode = FocusNode();
  late final FocusNode textFocusNode = FocusNode()
    ..addListener(() => (textFocusNode.hasFocus && !isFormExpanded) ? startAdding() : null);

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
    formKey.currentState?.reset();
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

  void startAdding({Message? replyToMessage, String? replyToQuote}) async {
    replyTo = (replyToMessage != null)
        ? ReplyTo(messageId: replyToMessage.id, userName: replyToMessage.userName, quote: replyToQuote!)
        : null;
    isFormExpanded = true;
    notifyListeners();
    // сначала показать всю форму, и только в следующем тике поставить фокус
    await Future.delayed(Duration(milliseconds: 200));
    if (userName.value?.isEmpty ?? true) {
      userNameFocusNode.requestFocus();
    } else {
      textFocusNode.requestFocus();
    }
  }

  void startEditing({Message? messageToEdit}) async {
    id = messageToEdit?.id;
    userName.controller.text = messageToEdit?.userName ?? '';
    text.controller.text = messageToEdit?.text ?? '';
    isFormExpanded = true;
    notifyListeners();
    // сначала показать всю форму, и только в следующем тике поставить фокус
    await Future.delayed(Duration(milliseconds: 200));
    if (userName.value?.isEmpty ?? true) {
      userNameFocusNode.requestFocus();
    } else {
      textFocusNode.requestFocus();
    }
  }

  void clearReplyTo() {
    replyTo = null;
    notifyListeners();
  }

  bool validate() => formKey.currentState?.validate() ?? false;

  Future<void> save() async {
    if (validate()) {
      textFocusNode.unfocus(); // иначе после закрытия оверлея фокус вернется, и форма опять откроется
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
        clearForm();
      } catch (e, s) {
        presentError(e, s);
      } finally {
        stopWaiting();
      }
    }
  }
}
