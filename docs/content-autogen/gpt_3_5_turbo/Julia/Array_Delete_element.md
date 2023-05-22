In Julia, you can delete an element from an array using the `splice!` function.

The `splice!` function takes three arguments: the array to modify, the start index of the elements to remove, and the number of elements to remove.

Here's an example:

```julia
# Define an array
array = [1, 2, 3, 4, 5]

# Remove the element at index 3
splice!(array, 3, 1)

# Print the modified array
println(array) # Output: [1, 2, 4, 5]
```

In this example, we defined an array `[1, 2, 3, 4, 5]`. We used the `splice!` function to remove the element at index 3 by specifying the array to modify (`array`), the start index of the element to remove (`3`), and the number of elements to remove (`1`).

After calling `splice!`, the modified array will be `[1, 2, 4, 5]`.

You can also use the `deleteat!` function to remove elements from an array based on given indices. Here's an example:

```julia
# Define an array
array = [1, 2, 3, 4, 5]

# Remove elements at index 2 and 4
deleteat!(array, [2, 4])

# Print the modified array
println(array) # Output: [1, 3, 5]
```

In this example, we defined an array `[1, 2, 3, 4, 5]`. We used the `deleteat!` function to remove the elements at index 2 and 4 by specifying the array to modify (`array`) and the indices of the elements to remove (`[2, 4]`).

After calling `deleteat!`, the modified array will be `[1, 3, 5]`.