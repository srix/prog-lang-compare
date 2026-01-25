In Visual Basic .NET, try/catch/finally is used to handle exceptions in a safe and effective manner. The syntax for using this structure is as follows:

```
Try
   'code block to try
Catch ex As Exception
   'code block to handle any exceptions
   MessageBox.Show(ex.Message)
Finally
   'code block to execute whether an exception was caught or not
End Try
```

In the code block after the Try statement, you will typically include the code that is likely to throw an exception. The Catch block is where you will catch and handle any exceptions that were thrown. The Finally block is where you can include any code that must be executed whether an exception was caught or not.

Here is an example:

```
Try
   Dim x As Integer = 10 / 0
Catch ex As Exception
   MessageBox.Show("An error occurred: " & ex.Message)
Finally
   MessageBox.Show("The try/catch block has finished running.")
End Try
```

In this example, `x` is being set to the result of dividing 10 by 0, which will throw an exception. The Catch block will catch that exception and display a message box with the details of the error. The Finally block will display a message box indicating that the try/catch block has finished running, regardless of whether an exception was caught or not.