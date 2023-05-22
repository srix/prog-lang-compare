To create an array in Lua, you simply declare a variable and assign it a set of values enclosed in curly braces `{}`. Each value in the set is separated by a comma. Here are some examples:

```lua
-- Example 1: Creating an array of numbers
local myArray = {1, 2, 3, 4, 5}

-- Example 2: Creating an array of strings
local fruitArray = {"apple", "banana", "orange", "mango"}

-- Example 3: Creating a mixed array with different data types
local mixedArray = {1, "hello", true, 3.1416}
```

You can also create an empty array like this:

```lua
local emptyArray = {}
```

To access the elements of an array, you can use the indexing operator `[]` and the index number. The first element of an array is at index 1, the second at index 2, and so on. For example:

```lua
print(myArray[1])  -- Output: 1
print(fruitArray[3])  -- Output: orange
print(mixedArray[4])  -- Output: 3.1416
```

You can also loop through an array using the `for` loop. For example:

```lua
-- Prints all the elements of myArray
for i = 1, #myArray do
    print(myArray[i])
end
``` 

Note that the `#` symbol is used to get the length of the array, which is equal to the number of elements in the array.