import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/quote_widget.dart';
import 'package:provider/provider.dart';

class MessageListTile extends StatefulWidget {
  final Message message;

  const MessageListTile({super.key, required this.message});

  @override
  State<MessageListTile> createState() => _MessageListTileState();
}

class _MessageListTileState extends State<MessageListTile> {
  String _selectedText = '';

  @override
  Widget build(BuildContext context) {
    final isMine = widget.message.isMine;

    return Align(
      alignment: isMine ? Alignment.centerRight : Alignment.centerLeft,
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * (isMine ? 0.8 : 1)),
        child: Card(
          margin: const EdgeInsets.fromLTRB(0, 8, 0, 0),
          color: isMine ? Colors.brown : null, // Цвет как в Telegram для моих сообщений
          child: Padding(
            padding: const EdgeInsets.all(12.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  children: [
                    Text(
                      widget.message.userName,
                      style: TextStyle(fontWeight: FontWeight.bold, color: isMine ? Colors.white : null),
                    ),
                    Spacer(),
                    Text(
                      _dateFormat.format(widget.message.createdAt.toLocal()),
                      style: TextStyle(fontSize: 12, color: isMine ? Colors.white70 : Colors.grey[600]),
                    ),
                    SizedBox(width: 5),
                    PopupMenuButton(
                      itemBuilder: (context) {
                        final hasSelection = _selectedText.isNotEmpty;
                        return [
                          PopupMenuItem(
                            onTap: () => _reply(context),
                            child: Text('Ответить'),
                          ),
                          PopupMenuItem(
                            enabled: hasSelection,
                            onTap: hasSelection ? () => _reply(context, quote: _selectedText) : null,
                            child: Text('Ответить с цитатой'),
                          ),
                          if (isMine) PopupMenuItem(onTap: () => _edit(context), child: Text('Редактировать')),
                        ];
                      },
                      tooltip: 'Меню',
                      child: Icon(Icons.more_vert),
                    ),
                  ],
                ),
                if (widget.message.replyTo != null) ...[
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 5, 0, 6),
                    child: QuoteWidget(userName: widget.message.replyTo!.userName, text: widget.message.replyTo!.quote),
                  ),
                ],
                SelectableText(
                  widget.message.text,
                  style: TextStyle(color: isMine ? Colors.white : null),
                  // focusNode: _focusNode,
                  onSelectionChanged: (selection, cause) {
                    setState(() => _selectedText = selection.textInside(widget.message.text));
                  },
                ),
                if (_selectedText.isNotEmpty) ...{
                  SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: isMine ? Colors.white.withValues(alpha: 0.2) : Colors.blue.withValues(alpha: 0.1),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Row(
                      children: [
                        Icon(
                          Icons.format_quote,
                          size: 14,
                          color: isMine ? Colors.white70 : Colors.blue,
                        ),
                        const SizedBox(width: 4),
                        Expanded(
                          child: Text(
                            _selectedText.replaceAll('\n', ' / '),
                            style: TextStyle(
                              fontSize: 12,
                              color: isMine ? Colors.white70 : Colors.blue,
                              fontStyle: FontStyle.italic,
                            ),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                        const SizedBox(width: 4),
                        InkWell(
                          onTap: () => setState(() => _selectedText = ''),
                          child: Icon(
                            Icons.close,
                            size: 14,
                            color: isMine ? Colors.white70 : Colors.blue,
                          ),
                        ),
                      ],
                    ),
                  ),
                },
              ],
            ),
          ),
        ),
      ),
    );
  }

  void _reply(BuildContext context, {String? quote}) {
    context.read<AddEditMessageModel>().startAdding(
      replyToMessage: widget.message,
      replyToQuote: quote ?? widget.message.text,
    );
    setState(() => _selectedText = '');
  }

  void _edit(BuildContext context) {
    context.read<AddEditMessageModel>().startEditing(
      messageToEdit: widget.message,
    );
    setState(() => _selectedText = '');
  }
}

final _dateFormat = DateFormat('HH:mm:ss');
