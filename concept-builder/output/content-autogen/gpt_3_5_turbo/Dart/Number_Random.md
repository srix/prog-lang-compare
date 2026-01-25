In Dart, you can generate random numbers using the `dart:math` library. The `Random()` method creates a `Random` object that you can use to generate random numbers.

Here is an example:

```dart
import 'dart:math';

void main() {
  var random = new Random();
  
  // generating a random integer
  int randomInt = random.nextInt(10);
  print('Random integer between 0 and 9: $randomInt');
  
  // generating a random double
  double randomDouble = random.nextDouble();
  print('Random double between 0.0 and 1.0: $randomDouble');
}
```

In this example, `random.nextInt(10)` generates a random integer between `0` and `9` (inclusive). `random.nextDouble()` generates a random double between `0.0` and `1.0` (exclusive).

You can also generate a random number within a specific range. Here is an example that generates a random integer between `1` and `100`:

```dart
import 'dart:math';

void main() {
  var random = new Random();
  
  int min = 1;
  int max = 100;
  // generating a random integer between 1 and 100
  int randomNumber = min + random.nextInt(max - min);
  print('Random number between $min and $max: $randomNumber');
}
```

In this example, `randomNumber` will have a value between `1` and `100` (inclusive).