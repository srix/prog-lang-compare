In Python, there are various ways to sort an array. Here are a few ways to do it in Python 3.10:

1. Sorting using the Sorted Function: 

The "sorted" function returns a sorted list, without modifying the original. Here is an example:

```python
arr = [7, 3, 8, 2, 1, 5, 9, 4, 6]
sorted_arr = sorted(arr)
print(sorted_arr)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

2. Sorting using the sort Method:

The "sort" method modifies the original list. Here is an example:

```python
arr = [7, 3, 8, 2, 1, 5, 9, 4, 6]
arr.sort()
print(arr)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

3. Sorting using the "key" Argument:

You can also pass a custom function, using the "key" argument, to specify how the sorting should be done. Here is an example:

```python
def my_func(x):
    return x % 3

arr = [7, 3, 8, 2, 1, 5, 9, 4, 6]
sorted_arr = sorted(arr, key=my_func)
print(sorted_arr)  # Output: [3, 6, 9, 1, 4, 7, 2, 5, 8]
```

In this example, we have defined a function that returns the remainder of each element after division by 3. We pass this function to the "key" argument of the "sorted" function. The elements are sorted based on the value returned by this function.

Note: The same "key" argument can also be used with the "sort" method.