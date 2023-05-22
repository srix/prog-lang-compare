In Dart, you can use the `Directory.current` to get the current working directory path.

Here is an example:

```dart
import 'dart:io';

void main() {
  var currentDir = Directory.current;
  print('Current working directory: ${currentDir.path}');
}
```

This code imports the `dart:io` library and uses the `Directory.current` property to get the current working directory path. It then prints the path to the console.

Running this program will output the following:

```
Current working directory: /path/to/working/directory
```

Note that the `Directory.current` property returns a `Directory` object, which has a `path` property that holds the actual current working directory path.