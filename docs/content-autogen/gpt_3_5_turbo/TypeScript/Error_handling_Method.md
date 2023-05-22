In TypeScript, the `try/catch/finally` block is used to handle errors in a method. Here is an example of how to use it:

```typescript
function divideNumbers(num1: number, num2: number): number {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Division operation complete.");
  }
}
```

In the above example, the `try` block contains the code that can potentially throw an error. Here, if `num2` is equal to `0`, a new `Error` object is created with the message "Cannot divide by zero!" and thrown. 

The `catch` block contains the code that handles the error. In this case, it simply logs the error message to the console.

The `finally` block is executed after the `try` and `catch` blocks, regardless of whether an error was thrown or not. Here it logs a message indicating that the division operation is complete.

You can call the `divideNumbers` function like this:

```typescript
console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(10, 0)); // Error: Cannot divide by zero!
                                    // Division operation complete.
```

In the first example, the function returns `5`, as expected. In the second example, an error is thrown, and the error message "Cannot divide by zero!" is logged to the console, followed by the message "Division operation complete.".