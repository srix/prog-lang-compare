In Dart, you can initialize a method or function at runtime using closures. A closure is a function object that has access to variables in its lexical scope, even when the function is invoked outside that scope. Closures are often used to implement callbacks and event handlers.

Here's an example of defining a closure:

```dart
typedef MathFunction = int Function(int, int);

void main() {
  // Create a closure by defining a function inside another function
  MathFunction add = (int a, int b) {
    return a + b;
  };

  // Use the closure to add two numbers
  int result = add(3, 5);
  print(result); // Output: 8

  // You can also pass closures as arguments to other functions
  int compute(MathFunction operation, int a, int b) {
    return operation(a, b);
  }

  int sum = compute(add, 3, 5);
  print(sum); // Output: 8
}
```

In this example, we define a closure named `add` that takes two integers as parameters and returns their sum. We then use this closure to compute the sum of 3 and 5.

We also define a function named `compute` that takes a closure as its first argument, along with two integers. The function applies the closure to the integers and returns the result.

Using closures is a powerful and flexible way to initialize methods and functions at runtime in Dart.