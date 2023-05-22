Try/catch/finally is a feature in Visual Basic .NET that allows you to handle exceptions in your code. Here is how to use it in a method:

1. Assume you have a method called "DivideNumbers" that takes two parameters, "a" and "b", and returns a result of a divided by b:

```
Function DivideNumbers(ByVal a As Integer, ByVal b As Integer) As Integer
    Dim result As Integer = 0
    
    result = a / b
    
    Return result
End Function
```

2. If you use this method in your code and b is set to 0, an exception is thrown.

```
Sub Main()
    Dim res As Integer = DivideNumbers(10, 0)
    Console.WriteLine(res)
End Sub
```

Output:

```
System.DivideByZeroException: Attempted to divide by zero.
   at ConsoleApp1.Module1.DivideNumbers(Int32 a, Int32 b) in C:\Users\username\source\repos\ConsoleApp1\ConsoleApp1\Module1.vb:line 5
   at ConsoleApp1.Module1.Main() in C:\Users\username\source\repos\ConsoleApp1\ConsoleApp1\Module1.vb:line 10
```

3. To handle this exception, we can use the try/catch/finally block.

```
Try
    Dim res As Integer = DivideNumbers(10, 0)
    Console.WriteLine(res)
Catch ex As Exception
    Console.WriteLine(ex.Message)
Finally
    Console.WriteLine("Done")
End Try
```

Output:

```
Attempted to divide by zero.
Done
```

In this example, we catch the exception thrown by the DivideNumbers method and write the message to the console. Finally, we write "Done" to the console regardless of whether an exception was thrown or not.

Therefore, this is how to use try/catch/finally in a method in Visual Basic .NET.