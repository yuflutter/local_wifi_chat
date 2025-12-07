import 'package:flutter/foundation.dart';

abstract class AbstractModel with ChangeNotifier {
  /// Ошибку в виджетах мы обычно показываем попапом (например в PostFrameCallback),
  /// то есть ошибка - это однократное событие, и хранить ее в модели не нужно.
  /// Ошибки, возникающие при первом запуске виджета, показываются в FutureBuilder, и тоже не хранятся в модели.
  /// Это решает проблему сброса состояния ошибки, потому что само состояние отсутствует.
  void Function(Object, StackTrace?)? errorPresenter;
  bool _isWaiting = false;

  AbstractModel({this.errorPresenter});

  void setErrorPresenter(void Function(Object, StackTrace?) handler) => errorPresenter = handler;

  void clearErrorPresenter() => errorPresenter = null;

  void presentError(Object e, [StackTrace? stack]) => (errorPresenter != null) ? errorPresenter!(e, stack) : null;

  bool get isWaiting => _isWaiting;

  void startWaiting() {
    _isWaiting = true;
    notifyListeners();
  }

  void stopWaiting() {
    _isWaiting = false;
    notifyListeners();
  }
}
