import 'dart:async';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/model/one_time_event.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';

enum _FetchMode { top, older, newer }

class MessageListModel extends AbstractModel {
  /// Тут список сообщений
  var list = MessageList.empty();

  /// Имеются новые непрочитанные, используется для показа кнопки "вниз"
  var _existsUnread = false;

  /// Флаг принудительного скролла в начало списка (то есть в низ экрана)
  var forceScrollToTop = OneTimeEvent(false);

  Timer? _refreshTimer;

  MessageListModel({super.errorPresenter});

  @override
  void dispose() {
    _refreshTimer?.cancel();
    super.dispose();
  }

  bool get existsUnread => _existsUnread;

  void clearExistsUnread() {
    _existsUnread = false;
    notifyListeners();
  }

  /// Для первого fetch() ошибку обрабатываем иначе, чем для остальных фоновых запросов,
  /// а именно выбрасываем исключения для перехвата его в FutureBuilder.
  Future<void> fetchTop() async {
    _refreshTimer?.cancel();
    await _fetch(_FetchMode.top, noPresentError: true);
    _refreshTimer = Timer.periodic(di<AppConfig>().refreshListsEvery, (
      _,
    ) async {
      try {
        await fetchNewer();
      } catch (e, s) {
        presentError(e, s);
        _refreshTimer?.cancel();
      } finally {
        notifyListeners();
      }
    });
  }

  Future<void> fetchOlder() => _fetch(_FetchMode.older);

  Future<void> fetchNewer() => _fetch(_FetchMode.newer);

  Future<void> _fetch(_FetchMode fetchMode, {bool noPresentError = false}) async {
    final repository = di<AbstractMessagesRepository>();
    final defaultLimit = di<AppConfig>().fetchBatchSize;
    try {
      switch (fetchMode) {
        case _FetchMode.top:
          final bath = await repository.fetch(limit: defaultLimit);
          log.info(null, "Top batch loaded: ${bath.all.length} items");
          list = bath;
          forceScrollToTop = OneTimeEvent(true);

        case _FetchMode.older:
          final bath = await repository.fetch(
            olderThan: list.all.lastOrNull,
            limit: defaultLimit,
          );
          if (bath.all.isNotEmpty) {
            log.info(null, "Batch of older loaded: ${bath.all.length} items");
          }
          list = MessageList(
            all: list.all + bath.all,
            isOlderAvailable: bath.isOlderAvailable,
          );

        case _FetchMode.newer:
          final bath = await repository.fetch(
            newerThan: list.all.firstOrNull,
            limit: 0,
            noLog: true,
          );
          if (bath.all.isNotEmpty) {
            log.info(null, "Batch of newer loaded: ${bath.all.length} items");
            _existsUnread = true;
          }
          list = MessageList(
            all: bath.all + list.all,
            isOlderAvailable: list.isOlderAvailable,
          );
      }
      //
    } catch (e) {
      if (!noPresentError) presentError(e);
      rethrow;
    } finally {
      notifyListeners();
    }
  }

  void updateInList(Message message) {
    final i = list.all.indexWhere((m) => m.id == message.id);
    if (i < 0) {
      return log.info(null, 'Message ${message.id} not flund in list');
    } else {
      list.all[i] = message;
      notifyListeners();
    }
  }
}
