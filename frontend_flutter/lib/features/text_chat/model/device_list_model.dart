import 'dart:async';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';

class DeviceListModel extends AbstractModel {
  DeviceListModel({super.errorPresenter, AbstractDevicesRepository? repository})
    : _repository = repository ?? di<AbstractDevicesRepository>();

  final AbstractDevicesRepository _repository;
  var all = <String>[];
  Timer? _refreshTimer;

  @override
  void dispose() {
    _refreshTimer?.cancel();
    super.dispose();
  }

  /// Для первого fetch() ошибку обрабатываем иначе, чем для остальных фоновых.
  /// А именно выбрасываем исключения для перехвата его в SimpleFutureBuilder.
  Future<void> fetch() async {
    _refreshTimer?.cancel();
    all = await _repository.fetch();
    notifyListeners();
    _refreshTimer = Timer.periodic(di<AppConfig>().refreshListsEvery, (
      _,
    ) async {
      try {
        all = await _repository.fetch();
      } catch (e, s) {
        presentError(e, s);
        _refreshTimer?.cancel();
      } finally {
        notifyListeners();
      }
    });
  }
}

abstract class AbstractDevicesRepository {
  Future<List<String>> fetch();
}
