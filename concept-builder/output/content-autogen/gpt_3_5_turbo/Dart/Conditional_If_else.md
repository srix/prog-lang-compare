In Dart, if/else statements are used to create conditional logic, where the program can choose to take different courses depending on whether a certain condition is true or false.

The syntax for using if/else in Dart is as follows:

```dart
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```

Here is an example that demonstrates the use of if/else statements in Dart:

```dart
void main() {
  int num = 8;

  if (num % 2 == 0) {
    print('Even');
  } else {
    print('Odd');
  }
}
```

In this example, the program checks whether a given number is even or odd using the modulo operator (%). If the number is even (i.e., if the remainder is zero after dividing by 2), the program prints "Even." Otherwise, it prints "Odd."

You can also use "else if" statements to test for additional conditions if the first condition is false. Here is an example that demonstrates the use of "else if" statements in Dart:

```dart
void main() {
  int score = 80;

  if (score >= 90) {
    print('A');
  } else if (score >= 80) {
    print('B');
  } else if (score >= 70) {
    print('C');
  } else {
    print('D');
  }
}
```

In this example, the program checks the score of a student and prints the corresponding letter grade. If the score is greater than or equal to 90, the program prints "A." If it is between 80 and 89, it prints "B." If it is between 70 and 79, it prints "C." Otherwise, it prints "D."