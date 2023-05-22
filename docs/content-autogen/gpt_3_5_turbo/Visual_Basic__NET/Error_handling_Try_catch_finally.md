In Visual Basic .NET, the try/catch/finally block is used to handle errors or exceptions during the execution of code. The try block contains the code that may throw an exception, while the catch block is used to catch the thrown exception. Finally block is used to execute the code that should always be executed after the try/catch block has completed, regardless of whether an exception was thrown or not.

Here is an example of a try/catch/finally block in Visual Basic .NET:

```
Try
   'Code that may throw an exception
   Dim x As Integer = 5
   Dim y As Integer = 0
   Dim z As Integer = x / y
Catch ex As Exception
   'Exception handling code
   Console.WriteLine("An exception occurred: " & ex.Message)
Finally
   'Code that should always execute after the try/catch block
   Console.WriteLine("Done executing try/catch block.")
End Try
```

In this example, the code in the try block divides the integer x by the integer y, which will throw an exception since division by zero is not allowed. The catch block catches the exception and displays the error message using the ex.Message property. The finally block will always execute, regardless of whether an exception was thrown or not, and displays a message indicating that the try/catch block has been executed.

A common practice is to use try/catch/finally blocks when working with external resources, such as files or databases. The try block will contain the code to access the resource, the catch block will handle any exceptions that may be thrown while accessing the resource, and the finally block will ensure that the resource is properly closed or released, even if an exception was thrown.