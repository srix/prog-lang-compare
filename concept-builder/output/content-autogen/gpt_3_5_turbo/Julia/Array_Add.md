In Julia, to add an element to an array, we can use the `push!()` function. Here's an example:

```julia
# Declaring an array
my_array = [1, 2, 3, 4, 5]

# Adding an element at the end of the array
push!(my_array, 6)

# Checking the updated array
println(my_array)   # Output: [1, 2, 3, 4, 5, 6]
```

We can also add multiple elements at once using the `push!()` function. Here's an example:

```julia
# Declaring an empty array
my_array = []

# Adding multiple elements to the array
push!(my_array, 1, 2, 3, 4, 5)

# Checking the updated array
println(my_array)   # Output: [1, 2, 3, 4, 5]
```

We can also use the `append!()` function to concatenate one or more arrays. Here's an example:

```julia
# Declaring two arrays
my_array_1 = [1, 2, 3]
my_array_2 = [4, 5, 6]

# Appending the second array to the first array
append!(my_array_1, my_array_2)

# Checking the updated array
println(my_array_1)   # Output: [1, 2, 3, 4, 5, 6]
```