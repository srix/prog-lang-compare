In Lua, a multidimensional array is called a table. Here's how you can create and initialize a multidimensional array in Lua:

```lua
-- Initializing a 2D array with 3 rows and 4 columns
local myArray = {}
for i=1,3 do
    myArray[i] = {}
    for j=1,4 do
        myArray[i][j] = 0
    end
end

-- Accessing a specific element in the array
print(myArray[2][3]) -- prints 0
```

In the above example, we create a 2D array with `3` rows and `4` columns. We initialize each element of the array to `0`. Then we have used indexing to print the value in the second row (`myArray[2]`) and third column (`myArray[2][3]`) of the array.

You can create multidimensional arrays of any size and with any type of values depending on your use-case.