
class Animal{
  void sound(){
    print("Animal makes a sound");
  }
}

class Dog extends Animal{
  @override
  void sound(){
    print("Dog barks");
  }
}

class Cat extends Animal{
  @override
  void sound(){
    super.sound();
    print("Cat meows");
  }
}

void main(){
  Animal a = new Animal();
  Animal a1 = new Dog();
  Animal a2 = new Cat();

  a.sound();
  a1.sound();
  a2.sound();
}