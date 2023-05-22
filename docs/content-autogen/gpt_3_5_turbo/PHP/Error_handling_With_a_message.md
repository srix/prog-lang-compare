Try/catch/finally is a structured way of handling exceptions (errors) in PHP. When you use this construction, you try to execute a block of code that you think might throw an exception. If an exception is thrown, the exception gets caught and handled in a catch block. You can also include a finally block which will execute no matter what happens: regardless of whether an exception is thrown or not.

Here's a simple example:

```
try {
   // some code that might throw an exception
   $result = 10 / 0; // divide by zero to trigger an exception
} catch (Exception $e) {
   // the exception handler
   echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
   // this code is executed no matter what
   echo "Finally block always run";
}
```

In this example, we are trying to divide 10 by 0, which would trigger a DivisionByZeroError exception. The catch block catches this exception and handles it appropriately, printing a message to the screen. The finally block is always executed, even if an exception is thrown.

You can add a custom message to the exception by changing the message passed to the Exception constructor in the catch block. Here’s an example:

```
try {
  if(strlen("Hello") > 4) {
    throw new Exception("String length is greater than 4.");
  }
} catch (Exception $e) {
  echo "Caught exception: ", $e->getMessage();
} finally {
  echo "Finally block always runs";
}
```

In this example, we are checking the length of a string to see if it is greater than 4. If it is, we throw an exception with a custom message. When the exception is caught, the custom message is printed to the screen.