In R, you can get the size or length of an array using the `length()` function. Here are some examples:

Example 1: Getting the size of a vector

```
# Create a vector
vec <- c(1, 2, 3, 4, 5)

# Get the size of the vector
length(vec)
```

Output:
```
[1] 5
```

Example 2: Getting the size of a matrix

```
# Create a matrix
mat <- matrix(1:6, nrow = 2, ncol = 3)

# Get the size of the matrix
length(mat)
```

Output:
```
[1] 6
```

Example 3: Getting the size of a 3D array

```
# Create a 3D array
arr <- array(1:24, dim = c(2, 3, 4))

# Get the size of the 3D array
length(arr)
```

Output:
```
[1] 24
```

In all these examples, the `length()` function returns the number of elements in the array.