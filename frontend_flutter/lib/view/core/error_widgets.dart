import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:url_launcher/url_launcher.dart';

void showErrorLogPopup(BuildContext context, {required Object error, StackTrace? stack}) {
  if (context.mounted) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => Container(
        width: double.infinity,
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.7),
        padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
        child: ErrorLogWidget(
          error: error,
          stack: stack,
          howToCloseDialog: () => Navigator.pop(context),
        ),
      ),
    );

    // ScaffoldMessenger.of(context).showSnackBar(
    //   SnackBar(
    //     content: ConstrainedBox(
    //       constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.7),
    //       child: ErrorLogWidget(
    //         errorInfo: errorInfo,
    //         howToCloseDialog: ScaffoldMessenger.of(context).hideCurrentSnackBar,
    //         parentTheme: theme,
    //       ),
    //     ),
    //     duration: Duration(seconds: 120),
    //   ),
    // );
  }
}

class ErrorLogWidget extends StatefulWidget {
  const ErrorLogWidget({super.key, required this.error, this.stack, this.howToCloseDialog});

  final Object error;
  final StackTrace? stack;
  final void Function()? howToCloseDialog;

  @override
  State<ErrorLogWidget> createState() => _ErrorLogWidgetState();
}

class _ErrorLogWidgetState extends State<ErrorLogWidget> {
  late final _error = (widget.error is HumanError)
      ? widget.error as HumanError
      : log.error(null, widget.error, widget.stack);

  var _isDetailsExpanded = false;

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Padding(
        padding: const EdgeInsets.all(10),
        child: SingleChildScrollView(
          child: IntrinsicHeight(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Text(_error.title ?? 'Error', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500)),
                    Spacer(),
                    IconButton(
                      icon: Icon(Icons.content_copy),
                      onPressed: () => _copyToClipboard(context),
                      tooltip: 'Copy',
                    ),
                    IconButton(
                      icon: Icon(Icons.send),
                      onPressed: () => _sendToSupport(),
                      tooltip: 'Send to support',
                    ),
                    if (widget.howToCloseDialog != null)
                      IconButton(
                        icon: Icon(Icons.close),
                        onPressed: widget.howToCloseDialog,
                        tooltip: 'Close',
                      ),
                  ],
                ),
                if (!_isDetailsExpanded) ...{
                  SelectableText(_error.text),
                  InkWell(
                    onTap: () => setState(() => _isDetailsExpanded = true),
                    child: Container(alignment: Alignment.bottomRight, child: Text('Show details...')),
                  ),
                } else ...{
                  ...di<InMemoryLogger>().getFirst(10).map((e) => SelectableText(e)),
                },
              ],
            ),
          ),
        ),
      ),
    );
  }

  // @override
  void _copyToClipboard(BuildContext context) {
    Clipboard.setData(ClipboardData(text: _error.detailedText));
  }

  void _sendToSupport() {
    final url =
        'mailto:support@example.com?subject=${di<AppConfig>().appName}: ${_error.title}&body=${_error.detailedText}';
    launchUrl(Uri.parse(url));
  }
}
