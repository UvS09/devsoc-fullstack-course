import 'package:flutter/material.dart'; // Imports Flutter's Material Design Library. It gives access to ready-made UI widgets: Scaffold, AppBar, Text,Column, etc.

//Starting point of the program
void main() {
  runApp(const MyApp());   //runApp() tells flutter to start the app and show the given WIDGET (inside the ()). Here it is the MyApp widget.
}

class MyApp extends StatelessWidget {  //Defines a new class MyApp that extends StatelessWidget. --> this is the MyApp widget.
                                      // Stateless widget = widget that doesn't change over time (no internal state)
  const MyApp({super.key});           //Constructor -> allows flutter to optimize with constants.
                                      // super.key  -> passes the widget's unique identifier up to the parent constructor
                                      // super.key  -> it is basically a name tag that checks if it should rebuild a widget or reuse the old one when UI changes

  // This widget is the root of your application.
  //Every widget must override the build() method
  // This function is where we define how the widget looks like (its UI)
  @override            //tells to override the same function that exists in parent class.
  Widget build(BuildContext context) {
    //BuildContext: it is an object that Flutter passes. It tells where the widget lives in the widget tree. It acts as a reference to the location of a widget in the app's widget heirarchy. It lets the widget access its parent and ancestors in the tree.
    //context : widget's address in the widget tree
    return MaterialApp(
      //MaterialApp: widget that sets up app-wide settings like theme, title, navigation
      title: 'Flutter Demo',   //App name
      theme: ThemeData(        //defines colours, fonts, and overall look of the app.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),   //Generates a color scheme from a seed color.
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),     //the first screen of the app
    );
  }
}


//MyHomePage is another widget, but it is stateful
//StatefulWidget = can change during runtime (has a mutable state)
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  //Constructor for MyHomePage.
  //super.key --> passes the widget key to parent
  //required this.title --> enforces that a title MUST be provided when creating MyHomePage widget

  // 'final' means the title cannot change once assigned.
  final String title;

  //Creates a mutable State object (_MyhomePageState) for this widget (MyHomePage)
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}


// private class: starts with _
//holds the actual mutable state of MyHomePage
class _MyHomePageState extends State<MyHomePage> {

  // a private variable to keep track of counter value
  int _counter = 0;

  //function to increment the counter.
  void _incrementCounter() {

    //setState() tells flutter: "Hey something changed, rebuild the UI!"
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
