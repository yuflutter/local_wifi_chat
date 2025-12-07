import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/chat_page.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/device_list_page.dart';
import 'package:local_wifi_chat_frontend/features/voice_room/view/audio_page.dart';
import 'package:local_wifi_chat_frontend/view/settings_page.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _pages = const [ChatPage(), AudioPage(), DeviceListPage(), SettingsPage()];
  int _currentIndex = 0;

  @override
  build(context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final isLandscape = constraints.maxWidth > constraints.maxHeight;
        if (isLandscape) {
          return Scaffold(
            body: Row(
              children: [
                NavigationRail(
                  selectedIndex: _currentIndex,
                  onDestinationSelected: (index) {
                    setState(() {
                      _currentIndex = index;
                    });
                  },
                  labelType: NavigationRailLabelType.all,
                  destinations: const [
                    NavigationRailDestination(icon: Icon(Icons.chat), label: Text('Чат')),
                    NavigationRailDestination(icon: Icon(Icons.audiotrack), label: Text('Аудио')),
                    NavigationRailDestination(icon: Icon(Icons.devices), label: Text('Устройства')),
                    NavigationRailDestination(icon: Icon(Icons.settings), label: Text('Настройки')),
                  ],
                ),
                Expanded(child: _pages[_currentIndex]),
              ],
            ),
          );
        } else {
          return Scaffold(
            body: _pages[_currentIndex],
            bottomNavigationBar: BottomNavigationBar(
              currentIndex: _currentIndex,
              onTap: (index) => setState(() => _currentIndex = index),
              type: BottomNavigationBarType.fixed,
              items: const [
                BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Чат'),
                BottomNavigationBarItem(icon: Icon(Icons.audiotrack), label: 'Аудио'),
                BottomNavigationBarItem(icon: Icon(Icons.devices), label: 'Устройства'),
                BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Настройки'),
              ],
            ),
          );
        }
      },
    );
  }
}
