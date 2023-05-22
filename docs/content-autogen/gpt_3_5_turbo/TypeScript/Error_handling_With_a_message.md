In TypeScript, you can use try/catch/finally blocks to handle errors that may occur in your code. Here is an example of how to use try/catch/finally with an error message:

```typescript
try {
  // Your code here
} catch (error) {
  console.error(`Error occurred: ${error}`);
} finally {
  console.log('This code will always execute');
}
```

In the above example, the `try` block contains the code that may throw an error. If an error is thrown, the `catch` block is executed and logs an error message to the console. The `finally` block will be executed no matter what, regardless of whether an error was thrown or not.

Here is another example that demonstrates how to use try/catch/finally with a custom error message:

```typescript
try {
  const username = getUsername();
  const password = getPassword();
  // Your code here
} catch (error) {
  console.error(`Error occurred while processing request. Details: ${error}`);
} finally {
  console.log('Request processed.')
}
```

In this example, a `getUsername()` function is called, which may throw an error if the function fails to retrieve the username. Similarly, a `getPassword()` function is called, which may also throw an error. If any errors occur, the `catch` block is executed and logs a custom error message to the console. The `finally` block logs a message indicating that the request has been processed, regardless of whether an error occurred or not.