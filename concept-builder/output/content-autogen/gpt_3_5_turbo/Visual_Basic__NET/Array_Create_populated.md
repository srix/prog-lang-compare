In Visual Basic .NET, an array is a collection of variables of the same type, which can be accessed using an index value. Here's how you can create an array in Visual Basic .NET:

Syntax:
```vb
Dim arrayName(size) As dataType
```
or
```vb
Dim arrayName() As dataType = {value1, value2, value3, ...}
```

Example 1: Create an array of integers with a size of 5

```vb
Dim intArray(4) As Integer

intArray(0) = 10
intArray(1) = 20
intArray(2) = 30
intArray(3) = 40
intArray(4) = 50
```

Example 2: Create an array of strings with a size of 3 and initialize it

```vb
Dim strArray(2) As String
strArray = {"apple", "banana", "orange"}
```

Example 3: Create an array of doubles with different values

```vb
Dim dblArray() As Double = {0.1, 2.3, 4.5, 6.7, 8.9}
```

In the first example, we created an array of size 5 with integer data type and assigned some values to it. In the second example, we declared an array of size 3 with string data type and initialized it with some values. In the third example, we created an array using shorthand initialization syntax in a single line of code.

Note: Arrays start with index 0 in Visual Basic .NET.