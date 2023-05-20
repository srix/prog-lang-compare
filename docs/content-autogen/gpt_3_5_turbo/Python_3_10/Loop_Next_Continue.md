Sure, I would be happy to explain how to use `next` and `continue` keywords in Python 3.10.

`next`:

In Python, `next` is a built-in function used to retrieve the next item from an iterable. Its syntaxis:

```python
next(iterator, default)
```

- `iterator`: the iterator to retrieve the next item from.
- `default` (optional): value to return if the iterator is exhausted. If this argument is not specified and the iterator is exhausted, a StopIteration error is raised.

Example:

```python
# Creating an iterator object
num_list = iter([1, 2, 3, 4, 5])

# Using the next() function to retrieve items from the iterator
print(next(num_list))    # Output: 1
print(next(num_list))    # Output: 2
print(next(num_list))    # Output: 3
```

`continue`:

In Python, the continue statement is used to skip the current iteration of a loop and continue with the next one. Its syntax is:

```python
continue
```

Example:

```python
# Using continue keyword inside a loop
for i in range(1, 6):
    if i % 2 == 0:
        continue
    print(i)

# Output: 1 3 5

# In the above example, we have used the continue keyword to skip printing the even numbers, and we only print the odd numbers in the range from 1 to 5.
```

I hope this helps you in understanding the usage of `next` and `continue` in Python 3.10. Let me know if you have any questions.