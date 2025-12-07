import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/quote_widget.dart';
import 'package:local_wifi_chat_frontend/view/core/error_widgets.dart';
import 'package:provider/provider.dart';

Future<void> showAddMessageDialog(
  BuildContext context, {
  Message? replyToMessage,
  String? replyToQuote,
}) async {
  // Извлекаем модель из контекста для передачи в новый Route, потому что в ноовом Route контекст всегда корневой,
  // а вложенные Navigator() мы тут не используем.
  final listModel = context.read<MessageListModel>();
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    builder: (context) => AddEditMessageDialog(
      model: AddEditMessageModel.addable(
        replyToMessage: replyToMessage,
        replyToQuote: replyToQuote,
        messageListModel: listModel,
      ),
    ),
  );
}

Future<void> showEditMessageDialog(
  BuildContext context, {
  required Message messageToEdit,
}) async {
  final listModel = context.read<MessageListModel>();
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    builder: (context) => AddEditMessageDialog(
      model: AddEditMessageModel.editable(
        messageToEdit: messageToEdit,
        messageListModel: listModel,
      ),
    ),
  );
}

class AddEditMessageDialog extends StatefulWidget {
  const AddEditMessageDialog({super.key, required this.model});

  final AddEditMessageModel model;

  @override
  State<AddEditMessageDialog> createState() => _AddEditMessageDialogState();
}

class _AddEditMessageDialogState extends State<AddEditMessageDialog> {
  final _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    widget.model.setErrorPresenter(
      (e, s) => WidgetsBinding.instance.addPostFrameCallback(
        (_) => showErrorLogPopup(context, error: e, stack: s),
      ),
    );
    super.initState();
  }

  @override
  void dispose() {
    widget.model.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final message = widget.model.newMessage;
    final theme = Theme.of(context);
    final spacer = const SizedBox(height: 17);

    return ListenableBuilder(
      listenable: widget.model,
      builder: (context, _) {
        return Stack(
          fit: StackFit.loose,
          children: [
            Form(
              key: _formKey,
              child: Container(
                padding: EdgeInsets.fromLTRB(18, 20, 15, 15),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Header
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        // Text('Новое сообщение:', style: theme.textTheme.bodyLarge),
                        Expanded(
                          child: TextFormField(
                            controller: message.userName.controller,
                            autofocus: (message.userName.value?.isNotEmpty != true),
                            decoration: InputDecoration(
                              labelText: message.userName.label,
                              hintText: message.userName.hint,
                              border: OutlineInputBorder(),
                              prefixIcon: Icon(Icons.person),
                            ),
                            validator: message.userName.validator,
                            textInputAction: TextInputAction.next,
                          ),
                        ),

                        Container(
                          width: 50,
                          margin: EdgeInsets.only(left: 10),
                          child: IconButton(
                            icon: const Icon(Icons.close),
                            onPressed: () => Navigator.of(context).pop(),
                          ),
                        ),
                      ],
                    ),

                    // Reply to message preview
                    if (message is AddableMessage && message.replyTo != null) ...{
                      spacer,
                      QuoteWidget(
                        userName: message.replyTo!.userName,
                        text: message.replyTo!.quote,
                        onDismiss: widget.model.clearReplyTo,
                      ),
                    },
                    spacer,

                    KeyboardListener(
                      focusNode: FocusNode(),
                      onKeyEvent: (event) {
                        if (event is KeyDownEvent &&
                            event.logicalKey == LogicalKeyboardKey.enter &&
                            (HardwareKeyboard.instance.isControlPressed || HardwareKeyboard.instance.isMetaPressed)) {
                          _addNew();
                        }
                      },
                      child: IntrinsicHeight(
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Expanded(
                              child: TextFormField(
                                controller: message.text.controller,
                                autofocus: (message.userName.value?.isNotEmpty == true),
                                decoration: InputDecoration(
                                  labelText: message.text.label,
                                  hintText: message.text.hint,
                                  border: OutlineInputBorder(),
                                  prefixIcon: Icon(Icons.message),
                                ),
                                minLines: 3,
                                maxLines: 15,
                                validator: message.text.validator,
                                keyboardType: TextInputType.multiline,
                                textInputAction: TextInputAction.newline,
                              ),
                            ),
                            Container(
                              width: 50,
                              margin: EdgeInsets.only(left: 10),
                              child: Material(
                                color: (widget.model.isWaiting)
                                    ? theme.colorScheme.surfaceContainerHighest
                                    : theme.colorScheme.primary,
                                borderRadius: BorderRadius.circular(8),
                                child: InkWell(
                                  onTap: (widget.model.isWaiting) ? null : _addNew,
                                  borderRadius: BorderRadius.circular(8),
                                  child: Center(
                                    child: (widget.model.isWaiting)
                                        ? SizedBox(
                                            width: 24,
                                            height: 24,
                                            child: CircularProgressIndicator(
                                              strokeWidth: 2,
                                              color: theme.colorScheme.onSurfaceVariant,
                                            ),
                                          )
                                        : Icon(
                                            Icons.send,
                                            color: theme.colorScheme.onPrimary,
                                          ),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            if (widget.model.isWaiting)
              Positioned.fill(
                child: Container(color: Colors.black.withAlpha(80)),
              ),
          ],
        );
      },
    );
  }

  Future<void> _addNew() async {
    if (widget.model.isWaiting) return;
    if (!_formKey.currentState!.validate()) return;
    await widget.model.save();
    if (mounted) Navigator.pop(context);
  }
}
