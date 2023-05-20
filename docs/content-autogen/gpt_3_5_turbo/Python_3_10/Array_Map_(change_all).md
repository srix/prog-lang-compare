To change all elements of an array in Python 3.10, you can iterate through the array using a loop and modify each element one by one. Here's an example:

```python
# Create an array of integers
my_array = [1, 2, 3, 4]

# Iterate through the array and add 1 to each element
for i in range(len(my_array)):
    my_array[i] = my_array[i] + 1

# Print the modified array
print(my_array)
```

Output:
```
[2, 3, 4, 5]
```

In this example, we have used a `for` loop to iterate through each element of the array and added 1 to each element. You can modify the array in any way you want based on your requirement.

Another way to modify all elements of an array is to use list comprehension which is a shorter and more pythonic way of achieving the same result. Here's an example:

```python
# Create an array of integers
my_array = [1, 2, 3, 4]

# Use list comprehension to add 1 to each element
my_array = [i + 1 for i in my_array]

# Print the modified array
print(my_array)
```

Output:
```
[2, 3, 4, 5]
```

Here, we have used a list comprehension to create a new list where each element is the original element of the array incremented by 1. Finally, we have assigned the new list back to the original array variable.