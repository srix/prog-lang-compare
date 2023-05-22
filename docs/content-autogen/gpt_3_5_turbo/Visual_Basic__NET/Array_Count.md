To count the number of elements in an array matching a condition in Visual Basic .NET, you can use the LINQ query operators like Where and Count. 

Here is an example of an array of integers with some elements matching a condition:

```
Dim numbers() As Integer = {5, 10, 15, 20, 25}
```

To count the number of elements in this array that are greater than or equal to 15, you can use the Where method to filter the array, and then use the Count method to get the number of matching elements:

```
Dim count As Integer = numbers.Where(Function(n) n >= 15).Count()
```

In this example, the count variable will be set to 2, since there are two elements in the array that match the condition (15 and 20).

You can also count the number of elements in an array that match a more complex condition. For example, if you have an array of strings and you want to count the number of elements that contain the letter "a", you can use the Contains method inside the Where condition:

```
Dim names() As String = {"Alice", "Bob", "Charlie", "David", "Eve"}
Dim count As Integer = names.Where(Function(name) name.Contains("a")).Count()
```

In this example, the count variable will be set to 3, since there are three elements in the array that contain the letter "a" (Alice, Charlie, and David).