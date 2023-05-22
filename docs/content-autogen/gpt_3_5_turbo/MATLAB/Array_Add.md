To add an element to an array in MATLAB, you can use either the `end` keyword or the index of the last element in the array plus one. Here are some examples:

1. Using the `end` keyword:
```
A = [1 2 3];
A(end+1) = 4;
disp(A);
```
Output: `[1 2 3 4]`

2. Using the index of the last element plus one:
```
B = [5 6 7];
B(length(B)+1) = 8;
disp(B);
```
Output: `[5 6 7 8]`

Note: It's important to make sure that the index you use for adding an element is within the bounds of the array.