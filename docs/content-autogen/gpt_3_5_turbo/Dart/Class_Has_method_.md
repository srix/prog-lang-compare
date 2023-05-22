In Dart, you can use the `hasOwnProperty` method to check whether a class has a specific method or not. Here is an example of how you can do it:

```dart
class Shape {
  void draw() {
    print('Drawing a shape...');
  }
}

void main() {
  var shape = new Shape();
  
  // Check if the "draw" method exists in the Shape class
  if (shape?.hasOwnProperty('draw')) {
    shape.draw();
  }
}
```

In the example above, we have defined a `Shape` class with a `draw` method. Then, we have created an instance of the `Shape` class and checked if it has a `draw` method using the `hasOwnProperty` method. If the method exists, we call it using the object's instance. 

It is important to note that the `hasOwnProperty` method returns a boolean value, which is `true` if the object has the specified property, and `false` otherwise.