In Python, try/except blocks are used for catching exceptions that may occur during program execution. The general syntax for using try/except in Python is:

```
try:
    # Code that may raise an exception
except ExceptionType as e:
    # Code to handle the exception
finally:
    # Code that will run whether or not an exception was raised
```

- The `try` block contains the code that may raise an exception.
- The `except` block catches any exceptions that occur and handles them. The `as` keyword allows you to name the exception object that is created.
- The `finally` block contains code that will be executed regardless of whether or not an exception was raised.

Here's an example of how to use try/catch/finally with a message in Python:

```python
try:
    # Do something that may raise an exception
    x = 1 / 0
except ZeroDivisionError as e:
    # Handle the exception with a custom message
    print(f"Error: {e}, Division by zero is not allowed")
finally:
    # Code that will always execute
    print("Program execution complete")
```

In this example, we are trying to divide 1 by 0, which will raise a `ZeroDivisionError`. We catch this exception in the `except` block and print a custom error message. The `finally` block contains code that will always execute, whether or not an exception was raised.

Another example could be handling a `FileNotFoundError` exception while trying to read from a non-existent file. 

```python
try:
    # Do something that may raise an exception
    with open("nonexistentfile.txt") as f:
        data = f.read()
except FileNotFoundError as e:
    # Handle the exception with a custom message
    print(f"Error: {e}, The file does not exist")
finally:
    # Code that will always execute
    print("Program execution complete")
```

In this example, we are trying to read from a file that does not exist. This will raise a `FileNotFoundError`, which we catch in the `except` block and print a custom error message. The `finally` block contains code that will always execute, whether or not an exception was raised.