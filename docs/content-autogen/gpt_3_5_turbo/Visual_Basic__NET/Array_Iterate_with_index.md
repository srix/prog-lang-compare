To iterate over an array with index in Visual Basic .NET, you can use a `For` loop. Here's an example:

```
Dim myArray() As Integer = {1, 2, 3, 4, 5}

For i As Integer = 0 To myArray.Length - 1
   Console.WriteLine("Index {0}: {1}", i, myArray(i))
Next
```

In this example, we have an integer array called `myArray` with five elements. We then use a `For` loop to iterate over each element in the array using the index. 

The loop starts at index 0 (`i = 0`) and continues until the last element in the array (`myArray.Length - 1`). Inside the loop, the current index and element are printed to the console using the `Console.WriteLine()` method.

So, when you run this code, the output will be:

```
Index 0: 1
Index 1: 2
Index 2: 3
Index 3: 4
Index 4: 5
```

This is just one example of how to iterate over an array with index in Visual Basic .NET. There are multiple other ways to do it, such as using a `For Each...Next` loop or a `While` loop.