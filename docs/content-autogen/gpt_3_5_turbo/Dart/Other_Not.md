In Dart, the "!" symbol is used to negate a boolean expression. This means that if a boolean value is true, using "!" before it will reverse its value to false, and vice versa.

Here are some examples of using "not" in Dart:

```dart
bool isSunny = true;
print(!isSunny); // Outputs false - the opposite of true

bool hasCookies = false;
print(!hasCookies); // Outputs true - the opposite of false
```

You can also use "not" with comparison operators, like the following:

```dart
int number = 10;
print(number != 5); // Outputs true - 10 is not equal to 5
```

In this case, "!=" means "not equal to", so the expression is true because "number" is indeed not equal to 5.