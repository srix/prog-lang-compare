In C#, there are several ways to sort an array. Here are three examples:

1. Array.Sort() method:
```csharp
int[] arr = new int[] { 3, 1, 5, 2, 4 };
Array.Sort(arr);
foreach (int i in arr)
{
    Console.Write(i + " ");
}
```
Output: 1 2 3 4 5

2. Array.Sort() method with a custom comparer:
```csharp
string[] arr = new string[] { "dog", "cat", "bird", "elephant", "giraffe" };
Array.Sort(arr, (x, y) => x.Length.CompareTo(y.Length));
foreach (string s in arr)
{
    Console.Write(s + " ");
}
```
Output: cat dog bird giraffe elephant

3. LINQ OrderBy() method:
```csharp
int[] arr = new int[] { 3, 1, 5, 2, 4 };
foreach (int i in arr.OrderBy(x => x))
{
    Console.Write(i + " ");
}
```
Output: 1 2 3 4 5

In all of these examples, the original array is sorted in ascending order. If you want to sort in descending order, you can use the OrderByDescending() method instead of OrderBy(), or use the reverse() method after sorting.