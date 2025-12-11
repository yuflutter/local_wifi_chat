import 'dart:convert';
import 'dart:developer' as dev;
import 'package:crypto/crypto.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Хранит сессионные данные, требует асинхронной инициализации.
class UserSession implements Initializable {
  late final SharedPreferences _prefs;
  late final String _userHash;
  String? _userName;

  String get userHash => _userHash;
  String get userId => _userHash.substring(0, 20);
  String? get userName => _userName;

  void setUserName(String user) async {
    if (user.isNotEmpty) {
      _userName = user.trim();
      final res = await _prefs.setString(di<AppConfig>().userNameKey, _userName!);
      dev.log('${di<AppConfig>().userNameKey} = $_userName, $res');
    }
  }

  /// Инициализация локального хранилища и хеша пользователя,
  /// запускается при старте приложения с выводом ошибок на главный экран.
  @override
  Future<void> init() async {
    _prefs = await SharedPreferences.getInstance();
    dev.log(_prefs.getKeys().join(', '));

    final config = di<AppConfig>();

    final savedHash = _prefs.getString(config.userHashKey);
    if (savedHash?.isNotEmpty ?? false) {
      _userHash = savedHash!;
    } else {
      _userHash = _calcClientHash();
      await _prefs.setString(config.userHashKey, _userHash);
    }

    final savedUserName = _prefs.getString(config.userNameKey);
    if (savedUserName?.isNotEmpty == true) {
      _userName = savedUserName;
    }
  }

  String _calcClientHash() {
    return sha256.convert(utf8.encode('web_${DateTime.now().millisecondsSinceEpoch}')).toString();
  }

  // String deviceIdentifier;
  // if (kIsWeb) {
  //   // В проде можно использовать более сложный fingerprint (комбинацию user agent и других данных)
  //   deviceIdentifier = 'web_device_${DateTime.now().millisecondsSinceEpoch}';
  // Создаем новый хеш на основе характеристик устройства
  // } else {
  // final deviceInfo = DeviceInfoPlugin();

  // try {
  //   if (defaultTargetPlatform == TargetPlatform.android) {
  //     final androidInfo = await deviceInfo.androidInfo;
  //     // Используем комбинацию ID устройства и других уникальных характеристик
  //     // MAC-адрес недоступен на Android 6.0+, используем ID устройства
  //     deviceIdentifier = 'android_${androidInfo.id}_${androidInfo.model}_${androidInfo.fingerprint}';
  //   } else if (defaultTargetPlatform == TargetPlatform.iOS) {
  //     final iosInfo = await deviceInfo.iosInfo;
  //     // На iOS используем identifierForVendor
  //     deviceIdentifier = 'ios_${iosInfo.identifierForVendor ?? iosInfo.name}';
  //   } else if (defaultTargetPlatform == TargetPlatform.linux) {
  //     final linuxInfo = await deviceInfo.linuxInfo;
  //     // Для Linux используем machineId
  //     deviceIdentifier = 'linux_${linuxInfo.machineId}';
  //   } else if (defaultTargetPlatform == TargetPlatform.windows) {
  //     final windowsInfo = await deviceInfo.windowsInfo;
  //     deviceIdentifier = 'windows_${windowsInfo.computerName}';
  //   } else if (defaultTargetPlatform == TargetPlatform.macOS) {
  //     final macInfo = await deviceInfo.macOsInfo;
  //     deviceIdentifier = 'macos_${macInfo.computerName}';
  //   } else {
  //     // Fallback для неизвестных платформ
  //     deviceIdentifier = 'unknown_${DateTime.now().millisecondsSinceEpoch}';
  //   }
  // } catch (e) {
  //   // Если не удалось получить информацию об устройстве, используем временный идентификатор
  //   deviceIdentifier = 'fallback_${DateTime.now().millisecondsSinceEpoch}';
  // }
}
