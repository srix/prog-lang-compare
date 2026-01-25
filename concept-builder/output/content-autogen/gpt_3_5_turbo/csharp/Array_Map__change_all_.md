In C#, you can change all elements of an array by accessing each element and modifying its value in a loop. Here is an example code snippet to change all elements of an array:

```csharp
// Initialize an array
int[] arr = { 1, 2, 3, 4, 5 };

// Loop through each element of the array and modify the value
for (int i = 0; i < arr.Length; i++)
{
    arr[i] = arr[i] * 2; // multiply each element by 2
}

// Display the modified array
Console.WriteLine("Modified Array:");
for (int i = 0; i < arr.Length; i++)
{
    Console.Write(arr[i] + " ");
}

// Output: Modified Array: 2 4 6 8 10
```

In this example, we initialized an array containing five elements and then used a `for` loop to access each element and double its value. Finally, we displayed the modified array to the console.