In Julia, you can get the first and last element of an array using the `first()` and `last()` functions respectively. Here are some examples:

```julia
# Define an array
arr = [2, 4, 6, 8, 10]

# Get the first element
first_element = first(arr)   # Output: 2

# Get the last element
last_element = last(arr)     # Output: 10
```

You can also get the first and last element of a multi-dimensional array by specifying the dimension along which you want to get the element. Here's an example:

```julia
# Define a 2D array
arr_2d = [1 2 3; 4 5 6; 7 8 9]

# Get the first element along the rows
first_row_element = first(arr_2d, dims=1)   # Output: [1 2 3]

# Get the first element along the columns
first_col_element = first(arr_2d, dims=2)   # Output: [1; 4; 7]

# Get the last element along the rows
last_row_element = last(arr_2d, dims=1)     # Output: [7 8 9]

# Get the last element along the columns
last_col_element = last(arr_2d, dims=2)     # Output: [3; 6; 9]
```