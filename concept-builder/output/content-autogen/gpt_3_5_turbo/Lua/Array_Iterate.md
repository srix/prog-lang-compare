To iterate over an array in Lua, you can use a `for` loop. Here's an example:

```lua
-- Create an array
myArray = {'apple', 'banana', 'orange'}

-- Iterate over the array and print each element
for i = 1, #myArray do
  print(myArray[i])
end
```

This code creates an array called `myArray` with three elements. The `for` loop then iterates over the array using the `#` operator to determine the length of the array. For each loop iteration, the current array element is printed to the console.

Alternatively, you can also use the `ipairs` function to iterate over an array:

```lua
-- Create an array
myArray = {'apple', 'banana', 'orange'}

-- Iterate over the array and print each element
for i, value in ipairs(myArray) do
  print(value)
end
```

The `ipairs` function returns a key-value pair where the key is the index of the array element, and the value is the element itself. The `for` loop iterates over the array and prints each value.