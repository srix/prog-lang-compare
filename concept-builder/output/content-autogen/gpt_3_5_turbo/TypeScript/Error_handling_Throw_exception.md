In TypeScript, you can throw an exception using the `throw` keyword, followed by an expression that evaluates to an error object. Here is an example:

```
function divide(x: number, y: number): number {
  if (y === 0) {
    throw new Error('Cannot divide by zero');
  }

  return x / y;
}

try {
  divide(10, 0);
} catch (e) {
  console.log(e.message); // prints "Cannot divide by zero"
}
```

In this example, the `divide` function throws an exception if the second argument (`y`) is zero. The `throw` statement creates a new `Error` object with the message "Cannot divide by zero", which is then caught by the `catch` block and printed to the console.

You can also create your own custom error classes by extending the `Error` class:

```
class MyError extends Error {}

function doSomething(): never {
  throw new MyError('Something went wrong');
}

try {
  doSomething();
} catch (e) {
  console.log(e instanceof MyError); // prints "true"
}
```

In this example, we define a new `MyError` class that extends the built-in `Error` class. The `doSomething` function throws an instance of this class, which is caught in the `catch` block and checked to see if it is an instance of `MyError`.