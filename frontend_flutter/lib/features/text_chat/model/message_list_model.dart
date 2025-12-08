import 'dart:async';
import 'package:flutter/widgets.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/messages.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';

enum _FetchMode { top, older, newer }

class MessageListModel extends AbstractModel {
  final AbstractMessagesRepository _repository;

  /// Тут список сообщений
  var list = MessageList.empty();

  /// Имеются новые непрочитанные, используется для показа кнопки "вниз"
  var _existsUnread = false;
  bool get existsUnread => _existsUnread;

  /// Контроллер для отслеживания прочитанных / непрочитанных
  late final ScrollController scrollController = ScrollController()
    ..addListener(() {
      if (scrollController.position.pixels < 10) {
        _existsUnread = false;
        notifyListeners();
      }
    });

  Timer? _refreshTimer;

  MessageListModel({super.errorPresenter, AbstractMessagesRepository? replsitory})
    : _repository = replsitory ?? di<AbstractMessagesRepository>();

  @override
  void dispose() {
    _refreshTimer?.cancel();
    super.dispose();
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
    final defaultLimit = di<AppConfig>().fetchBatchSize;
    try {
      // await Future.delayed(Duration(seconds: 2));
      // throw Exception('Testing adding new message error');
      switch (fetchMode) {
        case _FetchMode.top:
          final bath = await _repository.fetch(limit: defaultLimit);
          log.info(null, "Top batch loaded: ${bath.all.length} items");
          list = bath;
        // _isScrollToTop = OneTimeFlag(true);

        case _FetchMode.older:
          final bath = await _repository.fetch(
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
          final bath = await _repository.fetch(
            newerThan: list.all.firstOrNull,
            limit: 0,
            noLog: true,
          );
          if (bath.all.isNotEmpty) {
            log.info(null, "Batch of newer loaded: ${bath.all.length} items");
            if (scrollController.hasClients && scrollController.position.pixels > 10) {
              _existsUnread = true;
            }
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
