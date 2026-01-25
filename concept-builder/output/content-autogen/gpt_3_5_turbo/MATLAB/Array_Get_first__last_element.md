To get the first and last element of an array in MATLAB, you can use indexing. Here are some examples:

1. Getting the first and last element of a one-dimensional array:

```matlab
% Create an array of numbers
arr = [1, 2, 3, 4, 5];

% Get the first element
first_element = arr(1);

% Get the last element
last_element = arr(end);
```

2. Getting the first and last element of a two-dimensional array:

```matlab
% Create a 2-dimensional array of numbers
arr = [1 2 3; 4 5 6; 7 8 9];

% Get the first element of the first row
first_element = arr(1, 1);

% Get the last element of the last row
last_element = arr(end, end);
```

Note that when indexing the last element of an array, you should use the keyword "end" instead of the actual index number, as this will always refer to the last element regardless of the size of the array.