To find all elements of an array satisfying a condition in Visual Basic .NET, we can use the LINQ (Language Integrated Query) functionality. Here is an example that demonstrates this:

First, we declare an array of integers:

```
Dim numbers() As Integer = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```

Next, we want to find all the even numbers in this array. To do that, we can use the `Where` extension method, which takes a predicate (a function that returns a Boolean value) as its argument. The predicate tests each element of the array and returns `True` if the element satisfies the condition, or `False` otherwise.

```
Dim evenNumbers = numbers.Where(Function(n) n Mod 2 = 0)
```

This code creates a new sequence `evenNumbers` that contains all the even numbers from the original array. The lambda expression `Function(n) n Mod 2 = 0` is the predicate that tests each element of the array and returns `True` if the element is even (i.e., has no remainder when divided by 2).

We can then iterate over the `evenNumbers` sequence and print out the values:

```
For Each n In evenNumbers
    Console.WriteLine(n)
Next
```

This will output:

```
2
4
6
8
10
```

Note that this method returns a sequence, not an array. If you really need an array, you can use the `ToArray` method:

```
Dim evenNumbersArray = evenNumbers.ToArray()
```

This will create a new array that contains the same elements as the `evenNumbers` sequence.