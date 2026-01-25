Sure, here is an explanation on how to create and initialize a multidimensional array in C++:

A multidimensional array is an array containing one or more arrays. It can be useful for storing data that requires more than one dimensional index, like a 3D space or a matrix. To create a multidimensional array in C++, you need to specify the size of each dimension.

Here is an example of how to create and initialize a 2D array of integers with 3 rows and 4 columns:

```c++
int array2D[3][4] = {{1, 2, 3, 4},
                     {5, 6, 7, 8},
                     {9, 10, 11, 12}};
```

In the above example, we have created a 2D array called `array2D` with 3 rows and 4 columns. We have initialized the array with the values in the curly braces `{}`. Each row is enclosed in its own set of curly braces. 

Here is an example of how to create and initialize a 3D array of characters with 2 rows, 3 columns, and 4 depths:

```c++
char array3D[2][3][4] = {{{'a', 'b', 'c', 'd'}, {'e', 'f', 'g', 'h'}, {'i', 'j', 'k', 'l'}},
                          {{'m', 'n', 'o', 'p'}, {'q', 'r', 's', 't'}, {'u', 'v', 'w', 'x'}}};
```

In this example, we have created a 3D array called `array3D` with 2 rows, 3 columns, and 4 depths. We have initialized the array with the values in the curly braces `{}`. Each row is enclosed in its own set of curly braces, and each column is enclosed in a set of curly braces inside the row, and each depth is enclosed in a set of curly braces inside the column.

Note that the initialization of a multidimensional array can be done in a single line or spread across multiple lines for better readability.