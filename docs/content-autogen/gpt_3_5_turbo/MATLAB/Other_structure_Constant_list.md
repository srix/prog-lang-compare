In MATLAB, a constant list is an array or vector that contains a fixed set of values that cannot be modified during the execution of the program. Here are some examples of how to use constant lists in MATLAB:

1. Creating a Row Vector as a Constant List:

You can create a row vector using square brackets `[]` and inserting a fixed set of values that cannot be modified during the program execution. For example, the following statement creates a constant row vector with the values `[1 2 3 4]`.

```
constant_list = [1 2 3 4];
```

2. Creating a Column Vector as a Constant List:

You can create a column vector using a semicolon `;` and inserting a fixed set of values that cannot be modified during the program execution. For example, the following statement creates a constant column vector with the values `[5; 6; 7; 8]`.

```
constant_list = [5; 6; 7; 8];
```

3. Creating a Matrix as a Constant List:

You can create a matrix using the same square bracket `[ ]` notation and inserting fixed values as follows:

```
constant_list = [1 2 3;
                 4 5 6;
                 7 8 9];
```

This creates a 3x3 matrix with the values `1, 2, 3` being those in the first row, `4, 5, 6` in the second and `7, 8, 9` in the third. 

4. Using `repmat()` Function to Create Constant Matrices:

If a matrix of repeated values is required, then you can use the `repmat()` function. For example, the following statement creates a constant 2x3 matrix with the value `2`.

```
constant_list = repmat(2, 2, 3);
```

Here, the first argument specifies the value to be repeated, while the second and third arguments specify the number of rows and columns of the constant matrix, respectively.

Note that constant lists are useful for storing values that remain fixed, such as physical or mathematical constants, without risking that they would be modified by mistake.