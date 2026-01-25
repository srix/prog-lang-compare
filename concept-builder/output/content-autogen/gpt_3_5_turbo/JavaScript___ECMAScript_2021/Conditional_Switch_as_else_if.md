In JavaScript, you can use the `switch` statement as an alternative to nested `if-else` statements. The `switch` statement evaluates an expression and executes the corresponding code block for the first matching `case` label. If there is no match for any `case` label, the `default` block is executed.

Here is the general syntax for a `switch` statement:

```
switch (expression) {
  case value1:
    // code block to execute
    break;
  case value2:
    // code block to execute
    break;
  ...
  default:
    // code block to execute if none of the cases are matched
}
```

Here is an example of using the `switch` statement to replace an `if-else` statement:

```
// using if-else statement
let num = 2;
if (num === 1) {
  console.log("One");
} else if (num === 2) {
  console.log("Two");
} else if (num === 3) {
  console.log("Three");
} else {
  console.log("Number not found");
}

// using switch statement
let num = 2;
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Number not found");
}
```

In the above example, both the `if-else` statement and the `switch` statement will produce the same output: "Two". However, the `switch` statement is more concise and easier to read for larger conditions.

Here is another example of using the `switch` statement to handle multiple cases for a single output:

```
let day = 5;
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}
```

In this example, the `switch` statement checks if the `day` variable is a weekday or weekend and outputs accordingly. The use of multiple cases for a single output makes the `switch` statement more efficient and avoids unnecessary repetition of code.