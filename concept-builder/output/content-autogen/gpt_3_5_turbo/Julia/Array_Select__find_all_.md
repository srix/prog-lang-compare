To find all elements of an array satisfying a condition in Julia, you can use an array comprehension or the `filter` function.

1. Array Comprehension Example:
```julia
# Create an array of random integers
array = rand(1:10, 10)

# Find all even elements in the array
even_elements = [x for x in array if x % 2 == 0]

# Print the even elements
println(even_elements)
```

2. Filter Function Example:
```julia
# Create an array of random integers
array = rand(1:10, 10)

# Define a condition function to check if elements are even
is_even(x) = x % 2 == 0

# Filter the array based on the condition function
even_elements = filter(is_even, array)

# Print the even elements
println(even_elements)
```

Both of these methods will produce the same result. The output will be an array containing all the elements of the original array that satisfy the given condition. You can adjust the condition and the array to suit your needs.