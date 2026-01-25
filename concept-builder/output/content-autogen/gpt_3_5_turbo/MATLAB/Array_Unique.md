To get the unique elements of an array in MATLAB, you can use the `unique` function. 

The syntax for using the `unique` function is as follows:

```
[C, ia, ic] = unique(A)
```

where `A` is the input array, `C` is the vector of unique values in `A`, `ia` is the index vector that describes the mapping of `C` to the original array `A`, and `ic` is the index vector that describes the mapping of `A` to `C`. 

Here is an example:

```
A = [3, 4, 1, 2, 4, 6, 2];

[C, ia, ic] = unique(A)

```

The output will be:

```
C = 
  1  2  3  4  6

ia =
  3  4  1  2  6

ic =
  3  4  1  2  4  5  2
```

This means that the unique elements of `A` are `[1, 2, 3, 4, 6]`, and the index vector `ia` shows the position of each unique element in the original array `A`, while the index vector `ic` shows which elements in `A` correspond to each unique element in `C`.