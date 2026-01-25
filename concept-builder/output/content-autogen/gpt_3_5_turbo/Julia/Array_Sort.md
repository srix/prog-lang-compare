To sort an array in Julia, you can use the built-in `sort()` function. Here are examples of how to sort arrays in ascending and descending order:

Sorting in ascending order:

```julia
# Sorting an array of integers
arr_int = [13, 7, 21, 4, 55]
sorted_int = sort(arr_int)
println(sorted_int) # Output: [4, 7, 13, 21, 55]

# Sorting an array of strings
arr_str = ["apple", "banana", "kiwi", "lemon", "orange"]
sorted_str = sort(arr_str)
println(sorted_str) # Output: ["apple", "banana", "kiwi", "lemon", "orange"]
```

Sorting in descending order:

```julia
# Sorting an array of integers
arr_int = [13, 7, 21, 4, 55]
sorted_int = sort(arr_int, rev=true)
println(sorted_int) # Output: [55, 21, 13, 7, 4]

# Sorting an array of strings
arr_str = ["apple", "banana", "kiwi", "lemon", "orange"]
sorted_str = sort(arr_str, rev=true)
println(sorted_str) # Output: ["orange", "lemon", "kiwi", "banana", "apple"]
```

Note that the `rev` argument is set to `true` for sorting in descending order.