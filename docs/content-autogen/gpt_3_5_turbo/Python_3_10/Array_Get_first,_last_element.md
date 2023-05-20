To get the first and last element of an array in Python 3.10, you can use indexing.

For example, suppose you have an array named `arr` that contains integers:

```python
arr = [1, 2, 3, 4, 5]
```

To get the first element of the array, use the index 0:

```python
first_element = arr[0]
print(first_element)
# Output: 1
```

To get the last element of the array, use the index -1:

```python
last_element = arr[-1]
print(last_element)
# Output: 5
```

Alternatively, you can also use Python's array slicing syntax to get the first and last element:

```python
first_element = arr[:1][0]
print(first_element)
# Output: 1

last_element = arr[-1:]
print(last_element[0])
# Output: 5
```

In the above code, `arr[:1]` gives a list slice that contains the first element of the array, and `arr[-1:]` gives a list slice that contains the last element of the array. The `[0]` after each slice retrieves the actual element from the slice.