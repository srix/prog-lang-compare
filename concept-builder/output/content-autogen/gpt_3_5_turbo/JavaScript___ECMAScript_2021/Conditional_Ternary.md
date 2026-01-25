The ternary operator is a shorthand way of writing an if-else statement in JavaScript. It takes three operands:

condition ? expression1 : expression2

If the condition is true, the operator returns expression1. If the condition is false, it returns expression2.

Example:

```
const num = 5;
const message = num > 10 ? "Greater than 10" : "Less than or equal to 10";
console.log(message); // Output: "Less than or equal to 10"
```

In this example, num is assigned a value of 5. The ternary operator checks if num is greater than 10. Since it's not, the operator returns the second expression, "Less than or equal to 10", which is then assigned to the message variable.

Another example:

```
const isLoggedIn = true;
const greeting = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(greeting); // Output: "Welcome back!"
```

In this example, the ternary operator checks whether the isLoggedIn variable is true or false. Since it's true, it returns the first expression, "Welcome back!", which is assigned to the greeting variable.

Ternary operators can be nested as well. Here's an example:

```
const age = 16;
const message = age >= 18
  ? "You are eligible to vote"
  : age >= 16
    ? "You are almost eligible to vote"
    : "You are not eligible to vote yet";
console.log(message); // Output: "You are almost eligible to vote"
```

In this example, the ternary operator checks whether age is greater than or equal to 18. If it is, it returns the first expression. If it's not, it moves on to the next ternary operator to check if age is greater than or equal to 16. If it is, it returns the second expression. If it's not, it returns the third expression.