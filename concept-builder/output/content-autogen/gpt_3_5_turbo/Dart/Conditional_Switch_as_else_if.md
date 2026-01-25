In Dart, the `switch` statement can be used as an alternative to `else if` statements. It can make the code cleaner and more readable as it compares a single value to multiple possible values and executes the corresponding code block.

Here is the syntax for switch statement:

```
switch (expression) {
  case value1:
    // code to be executed if expression = value1
    break;
  case value2:
    // code to be executed if expression = value2
    break;
    .
    .
    .
  case valueN:
    // code to be executed if expression = valueN
    break;
  default:
    // code to be executed if none of the cases match
}
```

Here's how you can use `switch` as `else if` in Dart:

```
void main() {
  int num = 2;
  switch (num) {
    case 1:
      print("One");
      break;
    case 2:
      print("Two");
      break;
    case 3:
      print("Three");
      break;
    default:
      print("Invalid number");
  }
}
```

In the example above, if the `num` is equal to 2, the program will print "Two". If the `num` is not equal to any of the cases, the program will print "Invalid number" because of the `default` case. 

You can add as many cases as you need, and the `default` is optional.