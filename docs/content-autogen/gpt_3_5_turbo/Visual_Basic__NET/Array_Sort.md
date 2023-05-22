Sorting an array in Visual Basic .NET can be accomplished using the `Array.Sort` method. This method sorts the elements in an one-dimensional array of primitive data types or objects that implement the `IComparable` interface. 

Here is an example of sorting an array of integers in ascending order:

```
Dim numbers() As Integer = {3, 1, 4, 1, 5, 9, 2, 6, 5}
Array.Sort(numbers)
```

The resulting `numbers` array will be sorted in ascending order: `{1, 1, 2, 3, 4, 5, 5, 6, 9}`.

Here is an example of sorting an array of strings in descending order:

```
Dim names() As String = {"Alice", "Bob", "Charlie", "Dave"}
Array.Sort(names, New Comparison(Of String)(Function(x, y) String.Compare(y, x)))
```

The `Array.Sort` method uses a comparison delegate to determine the sort order. In this example, the `String.Compare` method is used to determine the sort order, and the delegate is passed as an argument to the `Array.Sort` method. The resulting `names` array will be sorted in descending order: `{"Dave", "Charlie", "Bob", "Alice"}`.

It is also possible to sort an array of custom objects by implementing the `IComparable` interface on the object and calling the `Array.Sort` method. In this case, the `CompareTo` method of the object will be used to determine the sort order.