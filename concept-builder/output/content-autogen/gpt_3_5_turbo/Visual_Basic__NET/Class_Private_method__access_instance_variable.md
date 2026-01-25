In Visual Basic .NET, private instance variables can be accessed within private methods of the same class using the Me keyword. Me keyword refers to the current instance of the class.

Here is an example:

```
Public Class MyClass
    Private myVariable As String = "Hello World!"

    Private Sub MyPrivateMethod()
        Console.WriteLine(Me.myVariable)
    End Sub
End Class
```

In the above example, we have a class named MyClass which has a private instance variable called myVariable of the string data type. We also have a private method named MyPrivateMethod which prints the value of the myVariable on the console using the Me keyword.

When the method is called, the value of myVariable will be printed on the console. Although myVariable is private, it can be accessed in the same class because it is declared as an instance variable.