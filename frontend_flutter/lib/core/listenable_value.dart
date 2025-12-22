import 'dart:async';

/// Реактивный атрибут с приватным доступом на запись и публичным доступом на чтение / подписку.
/// В отличие от известных реактивных сигналов - поддерживает транспорт ошибок благодаря механизму стрима.
/// Не требует ручной отмены стрим-подписок, так как они отменяются автоматически сборщиком мусора.
/// Наружу отдаётся публичный интерфейc (чтение + подписка), внутри класса-владельца используется полный (+ запись).
/// Пример использования:
///   final _isConnected = ListenableValue(false);
///   late final isConnected = _isConnected.public;

/// Публичный интерфейс (только чтение)
abstract class ListenableValuePublic<T> {
  T get value;
  Stream<T> get stream;
}

/// Внутренний интерфейс (на запись)
abstract class ListenableValuePrivate<T> {
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
class ListenableValue<T> implements ListenableValuePublic<T>, ListenableValuePrivate<T> {
  T _value;

  final _controller = StreamController<T>.broadcast();

  late final _finalizer = Finalizer((_) => _controller.close());

  ListenableValue(T initial) : _value = initial {
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

  ListenableValuePublic<T> get public => this as ListenableValuePublic<T>;
}
