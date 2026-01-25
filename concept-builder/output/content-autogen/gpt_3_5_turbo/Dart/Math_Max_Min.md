In Dart, there are built-in methods to get the maximum and minimum of two numbers which are `max()` and `min()` respectively.

Example of finding the maximum of two number using `max()` method:

```
void main() {
  var num1 = 8;
  var num2 = 6;
  print('The maximum of num1 and num2 is: ${num1.max(num2)}');
}
```

Output:
```
The maximum of num1 and num2 is: 8
```

Example of finding the minimum of two numbers using `min()` method:

```
void main() {
  var num1 = 8;
  var num2 = 6;
  print('The minimum of num1 and num2 is: ${num1.min(num2)}');
}
```

Output:
```
The minimum of num1 and num2 is: 6
```

In these examples, `num1.max(num2)` returns the maximum value between the two numbers, and `num1.min(num2)` returns the minimum value between them.