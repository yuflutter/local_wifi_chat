import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';

abstract class Field<T> implements Disposable {
  Field({this.value, this.label, this.hint, this.validator});

  T? value;
  final String? label;
  final String? hint;
  String? Function(T?)? validator;
}

class StringField extends Field<String> {
  StringField({super.value, super.label, super.hint, super.validator});

  late final controller = TextEditingController(text: value);

  @override
  void dispose() => controller.dispose();

  String? emptyStringValidator(String? v) {
    if (v?.isEmpty ?? false) {
      return 'Поле "$label" обязательно';
    } else {
      value = v;
      return null;
    }
  }
}
