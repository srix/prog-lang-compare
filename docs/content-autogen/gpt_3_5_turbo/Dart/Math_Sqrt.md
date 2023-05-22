In Dart, we can use the `sqrt()` function from the `dart:math` library to get the square root of a number. 

Here is an example:

```dart
import 'dart:math';

void main() {
  double number = 25;
  double result = sqrt(number);
  print('The square root of $number is $result');
}
```

The above code will output:

```
The square root of 25.0 is 5.0
```

Note that the `sqrt()` function returns a `double` value. If the input number is negative, the function will return NaN (Not a Number).