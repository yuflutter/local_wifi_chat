import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/data/api_client.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/data/devices_repository.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/data/messages_repository.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

// Вариант конфигурации (flavor) берет из командной строки --dart-define=FLAVOR=RELASE
const _flavor = String.fromEnvironment('FLAVOR', defaultValue: 'DEBUG'); // RELEASE

class DebugConfig extends AppConfig {
  @override
  final apiUrl = 'http://localhost:9090/api/'; // 192.168.24.53

  @override
  // ignore: overridden_fields
  final fetchBatchSize = 5;

  @override
  Future<void> init() async {
    // throw "Тестовая ошибка инициализации приложения";
  }
}

class ReleaseConfig extends AppConfig {
  // В проде используем относительный урл, так как бандл фронтенда включен в бинарник бекенда
  @override
  final apiUrl = '/api/';
}

// Инжектит глобальные объекты, и инициализирует их ПОСЛЕДОВАТЕЛЬНО.
// Запускается в main(), ошибки выводятся туда же, логгер инициализируем раньше.
Future<void> initApp() async {
  final config = switch (_flavor) {
    'DEBUG' => DebugConfig(),
    'RELEASE' => ReleaseConfig(),
    _ => throw 'Undefined FLAVOR = $_flavor',
  };
  await DI.putAndInit(config);
  await DI.putAndInit(UserSession());
  await DI.putAndInit(
    ApiClient(
      apiUrl: config.apiUrl,
      getClientHashHeader: () => {config.userHashHeaderKey: di<UserSession>().userHash},
    ),
  );
  DI.putAll([MessagesRepository(), DevicesRepository()]);
}

/// Полиморфизм конфига - это важная и часто встречающаяся задача.
abstract class AppConfig implements Initializable {
  final appName = 'Локальный WiFi чат';
  abstract final String apiUrl;

  /// Цитируемый текст будет обрезаться до
  final maxMessageQuoteLength = 300;

  // Заголовки http
  final userHashHeaderKey = 'X-User-Hash';

  // Ключи в локальном хранилище
  final userHashKey = 'userHash';
  final userNameKey = 'userName';

  // Опции загрузки списков
  final fetchBatchSize = 10;
  final refreshListsEvery = const Duration(seconds: 3);

  String get flavor => _flavor;

  // Если нужна асинхронная инициализация (например чтение из env)
  @override
  Future<void> init() async {}
}
