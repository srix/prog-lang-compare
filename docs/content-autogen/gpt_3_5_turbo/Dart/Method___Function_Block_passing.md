In Dart, block passing refers to passing a block of code as a parameter to a function or method. There are two main ways to use block passing in Dart:

1. Anonymous functions as parameters:
An anonymous function is a function without a name, and it can be used as a parameter to another function. The syntax for using an anonymous function is:

```
functionName((parameters) {
  // block of code
});
```

For example:

```
void main() {
  var myList = [1, 2, 3, 4, 5];
  var doubled = myList.map((number) => number * 2);
  print(doubled);  // output: (2, 4, 6, 8, 10)
}
```

In the above example, we are passing an anonymous function to the `map()` method of the `myList` object. The anonymous function takes a parameter `number` and returns the doubled value of the number.

2. Function literals:
Function literals are a shorthand way of writing anonymous functions, and they can also be used as parameters to other functions. The syntax for using a function literal is:

```
functionName((parameters) => expression);
```

For example:

```
void main() {
  var myList = [5, 10, 15, 20];
  var total = myList.fold(0, (sum, number) => sum + number);
  print(total);  // output: 50
}
```

In the above example, we are passing a function literal to the `fold()` method of `myList`. The function literal takes two parameters `sum` and `number`, and returns their sum. The `fold()` method uses this function to calculate the total sum of the elements in `myList`.

In summary, block passing in Dart gives us the flexibility to pass blocks of code as parameters to functions and methods, allowing us to write more concise and expressive code.