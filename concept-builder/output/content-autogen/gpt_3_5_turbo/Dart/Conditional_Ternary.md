In Dart, the ternary operator is a condensed way of writing a simple if-else statement in a single line. It has the following syntax:

```
(condition) ? expression1 : expression2;
```

If the condition is true, expression1 is evaluated, otherwise expression2 is evaluated.

Here are some examples to illustrate how to use the ternary operator in Dart:

```dart
// Example 1:
// A simple ternary operator
int a = 10;
int b = 5;
int max = (a > b) ? a : b;
print(max);  // Output: 10

// Example 2:
// Using the ternary operator to return a value
bool isEven(int num) => (num % 2 == 0) ? true : false;
print(isEven(4));   // Output: true
print(isEven(5));   // Output: false

// Example 3:
// Chained ternary operators
int c = 2;
int result = (c == 1) ? 10 : (c == 2) ? 20 : 30;
print(result);  // Output: 20
``` 

In example 1, we use the ternary operator to find the maximum of two numbers.

In example 2, we use the ternary operator to check if a number is even or odd and return a boolean value.

In example 3, we use nested ternary operators to set the value of result based on the value of c.