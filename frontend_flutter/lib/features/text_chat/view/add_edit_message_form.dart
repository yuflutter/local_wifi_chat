import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/quote_widget.dart';
import 'package:provider/provider.dart';

class AddEditMessageForm extends StatefulWidget {
  const AddEditMessageForm({super.key});

  @override
  State<AddEditMessageForm> createState() => _AddEditMessageFormState();
}

class _AddEditMessageFormState extends State<AddEditMessageForm> {
  var _isExpanded = false;
  final _formKey = GlobalKey<FormState>();
  final _textFocusNode = FocusNode();

  @override
  void initState() {
    _textFocusNode.addListener(() {
      if (_textFocusNode.hasFocus && !_isExpanded) {
        setState(() => _isExpanded = true);
      }
    });
    super.initState();
  }

  @override
  void dispose() {
    _textFocusNode.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final model = context.watch<AddEditMessageModel>();
    final addNewMessage = model.addNewMessage;
    final theme = Theme.of(context);

    return Stack(
      fit: StackFit.loose,
      children: [
        Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header
              if (_isExpanded)
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    // Text('Новое сообщение:', style: theme.textTheme.bodyLarge),
                    Expanded(
                      child: TextFormField(
                        controller: addNewMessage.userName.controller,
                        autofocus: (addNewMessage.userName.value?.isNotEmpty != true),
                        decoration: InputDecoration(
                          labelText: addNewMessage.userName.label,
                          hintText: addNewMessage.userName.hint,
                          border: OutlineInputBorder(),
                          prefixIcon: Icon(Icons.person),
                        ),
                        validator: addNewMessage.userName.validator,
                        textInputAction: TextInputAction.next,
                      ),
                    ),

                    Container(
                      width: 50,
                      margin: EdgeInsets.only(left: 10),
                      child: IconButton(
                        icon: const Icon(Icons.close),
                        onPressed: _clearForm,
                      ),
                    ),
                  ],
                ),

              // Reply to message preview
              if (addNewMessage is AddableMessage && addNewMessage.replyTo != null) ...{
                if (_isExpanded) SizedBox(height: 8),
                QuoteWidget(
                  userName: addNewMessage.replyTo!.userName,
                  text: addNewMessage.replyTo!.quote,
                  onDismiss: model.clearReplyTo,
                ),
              },

              if (_isExpanded) SizedBox(height: 8),
              KeyboardListener(
                focusNode: FocusNode(),
                onKeyEvent: (event) {
                  if (event is KeyDownEvent &&
                      event.logicalKey == LogicalKeyboardKey.enter &&
                      (HardwareKeyboard.instance.isControlPressed || HardwareKeyboard.instance.isMetaPressed)) {
                    _save();
                  } else if (event is KeyDownEvent && event.logicalKey == LogicalKeyboardKey.escape) {
                    _clearForm();
                  }
                },
                child: IntrinsicHeight(
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Expanded(
                        child: TextFormField(
                          controller: addNewMessage.text.controller,
                          focusNode: _textFocusNode,
                          decoration: InputDecoration(
                            labelText: addNewMessage.text.label,
                            hintText: addNewMessage.text.hint,
                            border: OutlineInputBorder(),
                            prefixIcon: Icon(Icons.message),
                          ),
                          minLines: (_isExpanded) ? 3 : 1,
                          maxLines: 15,
                          validator: addNewMessage.text.validator,
                          keyboardType: TextInputType.multiline,
                          textInputAction: TextInputAction.newline,
                        ),
                      ),
                      Container(
                        width: 50,
                        margin: EdgeInsets.only(left: 10),
                        child: Material(
                          color: (_isExpanded && !model.isWaiting)
                              ? theme.colorScheme.primary
                              : theme.colorScheme.surfaceContainerHighest,
                          borderRadius: BorderRadius.circular(8),
                          child: InkWell(
                            onTap: (_isExpanded && !model.isWaiting) ? _save : null,
                            borderRadius: BorderRadius.circular(8),
                            child: Center(
                              child: (model.isWaiting)
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
        if (model.isWaiting)
          Positioned.fill(
            child: Container(color: Colors.black.withAlpha(80)),
          ),
      ],
    );
  }

  Future<void> _save() async {
    if (_formKey.currentState?.validate() ?? false) {
      await context.read<AddEditMessageModel>().save();
      _clearForm();
    }
  }

  void _clearForm() {
    _textFocusNode.unfocus();
    setState(() => _isExpanded = false);
    context.read<AddEditMessageModel>().clear();
  }
}
