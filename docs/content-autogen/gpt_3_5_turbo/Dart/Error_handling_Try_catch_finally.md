try/catch/finally block is used in Dart to handle errors and exceptions that occur in code. The try block is used to enclose the code that may cause an exception, while the catch block is used to catch and handle the exception. The finally block is executed irrespective of whether an exception is thrown or not.

Here's an example of how to use try/catch/finally in Dart:

```dart
void main() {
  try {
    var result = 10 ~/ 0; // causes an exception
    print(result);
  } catch (e) {
    print('Error: $e'); // handles the exception
  } finally {
    print('Code executed'); // always executed
  }
}
```

In the above code, the `~/` operator is used to divide 10 by 0, which causes an exception. The try block contains this code that may cause the exception. The catch block handles the exception and prints the error message. The finally block always executes, regardless of whether an exception was thrown or not, and prints the message.

Here's another example, where we are using specific types of exceptions in the catch block:

```dart
void main() {
  try {
    var list = <int>[1, 2, 3];
    print(list[4]); // trying to access an element that doesn't exist
  } on RangeError catch (e) {
    print('Range Error: $e'); // handles the RangeError
  } on Exception catch (e) {
    print('Exception: $e'); // handles all other exceptions
  } finally {
    print('Code executed'); // always executed
  }
}
```

In this example, we are trying to access an element that doesn't exist in the list, which causes a RangeError. The `on` keyword is used in the catch block to specify the type of exception to be caught. The first catch block handles the RangeError, while the second catch block handles any other exceptions. The finally block executes irrespective of the type of exception thrown.