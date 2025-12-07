import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/add_edit_message_dialog.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/quote_widget.dart';

class MessageListTile extends StatefulWidget {
  const MessageListTile({super.key, required this.message});

  final Message message;

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
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 4.0, vertical: 4.0),
        constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * (isMine ? 0.8 : 1)),
        child: Card(
          color: isMine ? Colors.brown : null, // Цвет как в Telegram для моих сообщений
          child: Padding(
            padding: const EdgeInsets.all(12.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (widget.message.replyTo != null) ...[
                  QuoteWidget(userName: widget.message.replyTo!.userName, text: widget.message.replyTo!.quote),
                  SizedBox(height: 6),
                ],
                Text(
                  widget.message.userName,
                  style: TextStyle(fontWeight: FontWeight.bold, color: isMine ? Colors.white : null),
                ),
                SizedBox(height: 2),
                SelectableText(
                  widget.message.text,
                  style: TextStyle(color: isMine ? Colors.white : null),
                  // focusNode: _focusNode,
                  onSelectionChanged: (selection, cause) {
                    setState(() => _selectedText = selection.textInside(widget.message.text));
                  },
                ),
                SizedBox(height: 6),
                Row(
                  children: [
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

                    if (_selectedText.isNotEmpty) ...[
                      const SizedBox(width: 8),
                      Expanded(
                        child: Container(
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
                                  _selectedText.replaceAll('\n', '/'),
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
                      ),
                    ] else
                      Spacer(),
                    const SizedBox(width: 8),

                    Text(
                      _dateFormat.format(widget.message.createdAt.toLocal()),
                      style: TextStyle(fontSize: 12, color: isMine ? Colors.white70 : Colors.grey[600]),
                    ),
                    // Text(
                    //   'Hash: ${widget.message.userHash.substring(0, 5)}...',
                    //   style: TextStyle(fontSize: 10, color: isMine ? Colors.white70 : Colors.grey[500]),
                    // ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  void _reply(BuildContext context, {String? quote}) {
    showAddMessageDialog(context, replyToMessage: widget.message, replyToQuote: quote ?? widget.message.text);
    setState(() => _selectedText = '');
  }

  void _edit(BuildContext context) {
    showEditMessageDialog(context, messageToEdit: widget.message);
  }
}

final _dateFormat = DateFormat('HH:mm:ss');
