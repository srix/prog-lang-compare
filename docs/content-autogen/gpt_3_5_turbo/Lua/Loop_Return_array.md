In Lua, to return an array from a function, you can simply create and return a table with the desired array elements.

Here's an example:

```lua
-- Function to create and return an array
function createArray()
  local array = {}  -- Initialize empty table

  -- Add elements to the array
  for i = 1, 5 do
    array[i] = i * 2
  end

  return array  -- Return table (array)
end

-- Call function and print array elements
local array = createArray()
for i = 1, #array do
  print(array[i])
end
```

This code will create an array of size 5 with elements 2, 4, 6, 8, and 10. It will then return the array and print its elements using a for loop. 

Output:
```
2
4
6
8
10
```