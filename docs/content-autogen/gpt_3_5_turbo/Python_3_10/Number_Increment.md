In Python, to increment a number you can use the `+= 1` or `++` operator.

The `+= 1` operator adds 1 to the current value of a number variable. For example:

```python
number = 5
number += 1    # Increment number by 1
print(number)  # Output: 6
```

The `++` operator is a little different because it doesn't actually exist in Python. What it does is it adds 1 to the value of a number then immediately subtracts 1 again, effectively doing nothing. For example:

```python
number = 5
number++    # Increment number by 1 (DOES NOT WORK IN PYTHON)
print(number)  # Output: 5
```

It's also important to note that this `++` operator is not used in Python 3.10 or any other Python version.