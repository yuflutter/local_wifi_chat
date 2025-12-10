import 'package:flutter/material.dart';

/// При действиях (таких как сохранение чего-то на бекенд) - не паримся с состояниями типа isWaiting,
/// а просто накрываем весь экран полупрозрачным оверлеем, блокируя весь ввод. Дешево и приемлемо.
void showWaitingOverlay(BuildContext context) {
  showDialog(
    context: context,
    barrierColor: Colors.black.withAlpha(100),
    barrierDismissible: false,
    builder: (_) => Center(child: CircularProgressIndicator()), // Пустой диалог
  );
}
