In Lua, we can change all the elements of an array using a loop. Here's an example code snippet that uses a for-loop to change every element of an array:

```
-- Creating an array with some initial values
array = {1, 2, 3, 4, 5}

-- Loop to change each element of the array
for i = 1, #array do
  array[i] = array[i] * 2 -- doubling each element of the array
end

-- Printing the updated array
for i = 1, #array do
  print(array[i])
end
```

Output:
```
2
4
6
8
10
```

In the example above, we created an array with some initial values and then used a `for` loop to iterate through each element of the array and doubled each element. Finally, we printed the updated array using another `for` loop.

Similarly, we can use any kind of operations or functions inside the loop to change all elements of the array according to our needs.