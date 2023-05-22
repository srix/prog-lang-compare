In Dart, we can define a class and its properties using getters and setters. Here are some examples of how to use get/set in a class:

1. Basic Getter and Setter:

```dart
class Person {
  String _name;

  String get name => _name;

  set name(String value) => _name = value;
}

void main() {
  final person = Person();
  person.name = 'John Doe';
  print(person.name); // Output: 'John Doe'
}
```

In the above example, the `Person` class has a private property `_name`. The `name` getter returns the value of `_name`, and the `name` setter sets the value of `_name`.

2. Computed Properties:

```dart
class Rectangle {
  double _width;
  double _height;

  double get area => _width * _height;

  set width(double value) => _width = value;
  set height(double value) => _height = value;
}

void main() {
  final rectangle = Rectangle();
  rectangle.width = 5;
  rectangle.height = 10;
  print(rectangle.area); // Output: 50
}
```

In the above example, the `Rectangle` class has private properties `_width` and `_height`. The `area` getter calculates the area of the rectangle based on `_width` and `_height`. The `width` and `height` setters set the values of `_width` and `_height`.

3. Read-Only Properties:

```dart
class Circle {
  final double radius;

  Circle(this.radius);

  double get area => math.pi * math.pow(radius, 2);
}

void main() {
  final circle = Circle(5);
  print(circle.area); // Output: 78.53981633974483
}
```

In the above example, the `Circle` class has a read-only property `radius`, which is set in the constructor. The `area` getter calculates the area of the circle based on `radius`.

Overall, getters and setters provide flexibility and encapsulation in object-oriented programming and are essential tools for class design in Dart.