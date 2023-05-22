To add an element to an array in Lua, you can use the `table.insert` function. This function has two arguments: the table to which the element should be added and the value of the element itself. For example:

```
-- Define an array
myArray = {"apple", "banana", "orange"}

-- Add a new element to the end of the array
table.insert(myArray, "kiwi")

-- Print the updated array
for i = 1, #myArray do
    print(myArray[i])
end
```

In this example, we define an array called `myArray` with three elements. We then use `table.insert` to add a new element to the end of the array with the value "kiwi". Finally, we use a `for` loop to print out the updated array.

The output of this code would be:
```
apple
banana
orange
kiwi
```

You can also add an element at a specific index in the array by passing an additional argument to `table.insert`, which specifies the index at which the element should be added. For example:

```
-- Define an array
myArray = {"apple", "banana", "orange"}

-- Add a new element at index 2
table.insert(myArray, 2, "kiwi")

-- Print the updated array
for i = 1, #myArray do
    print(myArray[i])
end
```

In this example, we use `table.insert` with an additional argument of `2` to add the element "kiwi" at index 2 of the array. The output of this code would be:
```
apple
kiwi
banana
orange
```