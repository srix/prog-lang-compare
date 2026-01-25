In Python 3.10, you can declare a method or function using the following syntax:

```
def function_name(parameter1, parameter2, ...):
    # function body
    return value
```

The `def` keyword is used to define the function, followed by the `function_name` which should be a unique identifier for the function. The parentheses `()` contain the parameter names separated by commas (if there are any), and the colon `:` signifies the start of the function body.

Here's an example of a simple function that calculates the sum of two numbers:

```
def add_numbers(num1, num2):
    sum = num1 + num2
    return sum
```

We can call the function above and pass it two numbers like this:

```
result = add_numbers(5, 7)
print(result) # Output: 12
```

Another example function that returns the maximum of three numbers:

```
def find_maximum(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else:
        return num3
```

We can call the function above and pass it three numbers like this:

```
result = find_maximum(3, 7, 1)
print(result) # Output: 7
```