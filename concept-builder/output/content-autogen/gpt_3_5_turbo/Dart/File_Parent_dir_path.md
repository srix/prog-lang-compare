In Dart, you can get the parent directory path by using the 'parent' property provided by the 'Directory' class. Here is an example code snippet to demonstrate how to get the parent directory path in Dart:

```dart
import 'dart:io';

void main() {
  // Getting the current directory path
  String currentDirPath = Directory.current.path;
  print("Current directory: $currentDirPath");

  // Getting the parent directory path
  String parentDirPath = Directory.current.parent.path;
  print("Parent directory: $parentDirPath");
}
```

The above example code retrieves the current directory path using the 'current' property of the 'Directory' class. Then, it retrieves the parent directory path using the 'parent' property and prints both directory paths to the console.

Output:
```
Current directory: /Users/username/Code/dart-project
Parent directory: /Users/username/Code
```

In this example, the 'parentDirPath' variable holds the parent directory path of the current working directory.