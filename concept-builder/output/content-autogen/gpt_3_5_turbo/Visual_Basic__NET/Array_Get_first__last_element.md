To get the first and last elements of an array in Visual Basic .NET, you can use the following syntax:

```
Dim myArray() As Integer = {1, 2, 3, 4, 5}

'Get the first element
Dim firstElement as Integer = myArray(0)

'Get the last element
Dim lastElement as Integer = myArray(myArray.Length - 1)
```

In this example, we have an integer array named `myArray` with 5 elements. To get the first element, we simply access the element at index 0. To get the last element, we use the `Length` property of the array to calculate the index of the last element, and then access that element directly.

Note that this approach assumes that the array has at least one element. If the array is empty, you will need to handle that case separately.