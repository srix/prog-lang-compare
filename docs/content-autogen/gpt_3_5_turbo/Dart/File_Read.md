In Dart, we can read a file using the `dart:io` library, which provides a `File` class. We can create an instance of this class by specifying the file path and then read the contents using the `readAsString` method.

Here's an example:

```dart
import 'dart:io';

void main() async {
  final file = File('example.txt');
  final content = await file.readAsString();
  print(content);
}
```

In this example, we're first creating an instance of the `File` class and passing in the relative path of the file we want to read (`example.txt`). Then, we're using the `readAsString` method to read the contents of the file as a string. Finally, we're printing the contents to the console.

If you need to read a binary file, you can use the `readAsBytes` method instead of `readAsString`.

```dart
import 'dart:io';

void main() async {
  final file = File('example.bin');
  final content = await file.readAsBytes();
  print(content);
}
```

This will read the contents of the `example.bin` file as raw bytes and print them to the console. 

It's important to note that reading a file is an asynchronous operation in Dart, so the `readAsString` or `readAsBytes` methods return a `Future` that needs to be awaited.