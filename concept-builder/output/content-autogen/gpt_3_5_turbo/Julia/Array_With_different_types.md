In Julia, you can create an array with different types by using the Any type or by specifying the types of each element in the array. Here are two examples:

Example 1: Using Any type

```
arr = ["hello", 2, 3.5, true, 'c', [1, 2, 3], (4, 5)]

println(typeof(arr)) # Array{Any,1}
println(arr) # ["hello", 2, 3.5, true, 'c', [1, 2, 3], (4, 5)]
```

In this example, we have created an array called "arr" that contains elements of different types, including string, integer, float, boolean, char, array, and tuple. We have used the Any type to specify that the array can contain elements of any type. As a result, the type of the array is "Array{Any,1}".

Example 2: Specifying types of each element

```
arr = Union{Int64, Float64, String}["hello", 2, 3.5, "world", 4, 5.5]

println(typeof(arr)) # Array{Union{Float64, Int64, String},1}
println(arr) # ["hello", 2, 3.5, "world", 4, 5.5]
```

In this example, we have specified the types of each element in the array using the Union type, which allows the array to contain elements of type Int64, Float64, or String. As a result, the type of the array is "Array{Union{Float64, Int64, String},1}". The array contains elements of different types, such as string, integer, and float, but all elements belong to the specified types.