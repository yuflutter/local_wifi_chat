import 'package:flutter/widgets.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/TEXT_CHAT/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/TEXT_CHAT/entity/messages.dart';
import 'package:local_wifi_chat_frontend/features/TEXT_CHAT/entity/repos.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';
import 'package:local_wifi_chat_frontend/model/field.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';
import 'package:local_wifi_chat_frontend/core/scope_fun.dart';

class AddEditMessageModel extends AbstractModel {
  final MessageListModel messageListModel;
  final AbstractMessagesRepository _repository;

  final userName = StringField(
    label: 'Ваше имя',
    value: di<UserSession>().userName,
    validator: StringField.emptyStringValidator,
  );
  final text = StringField(
    label: 'Текст сообщения',
    validator: StringField.emptyStringValidator,
  );
  String? id;
  ReplyTo? replyTo;

  var isFormExpanded = false;
  final formKey = GlobalKey<FormState>();

  /// Управление фокусом перенесено в модель, так как это часть вью-логики раскрытия формы и показа ошибок.
  final userNameFocusNode = FocusNode();
  late final FocusNode textFocusNode = FocusNode()
    ..addListener(() {
      if (textFocusNode.hasFocus && !isFormExpanded) startAdding();
    });

  AddEditMessageModel({
    super.errorPresenter,
    required this.messageListModel,
    AbstractMessagesRepository? repository,
  }) : _repository = repository ?? di<AbstractMessagesRepository>();

  @override
  void dispose() {
    userName.dispose();
    text.dispose();
    userNameFocusNode.dispose();
    textFocusNode.dispose();
    super.dispose();
  }

  void startAdding({Message? replyToMessage, String? replyToQuote}) async {
    _clearForm();
    replyTo = replyToMessage?.let(
      (m) => ReplyTo(messageId: m.id, userName: m.userName, quote: replyToQuote ?? m.text),
    );
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
    _clearForm();
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

  void _clearForm() {
    text.clear();
    id = null;
    replyTo = null;
  }

  void clearAndCollapseForm() {
    textFocusNode.unfocus();
    formKey.currentState?.reset();
    _clearForm();
    isFormExpanded = false;
    notifyListeners();
  }

  void clearReplyTo() => notify(() => replyTo = null);

  bool validate() {
    final res = formKey.currentState?.validate();
    if (userName.hasError) {
      userNameFocusNode.requestFocus();
    } else if (text.hasError) {
      textFocusNode.requestFocus();
    }
    return res ?? false;
  }

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
          await messageListModel.fetchNewer();
        } else {
          final updatedMessage = await _repository.edit(addEditMessage);
          messageListModel.updateInList(updatedMessage);
        }
        di<UserSession>().setUserName(userName.value!);
        clearAndCollapseForm();
      } catch (e, s) {
        presentError(e, s);
      } finally {
        stopWaiting();
      }
    }
  }
}
