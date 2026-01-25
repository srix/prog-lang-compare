In Python 3.10, you can use the "walrus" operator `:=` to change all elements of an array. Here's an example:

```python
# Initialize the array
numbers = [1, 2, 3, 4, 5]

# Change all elements of the array
(numbers := [x * 2 for x in numbers])

# Print the updated array
print(numbers)
```

Output:
```
[2, 4, 6, 8, 10]
```
In this example, we first initialize an array called `numbers` with some values. We then use a list comprehension to double each element in the array, and assign the new list to `numbers` using the walrus operator `:=`. Finally, we print out the updated `numbers` list. 

Another way to accomplish the same result without using the walrus operator is to simply re-assign the new list to the variable holding the old list:

```python
# Initialize the array
numbers = [1, 2, 3, 4, 5]

# Change all elements of the array
numbers = [x * 2 for x in numbers]

# Print the updated array
print(numbers)
```

Output:
```
[2, 4, 6, 8, 10]
```
This achieves the same result but without using the walrus operator.