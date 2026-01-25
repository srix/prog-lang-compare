In Visual Basic .NET, you can get the index of an element in an array using the `Array.IndexOf` method. This method returns the index of the first occurrence of the specified value in the array.

Here's an example of how to get the index of an element in a one-dimensional array:

```
Dim arr As Integer() = {1, 2, 3, 4, 5}
Dim index As Integer = Array.IndexOf(arr, 3)
Console.WriteLine("Index of 3: " & index) ' Output: 2
```

In this example, we create an integer array with five elements and initialize it with values. Then, we call the `Array.IndexOf` method to get the index of the value 3 in the array. The method returns the index 2, which we assign to the `index` variable.

Here's an example of how to get the index of an element in a two-dimensional array:

```
Dim arr(,) As Integer = {{1, 2}, {3, 4}, {5, 6}}
Dim index As Integer = -1

For i As Integer = 0 To arr.GetLength(0) - 1
    For j As Integer = 0 To arr.GetLength(1) - 1
        If arr(i, j) = 4 Then
            index = i
            Exit For
        End If
    Next
    If index <> -1 Then Exit For
Next

Console.WriteLine("Index of 4: " & index) ' Output: 1
```

In this example, we create a two-dimensional integer array with three rows and two columns and initialize it with values. Then, we loop through each element in the array and check if it equals 4. If we find a match, we assign the row index to the `index` variable and exit the loop. Finally, we print the index of the value 4 in the array.