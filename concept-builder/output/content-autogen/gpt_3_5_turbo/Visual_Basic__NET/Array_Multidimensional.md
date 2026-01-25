A multidimensional array is an array with more than one dimension. It can be used to store data in a table-like manner. In Visual Basic .NET, you can create a multidimensional array by specifying the number of dimensions and the size of each dimension. Here's an example creating a two-dimensional array:

```
Dim myArray(,) As Integer = New Integer(3, 2) {}
```

In the above example, we have created an array named "myArray" which has 3 rows and 2 columns. The syntax for initializing an array is the same as with a one-dimensional array. Here's an example of initializing the array:

```
myArray(0, 0) = 10
myArray(0, 1) = 20
myArray(0, 2) = 30
myArray(1, 0) = 40
myArray(1, 1) = 50
myArray(1, 2) = 60
myArray(2, 0) = 70
myArray(2, 1) = 80
myArray(2, 2) = 90
myArray(3, 0) = 100
myArray(3, 1) = 110
myArray(3, 2) = 120
```

In the above example, we have initialized the array with 12 values. The first index represents the row and the second index represents the column.

We can also initialize a multidimensional array using nested loops.

```
Dim myArray(2, 2) As Integer
For i = 0 To 2
    For j = 0 To 2
        myArray(i, j) = i + j
    Next j
Next i
```

This code initializes a 3x3 array with the sum of its row number and column number.