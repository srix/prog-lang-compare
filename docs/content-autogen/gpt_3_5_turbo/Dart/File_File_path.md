In Dart, to get the path of a file, we can use the `path` package. This package provides several methods to work with file paths.

Here's an example of how to get a file path in Dart:

```dart
import 'package:path/path.dart' as path;

void main() {
  // Absolute path
  String absPath = '/home/user/example/file.txt';
  
  // Relative path
  String relPath = 'example/file.txt';
  
  // Get the basename of the file
  String basename = path.basename(relPath);
  
  // Get the directory name of the file
  String dirname = path.dirname(relPath);
  
  // Join paths
  String newPath = path.join(dirname, basename);
  
  print('Absolute path: $absPath');
  print('Relative path: $relPath');
  print('Basename: $basename');
  print('Directory name: $dirname');
  print('New path: $newPath');
}
```

This will output:

```
Absolute path: /home/user/example/file.txt
Relative path: example/file.txt
Basename: file.txt
Directory name: example
New path: example/file.txt
```

In the example above, we first import the `path` package and create two variables `absPath` and `relPath` for the absolute and relative file paths, respectively. 

We then use the `path.basename()` method to get the basename (i.e., the file name with extension) of the file and the `path.dirname()` method to get the directory name of the file. 

We can join the directory name and basename using the `path.join()` method to get the full file path.

Finally, we print out the results for each variable using the `print()` method.