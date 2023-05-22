The `switch` statement in Objective-C is used to evaluate an expression and perform different actions based on the value of the expression. The syntax of the switch statement is as follows:

```
switch(expression) {
    case constant1:
        // code to execute if expression is equal to constant1
        break;
    case constant2:
        // code to execute if expression is equal to constant2
        break;
    default:
        // code to execute if expression doesn't match any constants
        break;
}
```

The `expression` is usually a variable or a value that we want to compare against a set of constant values. The `case` statements specify the possible values that the expression may have and the code to execute if the expression matches that value. The `break` statement is used to terminate the case and exit the switch statement. The `default` statement is optional and specifies the code to execute if the expression doesn't match any of the specified constants.

Here is an example of a switch statement that evaluates the value of a variable `grade` and performs different actions based on the value:

```
NSString *grade = @"B";

switch(grade) {
    case @"A":
        NSLog(@"Excellent!");
        break;
    case @"B":
        NSLog(@"Good!");
        break;
    case @"C":
        NSLog(@"Fair!");
        break;
    case @"D":
        NSLog(@"Needs Improvement!");
        break;
    default:
        NSLog(@"Invalid Grade!");
        break;
}
```

In this example, if the variable `grade` has a value of "B", the switch statement will execute the code under the second `case` statement, which is to print "Good!" to the console. If the variable `grade` has a value of "X", which doesn't match any constants in the `case` statements, the switch statement will execute the code under the `default` statement, which is to print "Invalid Grade!".