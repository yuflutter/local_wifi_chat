import 'dart:async';
import 'package:flutter/widgets.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/entity/messages.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/entity/repos.dart';
import 'package:local_wifi_chat_frontend/model/abstract_model.dart';

enum _FetchMode { top, older, newer }

class MessageListModel extends AbstractModel {
  final AbstractMessagesRepository _repository;

  /// Тут список сообщений
  var list = MessageList.empty();

  /// Имеются новые непрочитанные сообщения, используется для показа кнопки "вниз".
  var _existsUnread = false;
  bool get existsUnread => _existsUnread;

  /// Контроллер используется для отслеживания наличия прочитанных / непрочитанных сообщений.
  /// и принудительного скролла. Перенесено из виджета в модель, потому что это часть вью-логики.
  late final ScrollController scrollController = ScrollController()
    ..addListener(() {
      if (scrollController.position.pixels < 20 && _existsUnread) {
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
    scrollController.dispose();
    super.dispose();
  }

  void scrollToTop() {
    if (scrollController.hasClients) scrollController.jumpTo(0);
  }

  /// Для первого fetch() ошибку обрабатываем иначе, чем для остальных фоновых.
  /// А именно не используем errorPresenter, а выбрасываем исключение для перехвата его в FutureBuilder.
  Future<void> fetchTop({bool noPresentError = false}) async {
    _refreshTimer?.cancel();

    await _fetch(_FetchMode.top, noPresentError: noPresentError);
    scrollToTop();

    _refreshTimer = Timer.periodic(di<AppConfig>().refreshListsEvery, (
      _,
    ) async {
      try {
        await fetchNewer();
      } catch (e, s) {
        _refreshTimer?.cancel();
        presentError(e, s);
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
          // log.info(null, "Top batch loaded: ${bath.all.length} items");
          list = bath;

        case _FetchMode.older:
          final bath = await _repository.fetch(
            olderThan: list.all.lastOrNull,
            limit: defaultLimit,
          );
          if (bath.all.isNotEmpty) {
            // log.info(null, "Batch of older loaded: ${bath.all.length} items");
          }
          list = MessageList(
            all: list.all + _cleanOfDuplicates(bath.all, origin: list.all),
            isOlderAvailable: bath.isOlderAvailable,
          );

        case _FetchMode.newer:
          final bath = await _repository.fetch(
            newerThan: list.all.firstOrNull,
            limit: 0,
            noLog: true,
          );
          if (bath.all.isNotEmpty) {
            // pring(null, "Batch of newer loaded: ${bath.all.length} items");
            if (scrollController.hasClients && scrollController.position.pixels > 20) {
              _existsUnread = true;
            }
          }
          list = MessageList(
            all: _cleanOfDuplicates(bath.all, origin: list.all) + list.all,
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

  /// В фоне работает автообновление, и при этом мы совершаем действия, что тоже приводит к обновлениям.
  /// Эти фьючи могут работать параллельно, и результаты приходить в разном порядке, что создает конфликты.
  /// Можно конечно отменять уже запущенные фьючи, но проще сделать устойчивый алгоритм слияния результатов.
  List<Message> _cleanOfDuplicates(List<Message> batch, {required List<Message> origin}) {
    final ids = origin.map((m) => m.id).toSet();
    return batch.where((m) => ids.add(m.id)).toList();
  }

  /// При изменении сообщения бекенд возвращает измененный объект, который нужно вставить в дерево.
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
