import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/logger.dart';
import 'package:local_wifi_chat_frontend/view/core/error_log_widget.dart';
import 'package:local_wifi_chat_frontend/view/core/simple_future_builder.dart';
import 'package:local_wifi_chat_frontend/view/home_page.dart';

void main() {
  ErrorWidget.builder = (FlutterErrorDetails e) => ErrorLogWidget(error: log.error('Rendering Error', e, e.stack));
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late final _initFuture = initApp();

  @override
  build(context) {
    return MaterialApp(
      title: "Local WiFi Chat",
      theme: ThemeData(
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
      ),

      home: SimpleFutureBuilder<void>(
        future: _initFuture,
        builder: (context, _) => const HomePage(),
      ),
    );
  }
}
