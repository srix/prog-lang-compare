In C#, a multidimensional array is created using the following syntax:

```csharp
data_type [,] array_name = new data_type[size1, size2];
```

Where `data_type` is the type of element that will be stored in the array, `array_name` is the name given to the array, `size1` is the size of the first dimension, and `size2` is the size of the second dimension.

Here is an example that creates and initializes a 2-dimensional array with the values of a multiplication table:

```csharp
int[,] multiplicationTable = new int[10, 10];

for (int i = 0; i < 10; i++)
{
    for (int j = 0; j < 10; j++)
    {
        multiplicationTable[i, j] = (i + 1) * (j + 1);
    }
}
```

This code creates a 2-dimensional array `multiplicationTable` with 10 rows and 10 columns. The nested `for` loop is used to iterate through each cell in the array and initialize it with a value. The values in the array represent the multiplication table from 1 to 10.