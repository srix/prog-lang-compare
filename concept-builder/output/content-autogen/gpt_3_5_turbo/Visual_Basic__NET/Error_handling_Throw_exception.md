Exceptions are a way to handle errors or unexpected situations in a Visual Basic .NET program. You can throw an exception explicitly using the `Throw` statement. The syntax for throwing an exception is as follows:

```
Throw New Exception("Description of the error")
```

Here's an example that throws an exception when a user enters an incorrect password:

```
Dim password as String = "MyPassword"
Dim inputPassword as String = Console.ReadLine()

If inputPassword <> password Then
    Throw New Exception("Incorrect Password. Please try again.")
EndIf
```

In this example, if the user enters an incorrect password, the `Throw` statement will be executed, and an exception with the message "Incorrect Password. Please try again" will be thrown. This exception will need to be handled by the calling code.

You may also create custom exception classes by creating a class that inherits from the `Exception` class.

```
Public Class CustomException
    Inherits Exception

    Public Sub New(message As String)
        MyBase.New(message)
    End Sub

    Public Sub New(message As String, innerException As Exception)
        MyBase.New(message, innerException)
    End Sub
End Class
```

In this custom exception class, we have created two constructors that can set a message for the exception, as well as an inner exception. 

To use this custom exception, we can simply create a new instance of it and throw it similar to the previous example:

```
Dim input as Integer = Console.ReadLine()
If input < 0 Then
    Throw New CustomException("Number cannot be negative.")
EndIf
``` 

This will create a new instance of the `CustomException` class and throw it, with the message "Number cannot be negative".