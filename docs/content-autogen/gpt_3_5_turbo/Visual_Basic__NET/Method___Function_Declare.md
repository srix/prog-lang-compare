In Visual Basic .NET, methods or functions are declared using the `Function` or `Sub` keyword followed by the name of the method or function.

Here are examples of declaring a function and a subroutine:

1. Function:

```
Function multiplyNumbers(ByVal num1 As Integer, ByVal num2 As Integer) As Integer
   multiplyNumbers = num1 * num2
End Function
```

In this example, the function is named "multiplyNumbers". It takes in two integer parameters, num1 and num2. It returns the result of multiplying num1 and num2.

2. Subroutine:

```
Sub displayMessage(ByVal message As String)
   Console.WriteLine(message)
End Sub
```
In this example, the subroutine is named "displayMessage". It takes in a string parameter, message. It displays the message on the console.

Note that the `ByVal` keyword is used in both examples to indicate that the parameters are passed by value rather than by reference. This means that the original values of the parameters will not be changed by the method or function.

To call these methods or functions in your code, you simply write the name of the function or subroutine followed by the argument values in parentheses. For example:

```
Dim result As Integer = multiplyNumbers(5, 6)
displayMessage("Hello, world!")
``` 

The first line calls the multiplyNumbers function with arguments 5 and 6, and assigns the result to the variable "result". The second line calls the displayMessage subroutine with the argument "Hello, world!".