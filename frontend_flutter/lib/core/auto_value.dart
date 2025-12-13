import 'dart:async';

/// Атрибут с приватным доступом на запись и публичным доступом на чтение / подписку.
/// Не требует ручной отмены подписок на стрим, они отменяются автоматически сборщиком мусора.
/// Наружу отдаётся публичный интерфейc (только чтение), внутри класса-владельца используется полный (+ запись).
/// Пример использования:
///   final _isConnected = AutoValue(false);
///   late final isConnected = _isConnected.public;

/// Публичный интерфейс (только чтение)
abstract class AutoValuePublic<T> {
  T get value;
  Stream<T> get stream;
}

/// Внутренний интерфейс (на запись)
abstract class AutoValuePrivate<T> {
  /// В одном методе устанавливаем значение и опционально ошибку.
  void set(T v, {Object? error, StackTrace? stack});

  /// Только установка ошибки (в объекте не хранится, сразу передается в стрим)
  void setError(Object error, [StackTrace? stack]);

  /// Если значение изменено через внутреннюю мутабельность - вызываем принудительно для отправки в стрим.
  void notifyListeners();
}

/// Полная реализация обеих интерфейсов.
/// Подход к обработке ошибок аналогичен AbstactModel - считаем ошибку одноразовым атрибутом,
/// поэтому в стейте ошибку не храним, а передаем ее в стрим, предполагая, что она будет обработана презентером.
class AutoValue<T> implements AutoValuePublic<T>, AutoValuePrivate<T> {
  T _value;

  final _controller = StreamController<T>.broadcast();

  late final _finalizer = Finalizer((_) => _controller.close());

  AutoValue(T initial) : _value = initial {
    _finalizer.attach(this, null);
  }

  @override
  T get value => _value;

  @override
  void set(T v, {Object? error, StackTrace? stack}) {
    _value = v;
    _controller.add(v);
    if (error != null) setError(error, stack);
  }

  @override
  void setError(Object error, [StackTrace? stack]) {
    _controller.addError(error, stack);
  }

  @override
  void notifyListeners() => _controller.add(_value);

  @override
  Stream<T> get stream => _controller.stream;

  AutoValuePublic<T> get public => this as AutoValuePublic<T>;
}
