To get the size of an array in Visual Basic .NET, you can use the `Length` property which returns the number of elements in the array. Here are some examples:

Example 1: Getting the size of a one-dimensional array

```
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim size As Integer = numbers.Length
Console.WriteLine("The size of the array is: " & size)
```

Output:
```
The size of the array is: 5
```

Example 2: Getting the size of a two-dimensional array

```
Dim matrix(,) As Integer = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
Dim rows As Integer = matrix.GetLength(0)
Dim columns As Integer = matrix.GetLength(1)
Console.WriteLine("The size of the matrix is: " & rows & " x " & columns)
```

Output:
```
The size of the matrix is: 3 x 3
```

In this example, we used the `GetLength` method to get the number of rows and columns in the two-dimensional array. The `GetLength(0)` method returns the number of rows and `GetLength(1)` method returns the number of columns.

Note: It is important to remember that the `Length` property returns the total number of elements in the array, while `GetLength` method returns the length of a specific dimension in the array.