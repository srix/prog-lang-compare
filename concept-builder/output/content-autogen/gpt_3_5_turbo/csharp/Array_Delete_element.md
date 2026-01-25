In C#, an array is a collection of similar type elements. To delete an element from the array in C#, we need to do the following:

1. Create an array
```csharp
int[] array = {10, 20, 30, 40, 50};
```

2. Choose the element to delete and find its index in the array. Let's say we want to delete the element at index 2 (30).
```csharp
int indexToDelete = 2; // the third element in the array has index 2
```

3. Use a for loop to iterate through the array starting from the indexToDelete until the last element in the array and move each element to the adjacent lower index.
```csharp
for(int i = indexToDelete; i < array.Length - 1; i++)
{
  array[i] = array[i + 1];
}
```

4. Resize the array to remove the last element that got duplicated to index n-1 where n is original length of array.
```csharp
Array.Resize(ref array, array.Length - 1);
```

The final implementation would look like:

```csharp
int[] array = {10, 20, 30, 40, 50};
int indexToDelete = 2;

for(int i = indexToDelete; i < array.Length - 1; i++)
{
  array[i] = array[i + 1];
}

Array.Resize(ref array, array.Length - 1);

foreach(int element in array)
{
  Console.Write(element + " ");
}

// Output: 10 20 40 50 
```
Note that resizing an array would create a new array and copy all elements from old array to new array, which is an expensive operation. If there is a lot of element manipulation involved in your application, you might want to explore using a List instead which allow for constant time inserts and deletes at the cost of providing slower element access performance.