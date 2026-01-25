In Dart, you can import code from another file using the `import` keyword. Here is an example:

```dart
// file1.dart
void printMessage() {
  print('Hello, World!');
}
```

```dart
// main.dart
import 'file1.dart';

void main() {
  printMessage();
}
```

In this example, we have two Dart files. The first file, `file1.dart`, defines a function `printMessage()` that prints a message to the console. The `main.dart` file imports the `file1.dart` file using the `import` keyword and calls the `printMessage()` function.

Note that when importing a file, you can either specify a relative or an absolute path. In the example above, we specified a relative path to import `file1.dart`. 

You can also use the `show` and `hide` keywords to control which specific parts of the imported file you want to use. Here is an example:

```dart
// file2.dart
void printMessage() {
  print('Hello, World!');
}

void printName() {
  print('My name is Dart!');
}
```

```dart
// main.dart
import 'file2.dart' hide printMessage;

void main() {
  printName(); // calls the printName() function from file2.dart
  printMessage(); // Error: printMessage is not defined
}
```

In this example, the `main.dart` file imports the `file2.dart` file and uses the `hide` keyword to exclude the `printMessage()` function from being imported. This means that the `printName()` function from `file2.dart` can be called, but the `printMessage()` function cannot be called from the imported file.