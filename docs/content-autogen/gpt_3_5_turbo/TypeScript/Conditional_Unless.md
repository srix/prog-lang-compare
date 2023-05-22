In TypeScript, the "unless" keyword can be used as a variant of the traditional "if" statement. It evaluates the Boolean expression and only executes the body of the statement if the expression is false.

Here's an example of an unless statement in TypeScript:

```typescript
const value = 10;

unless(value > 5, () => {
    console.log("Value is not greater than 5");
});
```

In this example, the unless statement checks if the value variable is greater than 5. Since this condition is true, the console.log statement inside the unless block will not be executed.

You can create a unless function to make the code more readable:

```typescript
function unless(condition: boolean, callback: () => void) {
  if (!condition) {
    callback();
  }
}
```

Now you can use the "unless" function to check any condition and execute a callback function if the condition is false:

```typescript
const isLoggedIn = true;

unless(isLoggedIn, () => {
  console.log("Please log in to continue");
});
```

This code only executes the console.log statement if the user is not logged in.