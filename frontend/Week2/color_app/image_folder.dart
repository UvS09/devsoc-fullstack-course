import 'package:flutter/material.dart';

class ImageAsset extends StatelessWidget {
  const ImageAsset({super.key});

  @override
  Widget build(BuildContext context) {

    double h = MediaQuery.of(context).size.height;
    double w = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: AppBar(
        title: Text('Assets'),
        centerTitle: true,
        backgroundColor: Colors.tealAccent,
      ),

      body: Center(
        child: Container(
          width: 0.4*w,
          height: 0.8*h,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(0),
            image: const DecorationImage(
              image: NetworkImage(
                'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg',
              ),
              fit: BoxFit.fill,
            ),
          ),
        ),
      ),
    );
  }
}