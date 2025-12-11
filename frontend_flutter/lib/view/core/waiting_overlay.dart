import 'package:flutter/material.dart';

/// При пользовательских действиях (сохранение чего-то на бекенд, и т.д.) мы не паримся со стейтами типа isWaiting,
/// а просто накрываем весь экран полупрозрачным оверлеем, блокируя весь дальнейший пользовательский ввод.
void showWaitingOverlay(BuildContext context) {
  showDialog(
    context: context,
    barrierColor: Colors.black.withAlpha(100),
    barrierDismissible: false,
    builder: (_) => Center(child: CircularProgressIndicator()), // Пустой диалог
  );
}

void hideWaitingOverlay(BuildContext context) => (context.mounted) ? Navigator.pop(context) : null;
