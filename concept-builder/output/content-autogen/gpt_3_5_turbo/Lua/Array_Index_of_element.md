In Lua, you can get the index of an element in an array using the `table.index` function. This function takes two arguments: the array and the element you want to find the index of. Here is an example:

```lua
-- Define an array
fruits = {"apple", "banana", "orange"}

-- Get the index of "banana"
index = table.index(fruits, "banana")

-- Print the index
print(index)  -- Output: 2
```

In this example, we define an array `fruits` containing three elements. We then use the `table.index` function to get the index of the `"banana"` element. The function returns `2`, which is the index of `"banana"` in the array.

It's important to note that if the element you are searching for does not exist in the array, the `table.index` function will return `nil`. Here's an example:

```lua
-- Define an array
fruits = {"apple", "banana", "orange"}

-- Get the index of "grape"
index = table.index(fruits, "grape")

-- Print the index
print(index)  -- Output: nil
```

In this example, we try to get the index of `"grape"`, which is not in the `fruits` array. The `table.index` function returns `nil`, indicating that the element was not found in the array.