In Objective-C, we use if/else statements to make decisions about the code execution. If our decision is true, we execute the code under the if statement, otherwise, we execute the code under the else statement.

Here is an example of how to use if/else statements in Objective-C:

```
int number = 10;

if (number > 5) {
  NSLog(@"The number is greater than 5.");
} else {
  NSLog(@"The number is less than or equal to 5.");
}
```

In the code above, we first declare an integer variable called `number` and assign it the value of 10. We then use an if statement with a condition of `number > 5`. If this condition is true, we execute the code that is within the curly braces after the if statement, which is to print a message to the console saying that the number is greater than 5. If the condition is false, we execute the code within the curly braces after the else statement, which is to print a message to the console saying that the number is less than or equal to 5.

We can also use nested if-else statements to make more complex decisions. Here is an example:

```
int number1 = 4;
int number2 = 6;

if (number1 > 5) {
  if (number2 < 10) {
    NSLog(@"Both numbers meet the conditions.");
  } else {
    NSLog(@"Number2 does not meet the conditions.");
  }
} else {
  NSLog(@"Number1 does not meet the conditions.");
}
```

In this example, we have two integer variables, `number1` and `number2`. We use nested if-else statements to check two conditions: whether `number1` is greater than 5 and whether `number2` is less than 10. If both conditions are true, we print a message to the console saying that both numbers meet the conditions. If `number1` is greater than 5 but `number2` is not less than 10, we print a message saying that `number2` does not meet the conditions. If `number1` is not greater than 5, we print a message saying that `number1` does not meet the conditions.