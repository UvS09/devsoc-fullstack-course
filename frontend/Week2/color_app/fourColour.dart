import 'package:color_app/image_folder.dart';
import 'package:flutter/material.dart';

class FourColor extends StatefulWidget {
  const FourColor({super.key});

  @override
  State<FourColor> createState() => _FourColorState();
}

class _FourColorState extends State<FourColor> {

  int choice = 1;
  Color color = Colors.yellow;
  Color outputColor = Colors.yellow;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        centerTitle: true,
        title: Text('Three Colour Game'),
      ),

      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(color: Colors.blue),
                child: Text(
                  "My App Drawer",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                  ),
                ),
            ),
            ListTile(
              leading: const Icon(Icons.person),
              title: const Text('Profile'),
              onTap: (){
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: const Icon(Icons.settings),
              title: const Text('Settings'),
              onTap: (){
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: const Icon(Icons.logout),
              title: const Text('Logout'),
              onTap: (){
                Navigator.pop(context);
              },
            ),
          ],
        )
      ),

        body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            //1st row
            SizedBox(height: 50,),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Container(
                  width: 120,
                  height: 50,
                  color: Colors.red,
                  alignment: Alignment.center,
                  child: Text(
                    "Red",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                    ),
                  ),
                ),
                ElevatedButton(
                  onPressed: (){
                    _chooseColor(1);
                  },
                  child: Text('Red button'),
                ),
              ],
            ),
            SizedBox(height: 25,),
            //2nd row
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Container(
                  width: 120,
                  height: 50,
                  color: Colors.green,
                  alignment: Alignment.center,
                  child: Text(
                    "Green",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                    ),
                  ),
                ),
                ElevatedButton(
                  onPressed: (){
                    _chooseColor(2);
                  },
                  child: Text('Green button'),
                ),
              ],
            ),
            SizedBox(height: 25,),
            //3rd row
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Container(
                  width: 120,
                  height: 50,
                  color: Colors.blue,
                  alignment: Alignment.center,
                  child: Text(
                    "Blue",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                    ),
                  ),
                ),
                ElevatedButton(
                  onPressed: (){
                    _chooseColor(3);
                  },
                  child: Text('Blue button'),
                ),
              ],
            ),
            Container(
              margin: EdgeInsets.only(top: 5.0),
              padding: EdgeInsets.only(top: 15, left: 70),
              width: 120,
              height: 50,
              color: outputColor,
              child: Text(
                'Output',
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 15,
                  fontWeight: FontWeight.bold,
                  fontFamily: 'Roboto',
                ),
              ),
            ),

            ElevatedButton(
              onPressed: () => {
                Navigator.push(
                  context, 
                  MaterialPageRoute(builder: (context) => const ImageAsset()),
                ),
              },
              child: Text('Click'),
            ),
          ],
        ),
    );
  }

  void _chooseColor(int choice){
    if(choice == 1){
      color = Colors.red;
    }
    else if(choice == 2){
      color = Colors.green;
    }
    else if(choice == 3){
      color = Colors.blue;
    }

    setState(() {
      outputColor = color;
    });

  }
}
