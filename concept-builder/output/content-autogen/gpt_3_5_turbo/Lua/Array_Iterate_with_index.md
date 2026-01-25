In Lua, you can iterate over an array with index using a `for` loop. Here's an example:

```
local arr = {10, 20, 30, 40}

for i = 1, #arr do
  print("Index: " .. i .. " Value: " .. arr[i])
end
```

In this example, the `for` loop starts at index 1 and iterates up to the length of the array using the `#arr` operator. Within the loop, we print out each index and corresponding value using the `arr[i]` syntax.

This will output:

```
Index: 1 Value: 10
Index: 2 Value: 20
Index: 3 Value: 30
Index: 4 Value: 40
``` 

You can modify the loop to only iterate over a portion of the array by adjusting the loop bounds. For example, if you want to iterate over the first three elements of the array, you can set the loop to `for i = 1, 3 do`.