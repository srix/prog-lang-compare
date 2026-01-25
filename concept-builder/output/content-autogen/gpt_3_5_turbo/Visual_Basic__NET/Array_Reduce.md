In Visual Basic .NET, we can reduce an array to a single value using the `Aggregate` function. The `Aggregate` function applies an accumulator function to each element of an array and produces a single result.

Here's an example of reducing an array of integers to find its sum:

```vb.net
Dim numbers() As Integer = {1, 2, 3, 4, 5}

Dim sum As Integer = numbers.Aggregate(Function(acc, n) acc + n)

Console.WriteLine("Sum: " & sum)
```
Output:
```
Sum: 15
```
In this example, the `Aggregate` function takes two arguments: an accumulator function and an optional seed value. In this case, the accumulator function is a lambda expression `(Function(acc, n) acc + n)` that adds the accumulator (`acc`) to the current element (`n`), and the seed value is not provided, so the first element of the array is used as the initial value of the accumulator.

We can also use the `Aggregate` function to find other values, such as the maximum:

```vb.net
Dim numbers() As Integer = {1, 2, 3, 4, 5}

Dim max As Integer = numbers.Aggregate(Function(acc, n) If(n > acc, n, acc))

Console.WriteLine("Max: " & max)
```
Output:
```
Max: 5
```
In this example, the accumulator function is a lambda expression `(Function(acc, n) If(n > acc, n, acc))` that returns the maximum of the accumulator (`acc`) and the current element (`n`), and the seed value is not provided, so the first element of the array is used as the initial value of the accumulator.