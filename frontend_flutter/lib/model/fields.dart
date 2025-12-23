import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';

/// Любой валидатор должен возвращать текст ошибки, используя в том числе label валидируемого поля,
/// поэтому сигнатуры разные - для функции, предоставленной пользователем, и для внутреннего типа.
/// Для конвертации типов - пользовательский валидатор оборачиваем в конструкторе с использованием _setValidator().
typedef PublicValidator<T> = String? Function(T? value, String label)?;
typedef PrivateValidator<T> = String? Function(T? value)?;

/// Абстрактное поле ввода с валидацией. Используется в слое моделей, а не виджетов.
/// Часть библиотеки BDUI.
abstract class Field<T> implements Disposable {
  T? value;
  final String label;
  final String? hint;
  String? errorText;
  PrivateValidator<T> _validator;

  PrivateValidator<T> get validator => _validator;

  void _setValidator(PublicValidator<T>? newValidator) {
    _validator = (newValidator != null)
        ? (T? v) {
            errorText = null;
            final res = newValidator(v, label);
            if (res != null) {
              errorText = res;
            } else {
              value = v;
            }
            return res;
          }
        : null;
  }

  Field({this.value, required this.label, this.hint, PublicValidator<T> validator}) {
    // здесь происходит оборачивание пользовательского валидатора с конвертацией типов
    _setValidator(validator);
  }

  void clear() => errorText = null;
}

/// Текстовое поле ввода с контроллером и валидацией. Используется в слое моделей, а не виджетов.
/// Часть библиотеки BDUI.
class StringField extends Field<String> {
  late final TextEditingController controller = TextEditingController(text: value)
    ..addListener(() => value = controller.text);
  final focusNode = FocusNode();

  StringField({super.value, required super.label, super.hint, super.validator});

  @override
  void dispose() {
    controller.dispose();
    focusNode.dispose();
  }

  @override
  void clear() {
    controller.clear(); // value тоже сбрасывается, в listener
    super.clear();
  }

  void trim() => controller.text = controller.text.trim();

  static PublicValidator<String> emptyStringValidator = (value, String label) =>
      (value?.isEmpty ?? false) ? 'Поле "$label" обязательно' : null;
}
