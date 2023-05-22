In Julia, you can use the `findfirst()` function to get the index of the first occurrence of an element in an array. Here is an example:

```julia
# defining an array
my_array = [2, 4, 6, 8, 10]

# finding the index of the first occurrence of '6'
index = findfirst(x -> x==6, my_array)

# printing the result
println("The index of '6' is $index")

# output: The index of '6' is 3
```

In the above example, the `findfirst()` function takes two arguments: the first is a function that defines the condition for the element we want to find and the second is the array in which we want to look for this element. 

The function `x -> x==6` is a lambda function in Julia that checks if a given element `x` is equal to `6`. It is passed as the first argument to the `findfirst()` function to define the condition for which element we are looking for. When executed, this code outputs the index of the first occurrence of `6` in the array `my_array`, which is `3`. 

You can also use the `findall()` function to get the indices of all occurrences of an element in an array. Here is an example:

```julia
# defining an array
my_array = [2, 4, 6, 8, 10, 6]

# finding the index of all occurrences of '6'
indices = findall(x -> x==6, my_array)

# printing the result
println("The indices of '6' are $indices")

# output: The indices of '6' are [3, 6]
```

In the above example, the `findall()` function finds all the indices of the elements that satisfy the condition `x -> x==6`. The result is a vector of indices `[3, 6]`, corresponding to the indices of both occurrences of `6` in the array `my_array`.