//Abstract class: cannot be instantiated directly.



abstract class Shape{
  void draw();  //Abstract method
}

class Circle extends Shape{
  @override
  void draw(){
    print("Drawing a Circle");
  }
}

class Square extends Shape{
  @override
  void draw(){
    print("Drawing a Square");
  }
}

void main(){
  //Shape s = Shape();   //Error: Can't create object of abstract class.
  Shape shape1 = Circle();
  Shape shape2 = Square();

  shape1.draw(); //Output: Drawing a Circle
  shape2.draw(); //Output: Drawing a Square
}