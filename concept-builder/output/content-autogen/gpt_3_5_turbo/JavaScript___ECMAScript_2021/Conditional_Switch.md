The `switch` statement is a control flow statement in JavaScript that evaluates an expression and compares it to multiple cases. It then executes the code associated with the first case that matches the expression. Here is the general syntax:

```
switch (expression) {
  case value1:
    // execute code
    break;
  case value2:
    // execute code
    break;
  default:
    // execute code if no case matches
}
```

The `expression` can be any value or variable, while the `case` statements represent the various conditions that the `expression` may match. The `break` keyword is used to exit the `switch` statement after the code blocks for a particular `case` have been executed. If none of the `case` statements match the `expression`, the `default` code block is executed.

Here's an example to demonstrate the usage of `switch` statement:

```
let day = prompt("Enter a day of the week (e.g. Monday, Tuesday):");

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("That's not a valid day.");
}
```

In this example, the user is prompted to enter a day of the week. The `switch` statement then checks the `day` variable against the various cases. If the `day` is a weekday, the first code block is executed; if the `day` is a weekend day, the second code block is executed; and if the `day` is not a valid input, the default code block is executed.