import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/view/core/error_widgets.dart';

/// Синтаксический сахар для FutureBuilder.
class SimpleFutureBuilder<T> extends StatelessWidget {
  final Future<T> future;
  final Widget Function(BuildContext context, T? data) builder;
  final Widget? placeholder;
  final Widget Function(Object error, StackTrace? stack)? errorBuilder;

  const SimpleFutureBuilder({
    super.key,
    required this.future,
    required this.builder,
    this.placeholder,
    this.errorBuilder,
  });

  @override
  build(context) {
    return FutureBuilder<T?>(
      future: future,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return Material(child: placeholder ?? Center(child: CircularProgressIndicator()));
        } else if (snapshot.hasError) {
          return (errorBuilder != null)
              ? errorBuilder!(snapshot.error!, snapshot.stackTrace)
              : ErrorLogWidget(error: snapshot.error!, stack: snapshot.stackTrace);
        } else {
          return builder(context, (snapshot.hasData) ? snapshot.requireData : null);
        }
      },
    );
  }
}
