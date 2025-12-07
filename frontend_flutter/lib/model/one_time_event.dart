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

class OneTimeFlag {
  OneTimeFlag(this._value);

  bool _value;

  bool get read => _value;

  bool get value {
    final old = _value;
    _value = false;
    return old;
  }
}
