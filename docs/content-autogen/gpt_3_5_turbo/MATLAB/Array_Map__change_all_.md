In MATLAB, we can change all elements of an array in a variety of ways. Here are some examples:

1. Changing all elements to a scalar value:

To change all elements of an array to a scalar value, we can use the following syntax:

```Matlab
A(:) = scalar_value;
```

Here's an example:

```Matlab
% Creating an array
A = [1 2 3; 4 5 6; 7 8 9];

% Changing all elements of A to 2
A(:) = 2;

% Displaying the changed array
disp(A)
```

Output:

```
2  2  2
2  2  2
2  2  2
```

2. Changing all elements to a new array:

To change all elements of an array to a new array, they must have the same size. Here's an example:

```Matlab
% Creating an original array
A = [1 2 3; 4 5 6; 7 8 9];

% Creating a new array with the same size as A
new_array = ones(size(A));

% Replacing all elements of A with elements of the new array
A = new_array;

% Displaying the changed array
disp(A)
```

Output:

```
1  1  1
1  1  1
1  1  1
```

3. Using logical indexing to change a subset of an array:

To change a subset of an array, we can use logical indexing. Logical indexing involves creating a logical array with the same size as the original array, where each element is either true or false depending on whether we want to change that element or not. Here's an example:

```Matlab
% Creating an original array
A = [1 2 3; 4 5 6; 7 8 9];

% Creating a logical array with the same size as A
logical_index = A > 5;

% Changing all elements of A where logical_index is true
A(logical_index) = 0;

% Displaying the changed array
disp(A)
```

Output:

```
1  2  3
4  5  0
0  0  0
```

In this example, we changed all elements of A that are greater than 5 to 0.