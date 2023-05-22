In Dart, a `constant` is a variable whose value cannot be changed once it is assigned. Constants are useful when you want to ensure that a value never changes throughout the execution of your program. 

Here are some examples of how to use constants in Dart:

1. Declaring a constant integer:

```
const int num = 10;
```

Here, `num` is a constant integer whose value is `10`.

2. Declaring a constant string:

```
const String message = "Hello, world!";
```

Here, `message` is a constant string whose value is `"Hello, world!"`.

3. Using a constant in an expression:

```
const int a = 5;
const int b = 10;
const int result = a + b;

print(result); // Output: 15
```

Here, `a` and `b` are constants, and we use them in an expression to compute the value of `result`.

4. Using constants with classes:

```
class Circle {
  final double radius;
  const Circle(this.radius);
  
  double get area => 3.14 * radius * radius;
}

void main() {
  const c = Circle(2.5);
  print(c.area); // Output: 19.625
}
```

Here, we define a `Circle` class with a `radius` property that is marked as `final`. We also mark the constructor as `const`, which means that instances of `Circle` are immutable and can be used as constants. We create a constant `Circle` object `c` with a radius of `2.5`, and then use its `area` property to compute the area of the circle.