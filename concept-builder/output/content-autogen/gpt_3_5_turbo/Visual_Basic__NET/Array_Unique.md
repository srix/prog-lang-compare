To get the unique elements of an array in Visual Basic .NET, you can use the `Distinct()` method or the `LINQ` query syntax. Here are some examples:

Using `Distinct()` method:

```
Dim arr() As Integer = {1, 2, 3, 2, 4, 1, 5, 6, 3}
Dim uniqueArr() As Integer = arr.Distinct().ToArray()
```
In this example, `arr()` contains duplicate elements. We use the `Distinct()` method to remove the duplicates and then convert the result to an array using `ToArray()` method.

Using `LINQ` query:

```
Dim arr() As Integer = {1, 2, 3, 2, 4, 1, 5, 6, 3}
Dim uniqueArr() As Integer = (From a In arr Select a).Distinct().ToArray()
```
In this example, we use `LINQ` query syntax to select all the elements of `arr()` and then use the `Distinct()` method to remove duplicates. Finally, we convert the result to an array using `ToArray()` method.

Both of these methods will result in `uniqueArr()` containing the unique elements of `arr()`.