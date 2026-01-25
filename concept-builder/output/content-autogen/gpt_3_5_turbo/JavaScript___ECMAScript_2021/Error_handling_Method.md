In JavaScript, try/catch/finally are used in a method to handle errors or exceptions that may occur during the execution of the code. The try block contains the code that may throw an exception and the catch block handles that exception. Finally block, on the other hand, is always executed, regardless of whether an exception is thrown or not. It is used to perform clean-up operations that are required, such as closing a file or releasing resources.

Here is an example of how to use try/catch/finally in a method in JavaScript:

```
function divide(a, b){
  try {
    if (b === 0){
      throw "Cannot divide by zero";
    }
    else{
      var result = a / b;
      console.log("Result: " + result);
    }
  }
  catch (error) {
    console.log("Error: " + error);
  }
  finally {
    console.log("End of division operation.");
  }
}
```

In the above example, the `divide` function takes two parameters `a` and `b` and performs a division operation. The try block checks if `b` is zero and throws an exception if it is. If `b` is not zero, it performs the division operation and prints the result to the console. If an exception is thrown, the catch block catches that exception and prints the error message to the console. Finally, the finally block is executed to print the message `End of division operation.` to the console.

We can call the `divide` function with different values to see how try/catch/finally works:

```
divide(10, 2);  // Result: 5
// End of division operation.

divide(5, 0);   // Error: Cannot divide by zero
// End of division operation.

divide(15, 3);  // Result: 5
// End of division operation.
```

In the above example, the first call `divide(10, 2)` produces the result `Result: 5`, as `a` is 10 and `b` is 2. The second call `divide(5, 0)` throws the exception `"Cannot divide by zero"` and the catch block catches that exception and prints the error message to the console. Finally, the `End of division operation.` message is printed in both cases, indicating the end of the operation.