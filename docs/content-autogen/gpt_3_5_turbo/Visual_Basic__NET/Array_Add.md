To add an element to an array in Visual Basic .NET, you can use the ReDim Preserve statement. Here's an example:

```
Dim myArray() As Integer = {1, 2, 3, 4}
ReDim Preserve myArray(4) ' Resize the array to hold 5 elements
myArray(4) = 5 ' Add the element 5 to the end of the array
```

In this example, we first create an array called `myArray` with 4 elements: 1, 2, 3, and 4. We then use the `ReDim Preserve` statement to resize the array to hold 5 elements. The `Preserve` keyword is used to maintain the values of the existing elements in the array. Without it, the array would be resized to 5 elements with the additional element set to the default value of 0. Finally, we add the element 5 to the end of the array.

Here's another example that adds an element to an empty array:

```
Dim myArray() As String ' Declare an empty array
ReDim Preserve myArray(0) ' Resize the array to hold 1 element
myArray(0) = "Hello" ' Add the element "Hello" to the array
```

In this example, we declare an empty array called `myArray`. We then use the `ReDim Preserve` statement to resize the array to hold 1 element. Finally, we add the element "Hello" to the array at index 0.