Sure, here's an explanation with examples on how to delete an element from an array in R:

An array is a collection of data values of the same data type, stored in a matrix-like format. An array can have one or multiple dimensions.

To delete an element from an array in R, we use the "-" sign to specify the index of the element that we want to delete.

Here's an example:

Let's say we have an array of integers of size 3x3:

```
my_array <- array(data = c(1, 2, 3, 4, 5, 6, 7, 8, 9), dim = c(3, 3))
```

This will create an array with the values:

```
, , 1

      [,1] [,2] [,3]
[1,]    1    4    7
[2,]    2    5    8
[3,]    3    6    9
```

If we want to delete the element in the first row and first column, we can use the "-" sign to specify the indices we want to keep:

```
new_array <- my_array[-1, -1]
```

This will create a new array without the first row and first column:

```
, , 1

     [,1] [,2]
[1,]    5    8
[2,]    6    9
```

As you can see, the first row and column of the original array has been removed.

I hope this helps!