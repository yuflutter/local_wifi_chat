import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/chat_page.dart';
import 'package:local_wifi_chat_frontend/features/text_chat/view/device_list_page.dart';
import 'package:local_wifi_chat_frontend/features/voice_room/view/audio_page.dart';
import 'package:local_wifi_chat_frontend/view/settings_page.dart';

class _Page {
  final WidgetBuilder builder;
  final bool isPersistent;
  final Icon icon;
  final String label;
  var isLoaded = false;
  _Page(this.builder, this.isPersistent, this.icon, this.label);
}

final _pages = [
  _Page((_) => ChatPage(), true, Icon(Icons.chat), 'Чат'),
  _Page((_) => AudioPage(), false, Icon(Icons.audiotrack), 'Аудио'),
  _Page((_) => DeviceListPage(), false, Icon(Icons.devices), 'Устройства'),
  _Page((_) => SettingsPage(), false, Icon(Icons.settings), 'Настройки'),
];

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _pageIndex = 0;

  @override
  void initState() {
    _turnPage(_pageIndex);
    super.initState();
  }

  void _turnPage(int index) => setState(() {
    _pageIndex = index;
    _pages[_pageIndex].isLoaded = true;
  });

  Iterable<Widget> _stackOfPages() => Iterable.generate(_pages.length).map(
    (index) {
      final page = _pages[index];
      if (!page.isLoaded) {
        return SizedBox.shrink();
        //
      } else if (!page.isPersistent) {
        return Visibility(
          visible: _pageIndex == index,
          child: page.builder(context),
        );
        //
      } else {
        return Offstage(
          offstage: _pageIndex != index,
          // важно для анимаций и контроллеров
          child: TickerMode(
            enabled: _pageIndex == index,
            child: page.builder(context),
          ),
        );
      }
    },
  );

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        // мобилка
        if (constraints.maxWidth < constraints.maxHeight) {
          return Scaffold(
            body: Stack(children: [..._stackOfPages()]),
            bottomNavigationBar: BottomNavigationBar(
              currentIndex: _pageIndex,
              onTap: _turnPage,
              type: BottomNavigationBarType.fixed,
              items: [
                ..._pages.map((e) => BottomNavigationBarItem(icon: e.icon, label: e.label)),
              ],
            ),
          );
          // десктоп
        } else {
          return Scaffold(
            body: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                NavigationRail(
                  selectedIndex: _pageIndex,
                  onDestinationSelected: _turnPage,
                  labelType: NavigationRailLabelType.all,
                  destinations: [
                    ..._pages.map((e) => NavigationRailDestination(icon: e.icon, label: Text(e.label))),
                  ],
                ),
                Expanded(child: Stack(children: [..._stackOfPages()])),
              ],
            ),
          );
        }
      },
    );
  }
}
