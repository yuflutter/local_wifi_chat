/// Одноразовый атрибут, сбрасываемый при первом чтении.
/// Иногда полезная вещь при использовании ChangeNotifier. Но немного опасная.
/// Не нужна в архитектурах с иммутабельным стейтом (например Cubit).
class OneTimeEvent<T> {
  T? _value;

  OneTimeEvent(this._value);

  bool get exists => (_value != null);

  T? get value {
    final old = _value;
    _value = null;
    return old;
  }
}

class OneTimeFlag {
  bool _value;

  OneTimeFlag(this._value);

  bool get read => _value;

  bool get value {
    final old = _value;
    _value = false;
    return old;
  }
}
