In Lua, concatenating two arrays means merging elements of one array into another array to create a new array. To concatenate two arrays, you can use the `table.concat()` function. The `table.concat()` function takes two parameters, the first parameter is the table (array) to concatenate and the second parameter is the delimiter string. The delimiter string is optional, you can specify it to add a separator between the concatenated elements.

Here's an example:

```lua
-- Define the two arrays
array1 = {"apple", "banana", "cherry"}
array2 = {"orange", "mango", "pineapple"}

-- Concatenate the arrays using the table.concat() function
result = table.concat(array1, ", ") .. ", " .. table.concat(array2, ", ")

-- Print the concatenated array
print(result)
```

In this example, we have two arrays `array1` and `array2`. We are concatenating them using the `table.concat()` function and adding a comma and space as a delimiter between the elements. Finally, we are printing the concatenated array.

The output of the above code would be:

```lua
apple, banana, cherry, orange, mango, pineapple
```

In this way, you can concatenate two arrays in Lua.