To get the unique elements of an array in R, you can use the `unique()` function. This function returns a vector with only the unique elements of the input vector or array.

Here's an example:

```r
# Create an array with some duplicates
my_array <- c(1, 2, 3, 2, 4, 3, 5, 1)

# Get unique elements of the array
unique_elements <- unique(my_array)

# Display unique elements
unique_elements
```

Output:

```r
[1] 1 2 3 4 5
```

In this example, the original array `my_array` contained duplicates. The `unique()` function returned a vector with only the unique elements of the array, which was assigned to `unique_elements`. Finally, `unique_elements` was displayed, showing only the unique elements of the original array.