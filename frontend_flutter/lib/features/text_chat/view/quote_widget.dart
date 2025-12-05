import 'package:flutter/material.dart';

class QuoteWidget extends StatelessWidget {
  final String userName;
  final String text;
  final void Function()? onDismiss;

  const QuoteWidget({super.key, required this.userName, required this.text, this.onDismiss});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Container(
      padding: const EdgeInsets.fromLTRB(15, 8, 12, 10),
      decoration: BoxDecoration(
        color: theme.colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(8),
        border: Border(
          left: BorderSide(color: theme.colorScheme.primary, width: 3),
        ),
      ),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  userName,
                  style: theme.textTheme.bodySmall?.copyWith(
                    color: theme.colorScheme.primary,
                  ),
                ),
                const SizedBox(height: 4),
                Builder(
                  builder: (context) {
                    // final maxQuoteLength = di<AppConfig>().maxMessageQuoteLength;
                    // final displayText = text + ((text.length >= maxQuoteLength) ? '...' : '');
                    final displayText = text.replaceAll('\n', ' / ');
                    return Text(
                      displayText,
                      style: theme.textTheme.bodySmall,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    );
                  },
                ),
              ],
            ),
          ),
          if (onDismiss != null)
            IconButton(
              onPressed: onDismiss,
              icon: const Icon(Icons.close, size: 20),
              tooltip: 'Удалить цитату',
            ),
        ],
      ),
    );
  }
}
