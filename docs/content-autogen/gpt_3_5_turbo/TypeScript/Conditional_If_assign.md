In TypeScript, the `if` statement is used to make decisions based on certain conditions. The `if` statement is followed by a Boolean expression that evaluates to either `true` or `false`. If the expression is `true`, the code inside the curly braces `{}` is executed, else it is skipped.

The `if` statement can also be combined with the `else` statement to execute different code blocks based on the condition. The `else if` statement can also be used to handle multiple conditions.

Here is an example of how to use if-else statement in TypeScript:

```
let age: number = 18;

if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("Sorry, you are not eligible to vote!");
}
```

In this example, the `if` statement checks if the `age` variable is greater than or equal to 18. If it is true, then the message "You are eligible to vote!" is displayed. Otherwise, the message "Sorry, you are not eligible to vote!" is displayed.

The `if` statement can also be combined with the assignment operator to assign a value based on a condition. This is known as ternary operator.

Here is an example of how to use ternary operator in TypeScript:

```
let age: number = 18;
let message: string = "";

message = (age >= 18) ? "You are eligible to vote!" : "Sorry, you are not eligible to vote!";

console.log(message);
```

In this example, the ternary operator checks if the `age` variable is greater than or equal to 18. If it is true, then the message "You are eligible to vote!" is assigned to the `message` variable. Otherwise, the message "Sorry, you are not eligible to vote!" is assigned to the `message` variable. Finally, the `message` variable is displayed using the `console.log()` statement.