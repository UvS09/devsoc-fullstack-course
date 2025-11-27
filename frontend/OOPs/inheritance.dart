


class Animal{
  void eat(){
    print("This animal eats food");
  }
}

class Dog extends Animal{
  void bark(){
    print("Dog barks");
  }
}

void main(){
  Dog myDog = Dog();
  myDog.bark();  //Dog-specific.
  myDog.eat();   //Inherited from Animal
}