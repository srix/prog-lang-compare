To delete an element from an array in Visual Basic .NET, you can use the `RemoveAt` method of the ArrayList class or the `CopyTo` method of the Array class. Here are examples of both methods:

1. Using the RemoveAt method of the ArrayList class:

```vb.net
' Declare and initialize an array
Dim array As Integer() = {1, 2, 3, 4, 5}

' Create an ArrayList from the array
Dim list As New ArrayList(array)

' Remove the third element from the ArrayList
list.RemoveAt(2)

' Convert the ArrayList back to an array
array = list.ToArray(GetType(Integer))
```

In this example, we declare and initialize an array of integers, then create an ArrayList from the array using the ArrayList constructor that takes an array as its argument. We then use the RemoveAt method of the ArrayList class to remove the third element from the ArrayList. Finally, we convert the ArrayList back to an array using the ToArray method.

2. Using the CopyTo method of the Array class:

```vb.net
' Declare and initialize an array
Dim array As Integer() = {1, 2, 3, 4, 5}

' Remove the third element from the array
Array.Copy(array, 3, array, 2, array.Length - 3)

' Resize the array to remove the last element
Array.Resize(array, array.Length - 1)
```

In this example, we again declare and initialize an array of integers. We then use the CopyTo method of the Array class to copy all elements after the third element back one position to "remove" the third element. Finally, we resize the array to remove the last element.

Both of these methods have their advantages and disadvantages. The ArrayList method is easier to read and understand, and can be used to remove elements from anywhere in the array. However, it requires more memory since it uses an ArrayList to manipulate the array. The Array method is more efficient since it manipulates the array directly, but is harder to understand and can only be used to remove elements from the end of the array.