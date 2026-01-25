In Lua, arrays can be sorted using the `table.sort()` function.

The `table.sort()` function can take an optional function argument that determines how the array elements should be sorted. If the function is not provided, the default sorting method is used which sorts elements in ascending order.

Here's an example of sorting an array of numbers in ascending order:

```lua
local numbers = { 10, 5, 15, 3 }
table.sort(numbers)
print(table.concat(numbers, ", ")) -- Output: 3, 5, 10, 15
```

In this example, we first create an array of numbers. Then we sort the array using `table.sort()`. Finally, we use `table.concat()` to print the sorted array as a string.

If we wanted to sort the array in descending order, we can pass a sorting function as an argument to `table.sort()`. The sorting function should return `true` if the first argument should come before the second argument in the sorted array, or `false` otherwise.

Here's an example of sorting an array of numbers in descending order:

```lua
local numbers = { 10, 5, 15, 3 }
table.sort(numbers, function(a, b)
    return a > b
end)
print(table.concat(numbers, ", ")) -- Output: 15, 10, 5, 3
```

In this example, we pass a sorting function that sorts the values in descending order. The sorting function checks if `a` is greater than `b` and returns `true` if so, which means that `a` should come before `b` in the sorted array.