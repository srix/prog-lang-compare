In Lua, you can reduce an array to a single value by using the `table.reduce()` function. This function takes two arguments: the array to be reduced and a function that specifies how to perform the reduction.

Here's an example that reduces an array of numbers to their sum:

```lua
local function sum(a, b)
  return a + b
end

local arr = {1, 2, 3, 4, 5}

local total = table.reduce(arr, sum)

print(total) -- Output: 15
```

In this example, the `sum` function takes two arguments and returns their sum. The `table.reduce()` function applies this function to the elements of the `arr` array sequentially, starting with the first two elements (1 and 2) and then adding the result to the next element (3), and so on until the entire array has been reduced to a single value.

You can use the `table.reduce()` function to perform other types of reductions as well. For example, here's how you can find the maximum element in an array:

```lua
local function max(a, b)
  if a > b then
    return a
  else
    return b
  end
end

local arr = {1, 9, 2, 5, 7}

local max_value = table.reduce(arr, max)

print(max_value) -- Output: 9
```

In this example, the `max` function takes two arguments and returns the larger of the two. The `table.reduce()` function applies this function to the elements of the `arr` array sequentially, comparing each element to the previous maximum value and returning the greater of the two. At the end of the reduction, the maximum value in the array is returned.