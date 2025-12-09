import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/view/core/waiting_overlay.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/quote_widget.dart';

class AddEditMessageForm extends StatelessWidget {
  const AddEditMessageForm({super.key});

  @override
  Widget build(BuildContext context) {
    final model = context.watch<AddEditMessageModel>();
    final theme = Theme.of(context);
    return Stack(
      fit: StackFit.loose,
      alignment: AlignmentGeometry.bottomCenter,
      children: [
        if (model.isFormExpanded)
          GestureDetector(
            onTap: model.clearForm,
            child: Container(color: Colors.black.withAlpha(100)),
          ),
        Form(
          key: model.formKey,
          child: Container(
            color: theme.scaffoldBackgroundColor,
            padding: EdgeInsets.fromLTRB(0, 4, 0, 0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                if (model.isFormExpanded) ...{
                  IconButton(
                    icon: const Icon(Icons.close),
                    onPressed: model.clearForm,
                  ),

                  SizedBox(height: 6),
                  if (model.replyTo != null) ...{
                    QuoteWidget(
                      userName: model.replyTo!.userName,
                      text: model.replyTo!.quote,
                      onDismiss: model.clearReplyTo,
                    ),
                    SizedBox(height: 10),
                  },

                  TextFormField(
                    controller: model.userName.controller,
                    focusNode: model.userNameFocusNode,
                    decoration: InputDecoration(
                      labelText: model.userName.label,
                      hintText: model.userName.hint,
                      border: OutlineInputBorder(),
                      prefixIcon: Icon(Icons.person),
                    ),
                    validator: model.userName.validator,
                    textInputAction: TextInputAction.next,
                  ),
                  SizedBox(height: 9),
                },
                Stack(
                  alignment: AlignmentDirectional.centerEnd,
                  children: [
                    KeyboardListener(
                      focusNode: FocusNode(),
                      onKeyEvent: (event) {
                        if (model.isWaiting) return;
                        if (event is KeyDownEvent &&
                            event.logicalKey == LogicalKeyboardKey.enter &&
                            (HardwareKeyboard.instance.isControlPressed || HardwareKeyboard.instance.isMetaPressed)) {
                          _validateAndSave(context, model);
                        } else if (event is KeyDownEvent && event.logicalKey == LogicalKeyboardKey.escape) {
                          model.clearForm();
                        }
                      },
                      child: TextFormField(
                        controller: model.text.controller,
                        focusNode: model.textFocusNode,
                        decoration: InputDecoration(
                          labelText: model.text.label,
                          hintText: model.text.hint,
                          border: OutlineInputBorder(),
                        ),
                        minLines: (model.isFormExpanded) ? 3 : 1,
                        maxLines: 15,
                        validator: model.text.validator,
                        keyboardType: TextInputType.multiline,
                        textInputAction: TextInputAction.newline,
                      ),
                    ),
                    IconButton(
                      onPressed: (model.isFormExpanded) ? () => _validateAndSave(context, model) : null,
                      padding: EdgeInsets.fromLTRB(0, 0, 0, 0),
                      icon: Icon(Icons.send),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  void _validateAndSave(BuildContext context, AddEditMessageModel model) async {
    if (model.validate()) {
      showWaitingOverlay(context);
      await model.save();
      if (context.mounted) Navigator.pop(context);
    }
  }
}
