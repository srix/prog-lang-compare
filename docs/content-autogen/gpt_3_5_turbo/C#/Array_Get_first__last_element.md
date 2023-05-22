To get the first and last element of an array in C#, you can use the following methods:

1. **First()** method: This method returns the first element of an array. It throws an exception if the array is empty.

```csharp
int[] array = { 2, 4, 6, 8, 10 };
int firstElement = array.First(); // Returns 2
```

2. **Last()** method: This method returns the last element of an array. It throws an exception if the array is empty.

```csharp
int[] array = { 2, 4, 6, 8, 10 };
int lastElement = array.Last(); // Returns 10
```

3. **Indexers**: Another way to get the first and last element of an array in C# is by using the indexers. The first element is stored at index 0 and the last element is stored at index length - 1.

```csharp
int[] array = { 2, 4, 6, 8, 10 };
int firstElement = array[0]; // Returns 2
int lastElement = array[array.Length - 1]; // Returns 10
```

Note that if the array is empty, the indexers approach will throw an "IndexOutOfRangeException" exception.