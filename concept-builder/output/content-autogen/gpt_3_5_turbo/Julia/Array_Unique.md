In Julia, one way to get the unique elements of an array is to use the `unique()` function. Here's an example:

```julia
# Creating an array with repeated elements
arr = [2, 4, 6, 2, 8, 4, 1, 2, 6]

# Using the unique() function to get the unique elements
unique_arr = unique(arr)

# Printing out the unique elements
println(unique_arr) # Output: [2, 4, 6, 8, 1]
```

In the example above, we first created an array `arr` that contains repeated elements. We then used the `unique()` function to get an array of the unique elements, which we stored in the `unique_arr` variable. Finally, we printed out the `unique_arr` variable to see the unique elements of the original array.

Note that the `unique()` function preserves the order of the elements in the original array. If you don't care about the order, you can use the `Set()` function to get a set of the unique elements instead:

```julia
# Creating an array with repeated elements
arr = [2, 4, 6, 2, 8, 4, 1, 2, 6]

# Using the Set() function to get the unique elements
unique_set = Set(arr)

# Printing out the unique elements
println(unique_set) # Output: Set([4, 2, 6, 8, 1])
```

In this example, we used the `Set()` function to get a set of the unique elements of the original array. Note that the elements in the set may be in a different order than the original array.