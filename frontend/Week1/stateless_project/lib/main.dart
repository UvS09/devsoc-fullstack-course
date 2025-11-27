import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'All Stateless App',
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Stateless Flutter App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.flutter_dash, size: 90, color: Colors.blue),
            Text(
              'Hello Flutter!',
              style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
            ),
            Padding(
              padding: EdgeInsets.all(16),
              child: Text(
                'This app is built using only stateless widgets.\nNo content will ever update by itself!',
                textAlign: TextAlign.center,
              ),
            ),
            ContactCard(name: 'Karan', email: 'karan@example.com'),
            //Calling our custom widget
          ],
        ),
      ),
    );
  }
}

//Making our own custom widget
class ContactCard extends StatelessWidget {
  final String name;
  final String email;
  const ContactCard({required this.name, required this.email, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 12, horizontal: 40),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Text(name, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w500)),
            Text(email, style: const TextStyle(fontSize: 16, color: Colors.grey)),
          ],
        ),
      ),
    );
  }
}
