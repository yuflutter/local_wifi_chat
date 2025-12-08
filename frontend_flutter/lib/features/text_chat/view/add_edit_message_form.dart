import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/quote_widget.dart';

class AddEditMessageForm extends StatefulWidget {
  final AddEditMessageModel? model;

  const AddEditMessageForm({super.key, this.model});

  @override
  State<AddEditMessageForm> createState() => _AddEditMessageFormState();
}

class _AddEditMessageFormState extends State<AddEditMessageForm> {
  late final AddEditMessageModel _model = widget.model ?? context.read<AddEditMessageModel>();
  final _formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return ListenableBuilder(
      listenable: _model,
      builder: (context, _) {
        return Stack(
          fit: StackFit.loose,
          children: [
            Form(
              key: _formKey,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (_model.isFormExpanded)
                    Expanded(
                      child: GestureDetector(
                        onTap: _model.clearForm,
                        child: Container(color: Colors.black.withAlpha(180)),
                      ),
                    ),
                  Container(
                    color: theme.scaffoldBackgroundColor,
                    padding: EdgeInsets.fromLTRB(0, 10, 0, 0),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Header
                        if (_model.isFormExpanded)
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Expanded(
                                child: TextFormField(
                                  controller: _model.userName.controller,
                                  autofocus: (_model.userName.value?.isNotEmpty != true),
                                  decoration: InputDecoration(
                                    labelText: _model.userName.label,
                                    hintText: _model.userName.hint,
                                    border: OutlineInputBorder(),
                                    prefixIcon: Icon(Icons.person),
                                  ),
                                  validator: _model.userName.validator,
                                  textInputAction: TextInputAction.next,
                                ),
                              ),

                              Container(
                                width: 50,
                                margin: EdgeInsets.only(left: 10),
                                child: IconButton(
                                  icon: const Icon(Icons.close),
                                  onPressed: _model.clearForm,
                                ),
                              ),
                            ],
                          ),

                        // Reply to message preview
                        if (_model.replyTo != null) ...{
                          if (_model.isFormExpanded) SizedBox(height: 8),
                          QuoteWidget(
                            userName: _model.replyTo!.userName,
                            text: _model.replyTo!.quote,
                            onDismiss: _model.clearReplyTo,
                          ),
                        },

                        if (_model.isFormExpanded) SizedBox(height: 8),
                        KeyboardListener(
                          focusNode: FocusNode(),
                          onKeyEvent: (event) {
                            if (event is KeyDownEvent &&
                                event.logicalKey == LogicalKeyboardKey.enter &&
                                (HardwareKeyboard.instance.isControlPressed ||
                                    HardwareKeyboard.instance.isMetaPressed)) {
                              _save();
                            } else if (event is KeyDownEvent && event.logicalKey == LogicalKeyboardKey.escape) {
                              _model.clearForm();
                            }
                          },
                          child: IntrinsicHeight(
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Expanded(
                                  child: TextFormField(
                                    controller: _model.text.controller,
                                    focusNode: _model.textFocusNode,
                                    decoration: InputDecoration(
                                      labelText: _model.text.label,
                                      hintText: _model.text.hint,
                                      border: OutlineInputBorder(),
                                      prefixIcon: Icon(Icons.message),
                                    ),
                                    minLines: (_model.isFormExpanded) ? 3 : 1,
                                    maxLines: 15,
                                    validator: _model.text.validator,
                                    keyboardType: TextInputType.multiline,
                                    textInputAction: TextInputAction.newline,
                                  ),
                                ),
                                Container(
                                  width: 50,
                                  margin: EdgeInsets.only(left: 10),
                                  child: Material(
                                    color: (_model.isFormExpanded && !_model.isWaiting)
                                        ? theme.colorScheme.primary
                                        : theme.colorScheme.surfaceContainerHighest,
                                    borderRadius: BorderRadius.circular(8),
                                    child: InkWell(
                                      onTap: (_model.isFormExpanded && !_model.isWaiting) ? _save : null,
                                      borderRadius: BorderRadius.circular(8),
                                      child: Center(
                                        child: (_model.isWaiting)
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
                ],
              ),
            ),
            if (_model.isWaiting)
              Positioned.fill(
                child: Container(color: Colors.black.withAlpha(80)),
              ),
          ],
        );
      },
    );
  }

  Future<void> _save() async {
    if (_formKey.currentState?.validate() ?? false) {
      await context.read<AddEditMessageModel>().save();
      _model.clearForm();
    }
  }
}
