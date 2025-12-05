import 'package:flutter/foundation.dart';

abstract class AbstractModel with ChangeNotifier {
  AbstractModel({this.errorHandler});

  /// Ошибку в виджетах показываем попапом (обычно в PostFrameCallback),
  /// то есть это однократное событие, и в модели саму ошибку не храним.
  void Function(Object, StackTrace?)? errorHandler;

  void setErrorHandler(void Function(Object, StackTrace?) handler) => errorHandler = handler;
  void clearErrorHandler() => errorHandler = null;

  bool _isWaiting = false;
  bool get isWaiting => _isWaiting;

  void startWaiting() {
    _isWaiting = true;
    notifyListeners();
  }

  void stopWaiting() {
    _isWaiting = false;
    notifyListeners();
  }

  void setError(Object e, [StackTrace? stack]) {
    if (errorHandler != null) errorHandler!(e, stack);
  }
}
