In Dart, you can get the path of a sibling directory using the `join()` function from the `path` package. The `join()` function takes in the paths and joins them to form a new path.

Here's an example of how to get the path of a sibling directory:

```dart
import 'package:path/path.dart' as p;

void main() {
  // The current directory
  final currentDir = p.current;

  // Get the parent directory path
  final parentDir = p.dirname(currentDir);

  // Get the path of the sibling directory
  final siblingDir = p.join(parentDir, 'siblingDir');

  print(siblingDir);
}
```

In this example, we first get the current directory path using the `current` static method of the `path` package. Next, we get the parent directory path by passing the current directory path to the `dirname()` function.

Finally, we get the path of the sibling directory by joining the parent directory path with the name of the sibling directory using the `join()` function.

Note that in this example, we assume that the sibling directory is located in the same directory as the parent directory. If the sibling directory is located in a different directory, you will need to adjust the path passed to the `join()` function accordingly.