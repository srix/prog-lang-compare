In Dart, libraries allow you to reuse code across multiple files or projects. Here's how you can import libraries with examples:

1. Importing a core Dart library:

```dart
import 'dart:core'; // Importing the core library to use built-in functionality like List, Map, etc.
```

2. Importing a file from the same package:

```dart
import 'path/to/my_file.dart'; // Importing a file named my_file.dart from the same package.
```

3. Importing a file from a different package:

```dart
import 'package:some_package/some_file.dart'; // Importing a file named some_file.dart from a package named some_package.
```

4. Importing only specific elements from a file:

```dart
import 'path/to/other_file.dart' show Foo, Bar; // Importing only the classes Foo and Bar from the other_file.dart.
```

5. Importing everything except specific elements from a file:

```dart
import 'path/to/other_file.dart' hide Baz; // Importing everything from other_file.dart except the class Baz.
```