In Dart, you can throw an exception by using the `throw` keyword. You can use it to terminate the execution of the current function and pass control to an exception handler. Here are some examples of how to throw an exception in Dart:

Example 1: Throw a string exception
```dart
void validateAge(int age) {
  if (age <= 0) {
    throw "Age must be greater than 0";
  }
}

void main() {
  try {
    validateAge(-5);
  } catch (e) {
    print(e); // outputs: Age must be greater than 0
  }
}
```

Example 2: Throw a custom exception class
```dart
class CustomException implements Exception {
  String errorMessage() => "This is a custom exception";
}

void main() {
  try {
    throw CustomException();
  } catch (e) {
    print(e.errorMessage()); // outputs: This is a custom exception
  }
}
```

Example 3: Throw an exception with a predefined Dart class
```dart
void main() {
  try {
    int number = int.parse("xyz");
  } on FormatException catch (e) {
    print("Invalid number format"); // outputs: Invalid number format
  }
}
```

In these examples, we throw exceptions using the `throw` keyword and handle them using the `try` and `catch` blocks. You can also create custom exception classes to provide more specific information about the error that occurred.