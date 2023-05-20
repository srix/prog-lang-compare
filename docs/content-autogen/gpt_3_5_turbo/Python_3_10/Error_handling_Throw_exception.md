In Python, throwing an exception means raising an error or an exceptional event that interrupts the normal flow of the program. To throw an exception in Python 3.10, you can use the `raise` statement with an exception class or an exception instance. Here are some examples:

1. Raise an exception class:

```python
class MyException(Exception):
    pass

def my_function():
    raise MyException("This is my exception message.")

try:
    my_function()
except MyException as e:
    print(e)
```

In this example, we define a custom exception class called `MyException` that inherits from the built-in `Exception` class. We define a function called `my_function()` that raises an instance of `MyException` with a specific message. We then wrap the call to `my_function()` with a `try` block and catch the exception with an `except` block that specifies `MyException` as the exception class. Finally, we print the exception message.

The output of this code would be:

```
This is my exception message.
```

2. Raise an exception instance:

```python
try:
    x = 10
    if x > 5:
        raise ValueError("x should be less than or equal to 5.")
except ValueError as e:
    print(e)
```

In this example, we define an integer variable `x` and check if it is greater than 5. If it is, we raise a `ValueError` instance with a specific message. We then catch the exception with an `except` block that specifies `ValueError` as the exception class. Finally, we print the exception message.

The output of this code would be:

```
x should be less than or equal to 5.
```