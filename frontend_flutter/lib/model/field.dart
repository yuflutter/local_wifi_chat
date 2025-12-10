import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';

/// Абстрактное поле ввода с валидацией. Используется в слое моделей, а не виджетов.
/// Часть библиотеки BDUI.
abstract class Field<T> implements Disposable {
  T? value;
  final String? label;
  final String? hint;
  bool hasError = false;
  String? Function(T?)? _validator;

  String? Function(T?)? get validator => _validator;
  set validator(String? Function(T?)? newValidator) {
    if (newValidator != null) {
      _validator = ((v) {
        hasError = false;
        final res = newValidator(v);
        if (res != null) hasError = true;
        return res;
      });
    } else {
      _validator = null;
    }
  }

  /// Оборачиваем пользовательский валидатор, чтобы установить флаг ошибки. К сожалению, сам флаттер этого не умеет.
  Field({this.value, this.label, this.hint, String? Function(T?)? validator}) {
    this.validator = validator;
  }

  void clear() => hasError = false;
}

/// Текстовое поле ввода с контроллером и валидацией. Используется в слое моделей, а не виджетов.
/// Часть библиотеки BDUI.
class StringField extends Field<String> {
  late final controller = TextEditingController(text: value);

  StringField({super.value, super.label, super.hint, super.validator});

  @override
  void dispose() => controller.dispose();

  @override
  void clear() {
    controller.clear();
    super.clear();
  }

  /// К сожалению требует установки в теле конструктора, так как валидация не является чистой функцией,
  /// и меняет стейт объекта (value, hasError). Возможно, подход к валидации придется вообще изменить.
  String? emptyStringValidator(String? v) {
    if (v?.isEmpty ?? false) {
      return 'Поле "$label" обязательно';
    } else {
      value = v;
      return null;
    }
  }
}
