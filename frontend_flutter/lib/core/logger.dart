import 'package:local_wifi_chat_frontend/core/di.dart';
import 'dart:developer' as dev;

enum LogType { info, api, error }

class LogEntry {
  final LogType type;
  final String? title;
  final String text;
  final Object? details;
  final DateTime time = DateTime.now().toUtc();

  LogEntry({required this.type, this.title, required this.text, this.details});

  @override
  String toString() {
    final buf = StringBuffer();
    if (title != null) {
      buf.write(title);
      buf.write("\t\t");
      buf.write('$time');
      buf.write("\n");
    }
    buf.write(text);
    buf.write("\n");
    if (details != null) {
      buf.write(details.toString());
    }
    return buf.toString();
  }
}

class ErrorLogEntry extends LogEntry {
  ErrorLogEntry({super.title, required super.text, super.details}) : super(type: LogType.error);
}

class HumanError implements Exception {
  final String? title;
  final String text;
  final ErrorLogEntry origin;

  HumanError({required this.title, required this.text, required this.origin});

  String get shortText => (title != null) ? '$title:\n$text' : text;
  String get detailedText => origin.toString();

  @override
  @Deprecated('Используйте shortText или detailedText')
  String toString() => throw UnimplementedError();
}

abstract class Logger implements Initializable {
  int _apiRequestCounter = 0;

  String _apiReqTitle(int reqNum) => "API-$reqNum >>>";
  String _apiResTitle(int reqNum) => "API-$reqNum <<<";

  /// Инфо-сообщение в лог.
  void info(String? title, String text, {Object? details}) {
    log(
      LogEntry(
        type: LogType.info,
        title: title,
        text: text,
        details: details,
      ),
    );
  }

  /// Логирует запрос к API.
  /// Возвращает номер API-запроса, который нужно передать в лог API-ответа,
  /// что позволит для каждого запроса найти в логе соответствующий ответ.
  int apiReq(String protocol, String url, [Object? reqData]) {
    _apiRequestCounter++;
    log(
      LogEntry(
        type: LogType.api,
        title: _apiReqTitle(_apiRequestCounter),
        text: "$protocol: $url",
        details: reqData,
      ),
    );
    return _apiRequestCounter;
  }

  /// Логирует ответ API на ранее отправленный запрос.
  /// Принимает номер запроса, полученного от apiReq().
  void apiRes(int reqNum, Object resStatus, [Object? resData]) {
    log(
      LogEntry(
        type: LogType.api,
        title: _apiResTitle(reqNum),
        text: resStatus.toString(),
        details: resData,
      ),
    );
  }

  /// Логирует ошибку, возвращает объект для проброса наверх и показа пользователю.
  HumanError error(String? title, Object error, StackTrace? stack, {int? apiReqNum}) {
    // если ошибка связана с ответом API - используем в заголовке номер соотв. запроса API
    final logEntryTitle = (title == null && apiReqNum != null) ? _apiResTitle(apiReqNum) : title;
    final errorText = error.toString();
    final logEntry = ErrorLogEntry(title: logEntryTitle, text: errorText, details: stack.toString());
    log(logEntry);
    // а здесь оставляем пользовательский заголовок, даже если он null
    return HumanError(title: title, text: errorText, origin: logEntry);
  }

  /// Переопределить реализацию логирования
  void log(LogEntry entry);
}

class InMemoryLogger extends Logger {
  final int storeUpToEntries;
  final List<LogEntry> _entries = [];

  InMemoryLogger({this.storeUpToEntries = 100});

  @override
  void log(LogEntry entry) {
    switch (entry.type) {
      case LogType.info:
        dev.log(entry.details.toString());
      case LogType.api:
        dev.log(entry.toString());
      case LogType.error:
        dev.log(entry.toString());
      // stderr.writeln(entry.toString());
    }

    _entries.insert(0, entry);
    if (_entries.length > storeUpToEntries) {
      _entries.removeLast();
    }
  }

  /// Получаем все записи для отправки в саппорт.
  List<String> getAll() => _entries.map((e) => e.toString()).toList();
  List<String> getFirst(int count) => _entries.take(count).map((e) => e.toString()).toList();

  @override
  Future<void> init() async {}
}

/// Краткий синоним для di<Logger>()
Logger get log => DI.get<Logger>();
