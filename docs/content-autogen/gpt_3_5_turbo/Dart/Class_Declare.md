In Dart, you can use the `class` keyword to declare a new class. Here's a simple example of a `Person` class:

```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void introduceYourself() {
    print("My name is $name and I am $age years old.");
  }
}
```

In this example, the `Person` class has two properties (a `name` and an `age`) and a constructor that sets these properties when a new `Person` object is created. It also has a method `introduceYourself()` that prints the `name` and `age` of the `Person` object to the console.

You can use this class to create new `Person` objects like this:

```dart
void main() {
  var person = Person("John", 25);
  person.introduceYourself(); // prints "My name is John and I am 25 years old."
}
```

In this example, we create a new `Person` object named `person`, with a `name` of "John" and an `age` of 25. We then call the `introduceYourself()` method on the `person` object, which prints its `name` and `age` to the console.