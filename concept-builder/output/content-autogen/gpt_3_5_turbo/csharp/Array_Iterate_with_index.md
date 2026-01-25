In C#, you can iterate over an array with the help of a for loop and accessing each element using its index. Here's an example:

```
int[] myArray = { 1, 2, 3, 4, 5 };

for (int i = 0; i < myArray.Length; i++)
{
    Console.WriteLine("Element at index " + i + " is " + myArray[i]);
}
```

In this example, `myArray` is the array you want to iterate over, and `myArray.Length` gives the number of elements in the array. The `for` loop iterates from index 0 to the last index of the array.

Inside the loop, you can access each element using its index, `myArray[i]`.

You can modify the loop to also perform some operation on each element. For example:

```
int[] myArray = { 1, 2, 3, 4, 5 };

for (int i = 0; i < myArray.Length; i++)
{
    myArray[i] = myArray[i] * 2;
    Console.WriteLine("Element at index " + i + " is " + myArray[i]);
}
```

In this modified example, each element of `myArray` is multiplied by 2, and then the updated value is printed.