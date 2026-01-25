In Objective-C, we can use a switch statement as an alternative to multiple if-else statements. A typical switch statement has the following syntax:

```
switch(expression) {
    case constant1:
        statement1;
        break;
    case constant2:
        statement2;
        break;
    ...
    default:
        statementN;
}
```

Here, the `expression` is evaluated and the value is compared to each `case` constant. If a match is found, the corresponding `statement` is executed. If no match is found, the `default` statement is executed.

We can use a switch statement in place of multiple if-else statements in the following way:

```
// Using if-else statements
if (value == constant1) {
    statement1;
} else if (value == constant2) {
    statement2;
} else if (value == constant3) {
    statement3;
} else {
    statementN;
}

// Using a switch statement
switch(value) {
    case constant1:
        statement1;
        break;
    case constant2:
        statement2;
        break;
    case constant3:
        statement3;
        break;
    default:
        statementN;
}
```

Note that both if-else statements and switch statements accomplish the same task. However, switch statements can make the code more readable and easier to maintain, especially when there are many different possible conditions to test. 

Here's an example that illustrates how a switch statement can be used to handle multiple cases in Objective-C:

```
// Define the variable
int day = 2;

// Display the day of the week
switch(day) {
    case 1:
        NSLog(@"Monday");
        break;
    case 2:
        NSLog(@"Tuesday");
        break;
    case 3:
        NSLog(@"Wednesday");
        break;
    case 4:
        NSLog(@"Thursday");
        break;
    case 5:
        NSLog(@"Friday");
        break;
    case 6:
        NSLog(@"Saturday");
        break;
    case 7:
        NSLog(@"Sunday");
        break;
    default:
        NSLog(@"Invalid day number");
}
```

In this example, the switch statement takes an integer value representing the day of the week, and displays the name of the corresponding day. If the value is not between 1 and 7, the statement under the `default` clause is executed to display an error message.