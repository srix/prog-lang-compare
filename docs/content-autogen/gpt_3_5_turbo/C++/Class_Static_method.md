In C++, a static method is a method that belongs to the class rather than an instance of the class. It can be called without creating any object of the class. 

Here's how to define a static method in a class in C++:

```c++
class MyClass {
public:
  static void myStaticMethod() {
    cout << "I am a static method!" << endl;
  }
};
```

In this example, the static method `myStaticMethod()` is defined with the `static` keyword. It can be called using the class name, not an instance of the class:

```c++
MyClass::myStaticMethod(); // Output: I am a static method!
```

Another example could be a static method that returns a value:

```c++
class Circle {
private:
  static double PI;
public:
  static double calculateArea(double radius) {
    return PI * radius * radius;
  }
};

double Circle::PI = 3.14159;

int main() {
  double area = Circle::calculateArea(4.0);
  cout << "Area of the circle: " << area << endl;
  return 0;
}

// Output: Area of the circle: 50.2654
```

In this example, the static method `calculateArea()` calculates the area of a circle and returns the result. The static variable `PI` is also defined inside the class and used in the calculation. The method is called using the class name, and the return value is stored in a variable. 

I hope this helps you understand how to define static methods in C++.