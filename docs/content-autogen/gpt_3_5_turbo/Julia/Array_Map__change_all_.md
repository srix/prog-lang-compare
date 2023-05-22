To change all elements of an array in Julia, you simply need to assign new values to each element of the array using a loop or a comprehension. Here are some examples:

1. Using a for loop:

```
# Define the original array
original_array = [1, 2, 3, 4, 5]

# Define the new values that we want to assign to the elements
new_value = 10

# Use a for loop to assign the new value to each element of the array
for i in 1:length(original_array)
    original_array[i] = new_value
end

# Print the updated array
println(original_array)  # Output: [10, 10, 10, 10, 10]
```

2. Using a comprehension:

```
# Define the original array
original_array = [1, 2, 3, 4, 5]

# Define the new value that we want to assign to the elements
new_value = 20

# Use a comprehension to create a new array with the updated values
new_array = [new_value for i in 1:length(original_array)]

# Print the updated array
println(new_array)  # Output: [20, 20, 20, 20, 20]
```

Both of these methods will change all the elements of the original array to the new value. Note that the original array is modified in the first example but a new array is created in the second example.