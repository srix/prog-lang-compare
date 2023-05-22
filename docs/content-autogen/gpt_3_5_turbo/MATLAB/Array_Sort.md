In MATLAB, there are several ways to sort an array. Here are three methods with examples:

1. Using the sort() function:

The sort() function sorts the elements of an array in ascending order.

Example:

```matlab
>> A = [4, 2, 3, 1];
>> sorted_A = sort(A)

sorted_A =
   1   2   3   4
```

2. Using the sortrows() function:

The sortrows() function sorts the rows of a matrix in ascending order based on a specified column.

Example:

```matlab
>> M = [5, 2; 4, 3; 2, 1; 3, 4];
>> sorted_M = sortrows(M, 1)

sorted_M =
   2   1
   3   4
   4   3
   5   2
```

This sorts the rows of matrix M based on the values in the first column.

3. Using the sort() function with the 'descend' option:

The sort() function can also sort the elements of an array in descending order by specifying the 'descend' option.

Example:

```matlab
>> B = [4, 2, 3, 1];
>> sorted_B = sort(B, 'descend')

sorted_B =
   4   3   2   1
```

This sorts the elements of array B in descending order.