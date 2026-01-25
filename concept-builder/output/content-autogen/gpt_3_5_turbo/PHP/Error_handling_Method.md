In PHP, `try-catch-finally` blocks can be used to handle exceptions thrown by a method or block of code. The `try` block contains the code to be executed where an exception may occur. The `catch` block is used to catch the exception and provide a message to the user. The `finally` block is used to execute code that needs to be executed whether an exception was thrown or not.

Here's an example of a method that uses try-catch-finally:

```
function divide($a, $b) {
  try {
    if($b == 0) {
      throw new Exception("Divide by zero error!");
    } else {
      $result = $a / $b;
    }
  } catch (Exception $e) {
    echo "Error: " . $e->getMessage();
  } finally {
    echo "End of program.";
  }
  return $result;
}
```

In the example above, the `divide` function takes two parameters `$a` and `$b`. It tries to divide `$a` by `$b`. If `$b` is zero, it throws an exception with the message "Divide by zero error!". If an exception is caught, it displays an error message to the user. The finally block prints "End of program." and the function returns a result.

We can then call this method as follows:

```
echo divide(10, 2); // Outputs 5
echo divide(10, 0); // Outputs "Error: Divide by zero error! End of program."
``` 

The first call to `divide` function returns 5 because (10/2) is equal to 5, and the finally block is executed displaying "End of program." The second call to `divide` function throws an exception because the second argument is 0. The catch block catches the exception and displays an error message "Error: Divide by zero error!" and the finally block is executed, displaying "End of program.".

Overall, the try-catch-finally statement provides a useful way to handle errors and gracefully exit or continue a program in the event of an unexpected exception.