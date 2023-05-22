To get the size of an array in MATLAB, you can use the `size` function. 

Syntax: `size(A)` or `size(A,dim)`

Here, `A` is the array whose size you want to determine, and `dim` is the dimension for which you want to retrieve the size. If `dim` is not given, the size of all dimensions will be returned.

Example 1: To get the size of a 2D array, use the following code:

```
A = [1 2 3; 4 5 6; 7 8 9];
sz = size(A);
disp(sz);
```

Output:
```
3 3
```
The output shows that `A` is a 3x3 array i.e., it has 3 rows and 3 columns.

Example 2: To get the size of a 3D array, use the following code:

```
B = rand(2,3,4);
sz = size(B);
disp(sz);
```

Output:
```
2 3 4
```
The output shows that `B` is a 3D array with dimensions 2, 3, and 4.

Example 3: To get the size of a particular dimension of an array, use the following code:

```
C = [1 2 3; 4 5 6; 7 8 9];
sz1 = size(C,1);
sz2 = size(C,2);
disp(sz1);
disp(sz2);
```

Output:
```
3
3
```
The output shows that `C` has 3 rows (dimension 1) and 3 columns (dimension 2).