In Python, there are different ways to add an element to an array. Here are three common methods:

Method 1: Using the append() method

The append() method adds an element to the end of the array. Here's an example:

```python
# Initializing an empty array
my_array = []

# Adding elements to the array
my_array.append("apple")
my_array.append("banana")
my_array.append("cherry")

# Printing the updated array
print(my_array)
```

Output:
```
['apple', 'banana', 'cherry']
```

Method 2: Using the insert() method

The insert() method adds an element at a specific index in the array. Here's an example:

```python
# Initializing an array
my_array = ['apple', 'banana', 'cherry']

# Adding an element at index 1
my_array.insert(1, "orange")

# Printing the updated array
print(my_array)
```

Output:
```
['apple', 'orange', 'banana', 'cherry']
```

Method 3: Using the + operator

The + operator allows you to concatenate two arrays. Here's an example:

```python
# Initializing two arrays
array1 = [1, 2, 3]
array2 = [4, 5, 6]

# Concatenating the two arrays
result_array = array1 + array2

# Printing the updated array
print(result_array)
```

Output:
```
[1, 2, 3, 4, 5, 6]
```