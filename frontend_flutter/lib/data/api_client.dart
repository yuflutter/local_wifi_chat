import 'package:http/http.dart' as http;
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';

enum _Method { post, put }

class ApiClient implements Initializable {
  final String apiUrl;
  final Map<String, String> Function() getClientHashHeader;

  ApiClient({required this.apiUrl, required this.getClientHashHeader});

  @override
  Future<void> init() async {}

  Future<T> get<T>(
    String path, {
    Map<String, dynamic>? uriParams,
    required T Function(String) parser,
    bool noLog = false,
  }) async {
    final uri = _buildUri(path, uriParams);
    int reqLogFunc() => log.apiReq("GET", "$uri");
    final reqNum = (!noLog) ? reqLogFunc() : null;

    try {
      final res = await http.get(uri, headers: getClientHashHeader());
      _checkAndLogResponse(reqNum, res);
      return parser(res.body);
      //
    } catch (e, s) {
      // Если запрос не залогирован, но выполнен с ошибкой -
      // принудительно логируем запрос перед логированием ответа и выбросом ошибки.
      final newReqNum = reqNum ?? reqLogFunc();
      throw log.apiError(newReqNum, e, s);
    }
  }

  Future<T> post<T>(
    String path, {
    Map<String, dynamic>? uriParams,
    Map<String, String>? headers,
    Object? body,
    required T Function(String) parser,
  }) => _postPut<T>(_Method.post, path, uriParams: uriParams, headers: headers, body: body, parser: parser);

  Future<T> put<T>(
    String path, {
    Map<String, dynamic>? uriParams,
    Map<String, String>? headers,
    Object? body,
    required T Function(String) parser,
  }) => _postPut<T>(_Method.put, path, uriParams: uriParams, headers: headers, body: body, parser: parser);

  Future<T> _postPut<T>(
    _Method method,
    String path, {
    Map<String, dynamic>? uriParams,
    Map<String, String>? headers,
    Object? body,
    required T Function(String) parser,
  }) async {
    final uri = _buildUri(path, uriParams);
    final reqNum = log.apiReq(method.name.toUpperCase(), "$uri", body);

    final httpFunc = switch (method) {
      _Method.post => http.post,
      _Method.put => http.put,
    };
    try {
      final res = await httpFunc(
        uri,
        headers: {...getClientHashHeader(), 'Content-Type': 'application/json', ...(headers ?? {})},
        body: body,
      );
      _checkAndLogResponse(reqNum, res);
      return parser(res.body);
      //
    } catch (e, s) {
      throw log.apiError(reqNum, e, s);
    }
  }

  Uri _buildUri(String path, Map<String, dynamic>? uriParams) {
    var uri = Uri.parse(apiUrl).resolve(path);
    return (uriParams == null) ? uri : uri.replace(queryParameters: {...uri.queryParameters, ...uriParams});
  }

  void _checkAndLogResponse(int? reqNum, http.Response response) {
    final code = response.statusCode;
    if (code != 200) {
      final errorBody = response.body;
      throw "HTTP $code\n$errorBody";
      //
    } else if (reqNum != null) {
      log.apiRes(reqNum, code, response.body);
    }
  }
}
