In Python, we can use multiple arguments in a function by defining the function with parameters. We can define the necessary parameters that the function should receive as input and use them in the function’s body. Here's how to do it in Python 3.10:

Example 1: Function with two arguments

```python
def add_numbers(a, b):
    result = a + b
    return result

sum = add_numbers(5, 10)

print(sum)  # Output: 15
```

In this example, the function `add_numbers` receives two parameters `a` and `b`. The function adds the two numbers passed as input and returns the result `result`.

Example 2: Function with arbitrary arguments

```python
def squares_sum(*args):
    result = 0
    for a in args:
        result += a * a
    return result

sum = squares_sum(1, 2, 3, 4, 5)

print(sum)  # Output: 55
```

In this example, we use the asterisk (`*`) before the parameter name to indicate that the number of arguments is arbitrary. In this function, the parameter `args` can receive any number of inputs as a tuple. The function calculates the sum of the squares of the numbers in the tuple. 

Example 3: Function with keyword arguments

```python
def greeting(name, age):
    print("Hello " + name + ", you are " + str(age) + " years old.")

greeting(name="John", age=30)
greeting(age=25, name="Jen")
```

In this example, we use keyword arguments to pass inputs to the function `greeting`. We specify the parameter names and their corresponding values separated by an equal sign. This allows us to pass the arguments in any order. 

By using multiple arguments, we can create functions that are more flexible and reusable in different parts of our code.