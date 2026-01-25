In Lua, you can find all elements of an array satisfying a condition by using a loop, and the `table` library's functions.

Here's an example code that shows how to find all elements of an array that are greater than a certain number:

```lua
-- Sample array
local arr = {5, 10, 15, 20, 25}

-- Function to find all elements greater than a number
function findElementsGreaterThan(arr, num)
    local result = {}
    for i, v in ipairs(arr) do
        if v > num then
            table.insert(result, v)
        end
    end
    return result
end

-- Call the function and print the result
local elements = findElementsGreaterThan(arr, 15)
print(table.concat(elements, ", "))  -- Output: 20, 25
```

In this example, the `findElementsGreaterThan()` function takes the array and a number as inputs, and returns a new array with all elements greater than the given number. It uses a `for` loop to traverse the elements of the input array, and the `table.insert()` function to add the matching elements to the result array. Finally, the `table.concat()` function is used to convert the result array into a string that can be printed.