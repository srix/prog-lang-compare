In Lua, to delete an element from a table (which can be used as an array), you need to use the `table.remove()` function. This function removes the element at the specified index from the table and shifts any elements after it to fill the gap. 

Here is an example:

```lua
-- create an array of numbers
myArray = {10, 20, 30, 40, 50}

-- remove the element at index 3 (which is 30)
table.remove(myArray, 3)

-- print the array to show that 30 was removed
for i = 1, #myArray do
  print(myArray[i])
end
```

Output:
```
10
20
40
50
```

Note that `table.remove()` returns the value of the removed element. If you don't need this value, you can just call the function with the table and index as arguments, like this: 

```lua
table.remove(myArray, 3)
``` 

If you want to remove the last element of the array, you can simply call `table.remove()` without specifying an index. For example: 

```lua
-- create an array of numbers
myArray = {10, 20, 30, 40, 50}

-- remove the last element (which is 50)
table.remove(myArray)

-- print the array to show that 50 was removed
for i = 1, #myArray do
  print(myArray[i])
end
```

Output: 
```
10
20
30
40
``` 

I hope this helps!