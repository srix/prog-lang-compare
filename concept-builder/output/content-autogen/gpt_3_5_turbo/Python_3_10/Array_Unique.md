To get the unique elements of an array in Python 3.10, you can use the built-in function `set()` which can be applied to any iterable. Here are the steps:

1. Create the array with duplicate elements:
   ```
   my_array = [2, 1, 3, 2, 4, 1, 5, 3, 5]
   ```
2. Use `set()` to get only unique elements of the array:
   ```
   unique_elements = set(my_array)
   ```
3. Convert the resulting set back into an array if needed:
   ```
   unique_array = list(unique_elements)
   ```

Here is the complete code with the output:

```
my_array = [2, 1, 3, 2, 4, 1, 5, 3, 5]

# get unique elements of the array
unique_elements = set(my_array)

# convert set back to array
unique_array = list(unique_elements)

print("Original array:", my_array)
print("Unique elements:", unique_array)
```

Output:
```
Original array: [2, 1, 3, 2, 4, 1, 5, 3, 5]
Unique elements: [1, 2, 3, 4, 5]
```