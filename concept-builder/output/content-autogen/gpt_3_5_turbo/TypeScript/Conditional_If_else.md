In TypeScript, if/else is used to perform conditional execution of code. The syntax for if/else statements in TypeScript is very similar to that of other programming languages like JavaScript and Java.

Here is an example of how to use if/else statement in TypeScript:

```
let num1: number = 10;
let num2: number = 20;

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("num2 is greater than num1");
}
```

In this example, if `num1` is greater than `num2`, the message "num1 is greater than num2" will be displayed in the console. Otherwise, the message "num2 is greater than num1" will be displayed.

You can also use other logical operators in the if statement, such as `&&` (AND), `||` (OR), and `!` (NOT), to create more complex conditional statements. Here is an example:

```
let age: number = 18;
let hasLicense: boolean = true;

if (age >= 18 && hasLicense == true) {
    console.log("You are legally allowed to drive");
} else {
    console.log("You are not legally allowed to drive");
}
```

In this example, if the age is greater than or equal to 18 and the `hasLicense` variable is `true`, then the message "You are legally allowed to drive" will be displayed. Otherwise, the message "You are not legally allowed to drive" will be displayed.