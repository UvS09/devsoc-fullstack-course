import 'package:flutter/material.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {

  const MyApp({super.key});
 
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}



class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}



class _MyHomePageState extends State<MyHomePage> {

  int _counter = 0;

  void _incrementCounter() {

    setState(() {
      _counter++;   //increases the counter by 1
    });
  }

  @override
  //defines what the UI looks like
  Widget build(BuildContext context) {

    // Scaffold is the layout widget from Material Design
    //It provides app structure: AppBar, Body, FloatingActionButton, etc.
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Appbar background colour is taken from the theme.
        title: Text(widget.title),
        // Title of the Appbar comes from MyHomePage.title property
      ),

      //body of the page
      body: Center(
        // Center widget places its child in the middle of the screen.
        child: Column(

          // Column arranges children widgets vertically
          mainAxisAlignment: MainAxisAlignment.center,   //Center them vertically
          children: <Widget>[

            // a constant text (does not change)
            const Text('You have pushed the button this many times:'),

            //displays the counter value, which updates whenever setState is called.
            Text(
              '$_counter',    //String interpolation to display current counter value
              style: Theme.of(context).textTheme.headlineMedium,   //Again, uses theme-defined style
            ),
          ],
        ),
      ),

      //the button at the bottom right
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,   // action when the button is pressed.
        tooltip: 'Increment',           //tooltip when long-pressed. It is the hint text that appears when long pressed and tells what the button does
        child: const Icon(Icons.add),   // "+" icon
      ),
    );
  }
}
