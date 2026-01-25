In Dart, we can get the current working directory using the `Directory` class from the `dart:io` library. There are different ways to get the directory path in Dart, which are:

1. Getting the current directory path:

```dart
import 'dart:io';

void main() {
  String currentDirPath = Directory.current.path;
  print('Current Directory: ${currentDirPath}');
}
```

Output:
```
Current Directory: /path/to/current/dir
```

2. Getting the directory path from a file path:

```dart
import 'dart:io';

void main() {
  String filePath = '/path/to/example.txt';
  String dirPath = Directory(filePath).path;
  print('Directory Path: ${dirPath}');
}
```

Output:
```
Directory Path: /path/to
```

3. Getting a specific subdirectory path:

```dart
import 'dart:io';

void main() {
  String parentDirPath = '/path/to/parent';
  String subDirName = 'child';
  String subDirPath = Directory('${parentDirPath}/${subDirName}').path;
  print('Subdirectory Path: ${subDirPath}');
}
```

Output:
```
Subdirectory Path: /path/to/parent/child
```

Note: The `Directory` constructor also accepts a URI string as an argument.