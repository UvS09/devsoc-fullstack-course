import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Checkbox + TextField Demo',
      home: CombinedWidget(),
    );
  }
}

class CombinedWidget extends StatefulWidget {
  @override
  State<CombinedWidget> createState() => _CombinedWidgetState();
}

class _CombinedWidgetState extends State<CombinedWidget> {
  bool _isChecked = false;
  String _input = '';

  void _toggleCheckbox(bool? value) {
    setState(() {
      _isChecked = value ?? false;
    });
  }

  void _onTextChanged(String value) {
    setState(() {
      _input = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Stateful Widgets Combined')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CheckboxListTile(
              title: Text('Agree to terms'),
              value: _isChecked,
              onChanged: _toggleCheckbox,
            ),
            SizedBox(height: 30),
            TextField(
              key: Key('input-field'),
              decoration: InputDecoration(
                  labelText: 'Enter your name',
                  border: OutlineInputBorder()),
              onChanged: _onTextChanged,
            ),
            SizedBox(height: 30),
            Text(
              'Checkbox is: ${_isChecked ? "Checked" : "Unchecked"}',
              style: TextStyle(fontSize: 18),
            ),
            Text(
              'You typed: $_input',
              style: TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}
