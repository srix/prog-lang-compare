In TypeScript, you can check if a value is null or a boolean value (true/false) using conditional statements such as if statements or ternary operators.

Here is an example of checking if a variable is null:

```typescript
let variable: string | null = null;

if (variable === null) {
  console.log("Variable is null");
} else {
  console.log(`Variable value is ${variable}`);
}
```

In this example, we declare a variable `variable` with a type of `string | null` which means it can contain either a string or a null value. We then use an if statement to check if the value of the variable is equal to null. If it is, the code inside the if block is executed, and if not, the code inside the else block is executed.

Now, let's look at an example of checking for boolean values:

```typescript
const isTruthy = true;

if (isTruthy) {
  console.log("Value is truthy.");
} else {
  console.log("Value is falsy.");
}
```

In this example, we declare a constant `isTruthy` with a value of `true`. We then use an if statement to check if the value is truthy (i.e., not null, undefined, 0, false, or an empty string). If it is, the code inside the if block is executed, and if not, the code inside the else block is executed.

You can also use a ternary operator to check for boolean values:

```typescript
const isTruthy = true;
const result = isTruthy ? "Value is truthy." : "Value is falsy.";
console.log(result);
```

In this example, we declare a constant `isTruthy` with a value of `true`. We then use a ternary operator to check if the value is truthy and assign the appropriate string to the `result` variable. We then log the value of `result` to the console.