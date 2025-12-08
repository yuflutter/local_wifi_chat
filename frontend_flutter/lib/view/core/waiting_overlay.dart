import 'package:flutter/material.dart';

void showWaitingOverlay(BuildContext context) {
  showDialog(
    context: context,
    barrierColor: Colors.black.withAlpha(150),
    barrierDismissible: false,
    builder: (_) => Center(child: CircularProgressIndicator()), // Пустой диалог
  );
}
