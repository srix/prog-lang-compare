In order to add an element to an array in C#, you must first create an array and then use the built-in method to add an element to that array.

Here's an example:

```
int[] array = new int[3];

// Adding elements to array
array[0] = 10;    
array[1] = 20;    
array[2] = 30;

// Displaying the elements in the array
Console.WriteLine("The elements in array are:");
foreach (int a in array)
{
    Console.WriteLine(a);
}

// Adding a new element to the array
Array.Resize(ref array, 4);
array[3] = 40;

// Displaying the updated elements in the array
Console.WriteLine("The new elements in array are:");
foreach (int a in array)
{
    Console.WriteLine(a);
}
```

In this example, we first create an array of size 3 and add elements to it. We then use the `Array. Resize` method to resize the array to size 4 and add a new element to it. Finally, we display the updated elements in the array using a `foreach` loop. The output of this program will be:

```
The elements in array are:
10
20
30
The new elements in array are:
10
20
30
40
```