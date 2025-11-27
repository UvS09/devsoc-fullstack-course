import 'package:flutter/material.dart';

class Identity extends StatelessWidget {
  const Identity({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.red,
        title: Text('Identity Card'),
      ),

      body: Center(
        child: Card(
          elevation: 8,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16.0),
            side: BorderSide(
              color: Colors.blue,
              width: 2,
            )
          ),
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text("Name: Karan"),
                SizedBox(height: 15,),
                Text("DOB: 30/02/2006"),
                SizedBox(height: 15,),
                Text("Place: Mumbai"),
                SizedBox(height: 15,),
                Text("Degree: B.E."),
                SizedBox(height: 15,),
                Text("Course: C.S."),
                SizedBox(height: 15,),
                Text("Year of Graduation: 2028"),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

//Homework: Beautify this Card.
