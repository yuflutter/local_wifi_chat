import 'dart:convert';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/data/api_client.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/device_list_model.dart';

class DevicesRepository extends AbstractDevicesRepository {
  final _api = di<ApiClient>();

  @override
  Future<List<String>> fetch() {
    // Форматируем JSON для красивого отображения
    const encoder = JsonEncoder.withIndent('  ');
    return _api.get<List<String>>(
      'devices',
      parser: (s) => (json.decode(s) as List).map((e) => encoder.convert(e)).toList(),
    );
  }
}
