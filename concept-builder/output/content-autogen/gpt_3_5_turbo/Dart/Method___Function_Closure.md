In Dart, a closure is a function object that can access variables in its lexical scope. It can be used to create functions with a persistent variable state, to pass functions as arguments to other functions, or to return functions from functions.

Here is an example of closure in Dart:

```dart
Function counter() {
  int count = 0;
  return () {
    count++;
    print(count);
  };
}

void main() {
  var c = counter();
  c(); // prints 1
  c(); // prints 2
  c(); // prints 3
}
```

In the above example, the `counter()` function returns an inner anonymous function that can access the `count` variable in the outer scope. Each time the returned function is called, the value of `count` is incremented and printed.

Here is another example that demonstrates how closure can be used to create a function with a persistent variable state:

```dart
Function add(int x) {
  return (int y) => x + y;
}

void main() {
  var add5 = add(5);
  var add10 = add(10);
  print(add5(3)); // prints 8
  print(add10(3)); // prints 13
}
```

In this example, the `add()` function returns a nested function that adds the given argument to a persistent variable `x`. The `add5` and `add10` variables hold function objects that have a different value for `x`, i.e., 5 and 10 respectively. When these functions are called with an argument, they add the argument to the respective value of `x`.

In summary, closure in Dart is a powerful feature that enables the creation of function objects with a persistent state and the ability to access variables in their lexical scope.