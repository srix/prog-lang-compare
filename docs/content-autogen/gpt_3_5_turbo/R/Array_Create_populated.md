To create an array in R, you can use the `array()` function. This function requires three arguments: the data to be used in the array, the dimensions of the array (as a vector), and names for each dimension (optional).
 
Here is an example:

```
# create a 3-dimensional array with dimensions 2, 3, and 4
my_array <- array(data = 1:24, dim = c(2, 3, 4))

# print the array
my_array
```

In this example, we created a 3-dimensional array named `my_array` with dimensions 2, 3, and 4. We used the `data` argument to specify the data to be used in the array (in this case, the integers from 1 to 24), and the `dim` argument to specify the dimensions of the array. 

Here is another example:

```
# create a 2-dimensional array with dimensions 2 and 3 and give names to the dimensions
my_array <- array(data = c(1, 2, 3, 4, 5, 6), dim = c(2, 3), dimnames = list(c("row1", "row2"), c("col1", "col2", "col3")))

# print the array
my_array
```

In this example, we created a 2-dimensional array named `my_array` with dimensions 2 and 3, and we gave names to each dimension using the `dimnames` argument. We also specified the data to be used in the array using the `data` argument.