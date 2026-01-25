Sure, here's an explanation of how to use the `if` statement in TypeScript:

The `if` statement is used for conditional execution of code based on a condition. The general syntax for an `if` statement in TypeScript is as follows:

```typescript
if(condition) {
  // code to execute if the condition is true
}
```

Here, `condition` is any expression that can be evaluated to true or false. If the condition is true, then the code within the block `{}` will be executed. If the condition is false, then the code within the block will be skipped, and the program will continue to the next statement.

Here's an example to illustrate the use of `if` statement in TypeScript:

```typescript
let age: number = 17;

if(age >= 18) {
  console.log("You can vote in the election!");
} else {
  console.log("You can't vote in the election yet.");
}
```

In this example, we have defined a variable `age` and used an `if` statement to check whether the value of `age` is greater than or equal to 18. If the condition is true, then the first `console.log` statement is executed. Otherwise, the second `console.log` statement is executed.

I hope this helps! Let me know if you have any questions.