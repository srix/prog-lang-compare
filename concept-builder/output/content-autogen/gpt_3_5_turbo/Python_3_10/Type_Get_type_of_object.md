In Python 3.10, you can get the type of an object by using the built-in `type()` function. Here's an example:

```python
# Example 1
x = 5  # integer
print(type(x))  # <class 'int'>

# Example 2
y = 4.5  # float
print(type(y))  # <class 'float'>

# Example 3
z = "hello"  # string
print(type(z))  # <class 'str'>

# Example 4
w = [1, 2, 3]  # list
print(type(w))  # <class 'list'>
```

In these examples, we define variables `x`, `y`, `z`, and `w` of different types, and use `type()` to obtain their types. Note that the output of `type()` includes the `class` keyword, followed by the name of the class (e.g. `int`, `float`, `str`, `list`, etc.).