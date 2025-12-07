extension LetExtension<T> on T? {
  R? let<R>(R Function(T it) transform) {
    final value = this;
    return value == null ? null : transform(value);
  }
}

extension RunExtension<T> on T {
  R run<R>(R Function(T it) block) {
    return block(this);
  }
}
