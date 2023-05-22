To convert an integer to a string in Visual Basic .NET, you can use the ToString() method which is available on all integer data types.

Here is an example:

```
Dim myInteger As Integer = 42
Dim myString As String = myInteger.ToString()
```

In this example, the integer value `42` is stored in the variable `myInteger`. To convert this integer to a string, we call the `ToString()` method on `myInteger` and assign the result to a new variable `myString`. The resulting string will contain the value `"42"`.

Here is another example:

```
Dim myIntegers() As Integer = {1, 2, 3, 4, 5}
Dim myString As String = String.Join(",", myIntegers.Select(Function(i) i.ToString()))
```

In this example, we have an array of integers `myIntegers`. To convert each integer to a string and concatenate them into a single string, we use the `String.Join()` method along with an anonymous function `Function(i) i.ToString()` which converts each integer to a string. The resulting string will contain the values `"1,2,3,4,5"`.