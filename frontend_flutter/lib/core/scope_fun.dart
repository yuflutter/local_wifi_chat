// контекстные функции в стиле котлин

extension LetExtension<T> on T? {
  R? let<R>(R Function(T it) transform) {
    final value = this;
    return (value != null) ? transform(value) : null;
  }
}
