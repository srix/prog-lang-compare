In R, multidimensional arrays can be created using the `array()` function. It takes three arguments: data, dimensions, and dimnames. Here's an example:

```
# Create a 3-dimensional array
arr <- array(data = c(1, 2, 3, 4, 5, 6), dim = c(2, 3, 2))

# Print the array
arr
```

Output:
```
, , 1

     [,1] [,2] [,3]
[1,]    1    3    5
[2,]    2    4    6

, , 2

     [,1] [,2] [,3]
[1,]    1    3    5
[2,]    2    4    6
```

In the above example, `data` contains the values of the array. `dim` is an argument used to specify the size of each dimension, and `dimnames` is an optional argument that lets you name each dimension.