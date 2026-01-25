In Python, we can use try/except/finally blocks to handle errors and exceptions that may occur during code execution. The general syntax for try/except/finally block in Python is as follows:

```
try:
    # some code that may raise an error or exception
except <exception_name>:
    # code to handle the exception
finally:
    # code to execute regardless of whether an exception was raised or not
```

Let's take a look at an example that shows how to use try/except/finally blocks in Python:

```python
def divide_numbers(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: division by zero")
    finally:
        print("Division operation complete")

    return result
```

In the above example, we have defined a function `divide_numbers(a, b)` that takes two arguments `a` and `b`, and attempts to divide `a` by `b`. Inside the function, we have specified a try/except/finally block that will handle any `ZeroDivisionError` that may occur during the division operation. 

If an exception occurs during the block, it will be caught by the `except` block, and an error message will be printed out to the console. Regardless of whether an exception is raised or not, the `finally` block will always execute, printing a message indicating that the operation is complete. 

#### Example 1: Divide by zero

Now, let's test our function by calling it with argument values that will cause a division by zero error:

```python
result = divide_numbers(10, 0)
```

Output:
```
Error: division by zero
Division operation complete
```

In this case, the `try` block has resulted in a division operation that is impossible, leading to an error. The `except` block has caught the zero division error and printed out an error message to the console, and the `finally` block has executed, printing a message indicating that the operation is complete.

#### Example 2: Divide two numbers

Now, let's call the function `divide_numbers()` with argument values that won't cause any exception:

```python
result = divide_numbers(10, 2)
```

Output:
```
Division operation complete
```

In this case, the try block has executed successfully without raising an exception, and so the except block has not been executed. However, the `finally` block has still executed, printing a message to indicate that the division operation is complete.