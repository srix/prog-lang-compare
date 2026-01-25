In Lua, we can get the unique elements of an array by using a loop and a table to keep track of which elements have already been added. Here's an example of how to accomplish that:

```
-- Define the original array
local originalArray = {1, 2, 1, 3, 4, 2, 5}

-- Define an empty table to keep track of unique elements
local uniqueTable = {}

-- Define an empty array to hold the final unique elements
local uniqueArray = {}

-- Loop through the original array
for i = 1, #originalArray do
  local currentItem = originalArray[i]
  
  -- Check if the current item already exists in the unique table
  if not uniqueTable[currentItem] then
    -- If it doesn't exist, add it to the unique table and unique array
    uniqueTable[currentItem] = true
    table.insert(uniqueArray, currentItem)
  end
end

-- Print the final result
for i = 1, #uniqueArray do
  print(uniqueArray[i])
end
```

In this example, the `originalArray` contains some duplicate elements. We then create an empty `uniqueTable` to keep track of unique elements, and an empty `uniqueArray` to hold the final unique elements.

We then loop through the `originalArray`, and for each item we check if it already exists in the `uniqueTable`. If it doesn't exist, we add it to the `uniqueTable` and `uniqueArray`.

Finally, we loop through the `uniqueArray` and print out each element, which will be the unique elements of the original array in the order they first appeared.

The output of this example will be:

```
1
2
3
4
5
```