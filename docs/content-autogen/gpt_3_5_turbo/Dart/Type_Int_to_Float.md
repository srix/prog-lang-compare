To convert an integer to a float in Dart, you can simply use the built-in 'toDouble()' method. Here's an example:

```dart
void main() {
  int num = 10;
  double floatNum = num.toDouble();
  print(floatNum);
}
```

In this example, we create a variable 'num' with an integer value of 10. We then create a new variable 'floatNum' and use the 'toDouble()' method to convert 'num' to a float. Finally, we print out the value of 'floatNum' to the console, which should give us the value '10.0'.

You can also convert an integer to a float when declaring the variable, like this:

```dart
void main() {
  int num = 10;
  double floatNum = 7/num;
  print(floatNum);
}
```

In this example, we declare a variable 'floatNum' as a double and assign it the result of the operation '7/num', which is a float. This is another way of converting an integer to a float in Dart.

I hope that helps!