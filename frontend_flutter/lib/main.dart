import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/add_edit_message_model.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/model/message_list_model.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/view/core/error_log_widget.dart';
import 'package:local_wifi_chat_frontend/view/home_page.dart';
import 'package:local_wifi_chat_frontend/features/voice_room/providers/audio_room_provider.dart';

(Object, StackTrace?)? _initError;

void main() async {
  await DI.putAndInit(InMemoryLogger(storeUpToEntries: 100));
  ErrorWidget.builder = (FlutterErrorDetails e) => ErrorLogWidget(error: log.error('Ошибка рендеринга', e, e.stack));
  try {
    await initApp();
  } catch (e, s) {
    _initError = (e, s);
  }
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});
  @override
  createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  void _errorPresenter(Object e, StackTrace? s) => WidgetsBinding.instance.addPostFrameCallback(
    (_) => showErrorLogWidget(context, error: e, stack: s),
  );

  @override
  build(context) {
    if (_initError != null) {
      return MaterialApp(
        title: _appTitle,
        theme: _appTheme,
        home: ErrorLogWidget(error: log.error('Ошибка инициализации приложения', _initError!.$1, _initError!.$2)),
      );
      //
    } else {
      return MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (_) => MessageListModel(errorPresenter: _errorPresenter)),
          ChangeNotifierProvider(
            create: (context) => AddEditMessageModel(
              messageListModel: context.read<MessageListModel>(),
              errorPresenter: _errorPresenter,
            ),
          ),
          ChangeNotifierProvider(create: (_) => AudioRoomProvider()),
        ],
        child: MaterialApp(
          title: _appTitle,
          theme: _appTheme,
          home: const HomePage(),
        ),
      );
    }
  }
}

final _appTitle = 'Local WiFi Chat';

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
