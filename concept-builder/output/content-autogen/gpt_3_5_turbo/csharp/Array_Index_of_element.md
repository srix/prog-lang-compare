In C#, you can get the index of an element in an array using the `.IndexOf()` method. Here is an example:

```csharp
int[] numbers = { 2, 4, 6, 8, 10 };
int index = Array.IndexOf(numbers, 8);
Console.WriteLine("Index of 8 is " + index);
```

In this example, we have an integer array called `numbers` with five elements. We want to find the index of the element with the value of `8`. We pass `numbers` and `8` as arguments to the `IndexOf` method, which returns the index of the first occurrence of `8` in the array (which is 3). 

The output of this program would be: `Index of 8 is 3`.

If the element is not found in the array, the method returns `-1`. Here's an example:

```csharp
int[] numbers = { 2, 4, 6, 8, 10 };
int index = Array.IndexOf(numbers, 5);
if (index != -1)
{
    Console.WriteLine("Index of 5 is " + index);
}
else
{
    Console.WriteLine("5 was not found in the array.");
}
```

In this example, we're trying to find the index of the element with the value of `5`. Since `5` is not in the `numbers` array, the `IndexOf` method returns `-1`, and the program prints: `5 was not found in the array.`.