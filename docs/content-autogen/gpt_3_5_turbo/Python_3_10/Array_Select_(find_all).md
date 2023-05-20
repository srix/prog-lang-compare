To find all elements of an array satisfying a condition in Python 3.10, you can make use of list comprehension or the filter function.

List comprehension allows you to create a new list based on an existing one while applying a condition to filter out elements that do not meet the condition. Here is an example:

```python
# Example array of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Find all even numbers
even_numbers = [num for num in numbers if num % 2 == 0]

print(even_numbers) # Output: [2, 4, 6, 8]
```

In this example, `[num for num in numbers]` is creating a new list from the `numbers` array and `[if num % 2 == 0]` filters out all odd numbers from the newly created list.

Another way to do this is to use the `filter()` function, which takes two arguments: the condition to be met and the array to be filtered. Here is an example:

```python
# Example array of strings
fruits = ['apple', 'banana', 'cherry', 'kiwi']

# Find all fruits with more than 5 characters
long_fruits = list(filter(lambda x: len(x) > 5, fruits))

print(long_fruits) # Output: ['banana', 'cherry']
```

In this example, `filter(lambda x: len(x) > 5, fruits)` filters out all the fruits with less than 5 characters and creates a new list of long fruits.

These are some of the ways you can find all elements of an array satisfying a condition in Python 3.10.