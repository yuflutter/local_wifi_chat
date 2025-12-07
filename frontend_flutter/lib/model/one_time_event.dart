class OneTimeEvent<T> {
  OneTimeEvent(this._value);

  T? _value;

  bool get exists => (_value != null);

  T? get value {
    final old = _value;
    _value = null;
    return old;
  }
}
