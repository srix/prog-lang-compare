In Dart, try/catch/finally is used to handle exceptions and errors that may occur during the execution of a code. The 'try' block is used to enclose the code that may cause an exception. If an exception occurs, it's caught by the 'catch' block, and the programmer can decide what to do with the exception. The 'finally' block is optional and is executed regardless of the occurrence of an exception.

Here's an example of how to use try/catch/finally in a method in Dart:

```dart
int divideNumbers(int x, int y) {
  try {
    return x ~/ y; // division operation
  } catch (e) {
    print("Exception caught: $e");
    return 0;
  } finally {
    print("Finally block executed.");
  }
}

void main() {
  print(divideNumbers(9, 3));
  print(divideNumbers(9, 0));
}
```

In the above example, the `divideNumbers()` method takes two integer parameters and tries to divide them using the `~/` operator. If a division by zero occurs, an exception is thrown, and it's caught by the 'catch' block, which prints the exception message and returns zero. The 'finally' block is executed regardless of the occurrence of an exception.

When we execute `main()`, the `divideNumbers()` method is called twice. The first call divides 9 by 3, which is successful, and the output is "3". The second call divides 9 by 0, which causes a `IntegerDivisionByZeroException` to be thrown. It is then caught by the 'catch' block, which prints "Exception caught: IntegerDivisionByZeroException" and returns zero. The 'finally' block is executed for both calls and prints "Finally block executed." after the appropriate output for each call.