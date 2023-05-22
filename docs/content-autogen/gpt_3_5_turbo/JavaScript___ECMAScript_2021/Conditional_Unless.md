In JavaScript - ECMAScript 2021, `unless` is not a valid keyword or operator. However, you can achieve a similar logic using an `if` statement with a negated condition. The `if` statement will execute its code block only when the condition is false.

Here's an example of using `unless` logic with an `if` statement:

```javascript
let x = 10;

if (!(x > 20)) {
  console.log("x is not greater than 20");
}
```

In this example, the code inside the `if` statement block will execute only if `x` is not greater than 20. Therefore, the statement "x is not greater than 20" will be logged to the console.

Another example:

```javascript
let y = 5;

if (!(y === 10)) {
  console.log("y is not equal to 10");
}
```

In this example, the code inside the `if` statement block will execute only if `y` is not equal to 10. Therefore, the statement "y is not equal to 10" will be logged to the console.

In both cases, the `if` statement is used with a negated condition, which is equivalent to using `unless`. This logic can be useful for simplifying code and avoiding nested if-else statements.