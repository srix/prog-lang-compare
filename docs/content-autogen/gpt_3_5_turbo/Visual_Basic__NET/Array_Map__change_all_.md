To change all elements of an array in Visual Basic .NET, you can use a loop to iterate through each element of the array and assign a new value to each element.

Here's an example code that changes all elements of an integer array to a new value:

```
' Declare and initialize an integer array
Dim numbers() As Integer = {1, 2, 3, 4, 5}

' Loop through each element of the array and assign a new value
For i As Integer = 0 To numbers.Length - 1
    numbers(i) = i * 2
Next

' Display the updated array elements
For Each num As Integer In numbers
    Console.WriteLine(num)
Next
```

The above code first declares and initializes an integer array with values 1 to 5. Then, a loop is used to iterate through each element of the array and assign a new value to each element by multiplying the index by 2. Finally, another loop is used to display the updated array elements.

Output:
```
0
2
4
6
8
```

Note that you can replace the data type and the values of the array with your own customized array elements.