Booleans in Dart are used to represent true or false values. They are a fundamental data type and are commonly used in conditional statements and loops.

Here are some examples of using boolean in Dart:

1. Assigning a boolean value:

```
bool isRaining = true;
```
In this example, we are declaring a boolean variable called `isRaining` and assigning a value of `true` to it.

2. Using a boolean in a conditional statement:
```
if (isRaining) {
  print('Please take an umbrella!');
} else {
  print('Enjoy the sunshine!');
}
```
In this example, we are using the `isRaining` variable in an if-else statement to print a message based on whether it is raining or not.

3. Logical operators with booleans:
```
bool isSunny = false;
bool isWarm = true;

if (isSunny && isWarm) {
  print('It is a beautiful day!');
}
```
In this example, we are using the `&&` (logical AND) operator to check if both `isSunny` and `isWarm` are true. If they are, we print a message saying it's a beautiful day.

4. Comparing two boolean values:
```
bool isSummer = true;
bool isWinter = false;

if (isSummer == !isWinter) {
  print('The seasons are not the same!');
}
```
In this example, we are using the `==` (equality) and `!` (logical NOT) operators to compare the values of `isSummer` and `isWinter`. If they are not the same, we print a message.

These are just a few examples of using boolean in Dart. Booleans are an important and useful data type in programming, and it's important for developers to understand how to use them effectively.