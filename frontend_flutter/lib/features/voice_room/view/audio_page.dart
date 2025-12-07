import 'package:flutter/material.dart';

class AudioPage extends StatelessWidget {
  const AudioPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        child: Text('SnackBar'),
        onPressed: () {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'dfkg fdgj dfgkjdf gjfdg k gfdkg fkdg fdkg fdkg fdkg dfkg dfgkdfkfdgkdf gldfkgdflg dflkg fdlkg dfkg fl fgkf dgfjdgkdf gdfj gkfjg lkdfg jlkfdg jdfgk ;',
                  ),
                  TextField(
                    controller: TextEditingController(),
                    // autofocus: true,
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
