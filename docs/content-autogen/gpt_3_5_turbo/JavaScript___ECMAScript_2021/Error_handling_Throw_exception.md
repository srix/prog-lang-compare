In JavaScript - ECMAScript 2021, we use the `throw` statement to throw an exception. Here's an example:

```
function divideByZero(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

console.log(divideByZero(10, 0)); // Throws "Cannot divide by zero" error
```

In this example, we define a function `divideByZero` that takes two arguments `num1` and `num2`. We check if `num2` is equal to zero, and if it is, we throw a new `Error` object with the message "Cannot divide by zero". If `num2` is not equal to zero, we return the result of dividing `num1` by `num2`.

Here's another example that demonstrates how to throw a custom exception:

```
class CustomException extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomException";
  }
}

function doSomething() {
  throw new CustomException("Something went wrong");
}

try {
  doSomething();
} catch (e) {
  console.error(e.name + ": " + e.message);
}
```

In this example, we define a custom exception `CustomException` that extends the built-in `Error` class. We define a `constructor` method that takes a `message` parameter and calls the `super` method to set the `message` property of the `Error` object. We also set the `name` property of the `CustomException` object to "CustomException".

We define a function `doSomething` that throws a new `CustomException` object with the message "Something went wrong".

We then use a `try`/`catch` block to catch the exception thrown by `doSomething`, and we log the name and message properties of the caught exception to the console.

These are some examples of how to throw exceptions in JavaScript - ECMAScript 2021.