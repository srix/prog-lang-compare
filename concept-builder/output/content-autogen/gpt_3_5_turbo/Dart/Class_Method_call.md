In Dart, you can call a method in a class by creating an object of that class and using that object to call the method.

Here's an example of a simple class with a method:

```dart
class Rectangle {
  int width;
  int height;
  
  Rectangle(this.width, this.height);
  
  int calculateArea() {
    return width * height;
  }
}
```

To call the `calculateArea()` method of this class, you first need to create an object of the `Rectangle` class:

```dart
Rectangle myRectangle = Rectangle(5, 3);
```

This creates a new instance of the `Rectangle` class and sets the `width` to 5 and the `height` to 3.

Now you can call the `calculateArea()` method using the object you just created:

```dart
int area = myRectangle.calculateArea();
```

This will call the `calculateArea()` method on the `myRectangle` object and return the area (which in this case is 15). 

You can also call the method directly on the object using the dot notation:

```dart
int area = myRectangle.calculateArea;
```

Both of these methods will give you the same result.