To concatenate two arrays in MATLAB, you can use the `horzcat` or `vertcat` functions. 

The `horzcat` function concatenates arrays horizontally, meaning it adds columns to the end of the original arrays. 
```
% Example of horizontally concatenating two arrays
A = [1 2; 3 4];
B = [5 6; 7 8];
C = horzcat(A,B) % Creates a 2x4 array
```

The `vertcat` function concatenates arrays vertically, meaning it adds rows to the end of the original arrays. 

```
% Example of vertically concatenating two arrays
A = [1 2; 3 4];
B = [5 6; 7 8];
C = vertcat(A,B) % Creates a 4x2 array
```

Note that the arrays being concatenated must be of the same size along the dimension being concatenated.