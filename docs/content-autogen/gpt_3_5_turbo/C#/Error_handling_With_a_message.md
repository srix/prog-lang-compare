In C#, `try`, `catch`, and `finally` are used to handle runtime exceptions. The `try` block contains the code that might throw an exception, and the `catch` block handles the exception if it's thrown. The `finally` block is optional and is executed regardless of whether or not an exception is thrown. You can add a custom message to the exception using the `throw` statement. Here's an example of how to use try/catch/finally with a message in C#:

```
try
{
    int x = 42/0; // Division by zero intentional error
}
catch (Exception ex)
{
    // Log Exception message to a file or error logging system
    throw new Exception("Error occurred while performing the operation. Please try again later.", ex);
}
finally
{
    // Close resources if needed
    Console.WriteLine("Finally block executed");
}
```

In this example, the `try` block attempts to divide 42 by 0, which will throw a `DivideByZeroException`. The `catch` block catches the exception, then adds a custom message using `throw new Exception()`. The exception's original message is passed as a parameter to the new exception along with the custom message. The `finally` block is then executed, which in this case prints a message to the console.

Using custom exceptions with try/catch/finally can help to provide more information to users when runtime errors occur and can also help in debugging the application.