In Visual Basic .NET, a private method is a method that can only be accessed within the same class and cannot be accessed by any code outside the class. Private methods are useful for encapsulating certain functionality of a class that should not be exposed to outside classes. 

Here's an example:

```
Public Class MyClass
    Private Function myPrivateFunction(ByVal x As Integer) As Integer
        Return x + 2
    End Function

    Public Sub myPublicFunction()
        Dim result As Integer = myPrivateFunction(3)
        Console.WriteLine(result)
    End Sub
End Class
```

In the above example, `myPrivateFunction` is a private method within the `MyClass` class. It takes an integer parameter and returns an integer value, which is x plus 2. The `myPublicFunction` method is a public method that is accessible outside the class. It calls the `myPrivateFunction` method and prints the result to the console.

However, if you were to try accessing `myPrivateFunction` from outside the class, for example:

```
Dim myObj As New MyClass()
Dim result As Integer = myObj.myPrivateFunction(3)
```

You would get a compile-time error because `myPrivateFunction` is a private method and cannot be accessed outside of the `MyClass` class.

Overall, using private methods in Visual Basic .NET is a powerful tool that helps promote encapsulation and protects sensitive functionality inside a class.