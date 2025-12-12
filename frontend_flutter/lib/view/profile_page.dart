import 'package:flutter/material.dart';
import 'package:local_wifi_chat_frontend/app_config.dart';
import 'package:local_wifi_chat_frontend/core/di.dart';
import 'package:local_wifi_chat_frontend/user_session.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  build(context) {
    final config = di<AppConfig>();
    final session = di<UserSession>();
    final theme = Theme.of(context).textTheme;

    row(n, v) => TableRow(
      children: [
        Container(padding: EdgeInsets.fromLTRB(0, 5, 15, 5), alignment: Alignment.topRight, child: Text(n ?? '')),
        Container(padding: EdgeInsets.fromLTRB(15, 5, 0, 5), alignment: Alignment.topLeft, child: Text(v ?? '')),
      ],
    );

    return Scaffold(
      appBar: AppBar(title: Text('User Profile')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(config.appName, style: theme.titleLarge),
            SizedBox(height: 30),
            Table(
              columnWidths: const {
                0: IntrinsicColumnWidth(),
                1: IntrinsicColumnWidth(),
              },
              children: [
                row('Flavor:', config.flavor),
                row('User ID:', session.userHash),
                row('User Name:', session.userName),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
