In C#, you can get the size of an array using the `Length` property. Here's an example:

```csharp
int[] numbers = new int[5];
Console.WriteLine(numbers.Length); // Output: 5
```

In this example, we create an integer array `numbers` with a length of 5. We then use the `Length` property to get the size of the array, which is 5.

Here's another example that shows how to get the size of a multidimensional array:

```csharp
int[,] matrix = new int[3, 4];
Console.WriteLine(matrix.Length); // Output: 12
```

In this example, we create a 2-dimensional integer array `matrix` with 3 rows and 4 columns. The total number of elements in the array is 12, which is what we get when we use the `Length` property.