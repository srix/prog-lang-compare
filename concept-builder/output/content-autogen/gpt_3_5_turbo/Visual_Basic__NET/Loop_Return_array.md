To return an array in Visual Basic .NET, you need to declare a function with a specified return type as the array type. You can then create and populate the array within the function, and return it to the caller.

Here is an example of a function that returns an array of integers:

```
Function GetIntArray() As Integer()
    Dim arr() As Integer = {1, 2, 3, 4, 5}
    Return arr
End Function
```

In this example, we declare a function named `GetIntArray()` that returns an array of integers (`As Integer()`). Inside the function, we create an array of integers and populate it with values. Finally, we return the array to the caller using the `Return` statement.

You can then call this function from somewhere else in your code to retrieve the array:

```
Dim myArray() As Integer = GetIntArray()
```

This line declares a new array of integers named `myArray` and assigns it the value returned by `GetIntArray()`. Now, `myArray` contains the values {1, 2, 3, 4, 5}.