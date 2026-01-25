In Visual Basic .NET, a method or function can return a value by using the `Return` keyword followed by the value to be returned. Here is an example of a function that takes two integers as input and returns their sum:

```vbnet
Public Function Add(ByVal a As Integer, ByVal b As Integer) As Integer
    Return a + b
End Function
```

In this example, the `Add` function takes two integer parameters, `a` and `b`, and returns their sum by using the `Return` keyword followed by the expression `a + b`.

Here's another example of a more complex function that returns a string with the uppercase version of the input string:

```vbnet
Public Function ToUpperCase(ByVal str As String) As String
    Dim result As String = ""
    For Each c As Char In str
        result &= Char.ToUpper(c)
    Next
    Return result
End Function
```

In this example, the `ToUpperCase` function takes a string parameter `str`, and uses a `For Each` loop to iterate over each character in the string, converting it to uppercase and concatenating it to the `result` string. Finally, the function returns the uppercase version of the input string by using the `Return` keyword followed by the `result` string.

To use these functions, you can call them from another part of your code like this:

```vbnet
Dim sum As Integer = Add(2, 3)
Console.WriteLine(sum)

Dim upper As String = ToUpperCase("hello, world!")
Console.WriteLine(upper)
```

In this example, we call the `Add` function with arguments `2` and `3`, which returns `5`. We assign this value to a variable called `sum` and print it to the console.

We also call the `ToUpperCase` function with the string `"hello, world!"`, which returns `"HELLO, WORLD!"`. We assign this value to a variable called `upper` and print it to the console.