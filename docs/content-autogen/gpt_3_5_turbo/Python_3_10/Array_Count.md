To count the number of elements in an array matching a condition in Python 3.10, we can use the built-in `sum()` function along with a list comprehension to create a boolean array representing whether each element in the array satisfies the condition. We can then pass this boolean array to `sum()`, which will add up all the `True` values and return the total count.

Here's an example code snippet to demonstrate this approach:

```python
# create a sample array of integers
arr = [2, 4, 6, 8, 10, 12]

# count the number of even numbers in the array
count = sum([num % 2 == 0 for num in arr])

# print the result
print(f"There are {count} even numbers in the array.")
```

In this example, we create an array `arr` containing the integers 2 through 12. We then use a list comprehension `[num % 2 == 0 for num in arr]` to create a boolean array where each value is `True` if the corresponding element in `arr` is even (i.e., has no remainder when divided by 2), and `False` otherwise. We pass this boolean array to `sum()`, which adds up all the `True` values and returns the count of even numbers in the array. The output of this code will be:

```
There are 6 even numbers in the array.
```

You can modify the condition in the list comprehension to count any other subset of elements matching your desired criteria.