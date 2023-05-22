In Perl, you can create a multidimensional array by declaring an array of references to arrays, where each reference points to a separate array. Here's an example code snippet that demonstrates how to create a 2-dimensional array:

```
# Define a 2-dimensional array with 2 rows and 3 columns
my @matrix = (
    [1, 2, 3],
    [4, 5, 6]
);
```

In this example, `@matrix` is declared as an array of references to arrays. The two references within it each point to separate arrays - `[1, 2, 3]` and `[4, 5, 6]` - which represent the rows of the matrix.

You can also initialise a multidimensional array with values as follows:

```
# Define a 3-dimensional array with 2 layers of 2x2 matrices each
my @cube = (
    [ [1, 2], [3, 4] ],
    [ [5, 6], [7, 8] ]
);
```

In this example, `@cube` is declared as an array of references to two separate 2x2 matrices. Each of the two matrices is declared using an inner set of square brackets. You can add as many layers and dimensions as you need.

You can access the elements of a multidimensional array by specifying the indices of each dimension within square brackets. For example:

```
# Access the element at row 1, column 2 of the matrix
my $element = $matrix[0][1];  # Value is 2

# Access the element in layer 2, row 1, column 2 of the cube
my $element = $cube[1][0][1];  # Value is 6
```

I hope this helps!