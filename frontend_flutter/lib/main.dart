import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/view/core/error_log_widget.dart';
import 'package:local_wifi_chat_frontend/view/home_page.dart';
import 'package:local_wifi_chat_frontend/features/voice_room/model/voice_room_model.dart';

(Object, StackTrace?)? _initError;

void main() async {
  await DI.putAndInit(InMemoryLogger(storeUpToEntries: 100)); // инициализация логгера не должна выбрасывать ошибку!
  ErrorWidget.builder = (FlutterErrorDetails e) => ErrorLogWidget(error: log.error('Ошибка рендеринга', e, e.stack));
  try {
    await initApp();
  } catch (e, s) {
    _initError = (e, s);
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    if (_initError != null) {
      return MaterialApp(
        theme: _appTheme,
        home: ErrorLogWidget(error: log.error('Ошибка инициализации приложения', _initError!.$1, _initError!.$2)),
      );
      //
    } else {
      return MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (_) => VoiceRoomModel()),
        ],
        child: MaterialApp(
          title: di<AppConfig>().appName,
          theme: _appTheme,
          home: const HomePage(),
        ),
      );
    }
  }
}

final _appTheme = ThemeData(
  useMaterial3: true,
  brightness: Brightness.dark,
  visualDensity: VisualDensity.compact,

  fontFamily: 'Roboto',
  colorScheme: ColorScheme.fromSeed(seedColor: Colors.red, brightness: Brightness.dark),

  bottomSheetTheme: BottomSheetThemeData(
    constraints: BoxConstraints(maxWidth: double.infinity),
  ),

  snackBarTheme: SnackBarThemeData(
    contentTextStyle: TextStyle(color: Colors.black),
    shape: RoundedRectangleBorder(
      side: BorderSide(color: Colors.redAccent, width: 2),
      borderRadius: BorderRadius.all(Radius.circular(20)),
    ),
  ),
);
