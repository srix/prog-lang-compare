In Python 3.10, you can convert a string to an integer by using the `int()` function. 

Here is an example:

```python
# Convert a string to an integer
num_str = "10"
num_int = int(num_str)

# Print the value of num_int
print(num_int)
```

Output:
```
10
```

If the string is not a valid integer, a `ValueError` will be raised. For example:

```python
# Convert a string to an integer
num_str = "10.5"

try:
    num_int = int(num_str)
    print(num_int)
except ValueError as e:
    print(e)
```

Output:
```
invalid literal for int() with base 10: '10.5'
```

You can also specify the base of the integer using the `base` parameter of `int()`. For example:

```python
# Convert a string to an integer with a specific base
num_str = "101"
num_int = int(num_str, 2)

# Print the value of num_int
print(num_int)
```

Output:
```
5
```

In this example, the base of the integer is 2 (binary), so the string `"101"` is converted to the integer `5`.