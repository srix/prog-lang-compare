Python 3.10, unlike some other programming languages such as C++ or Java, doesn't have a built-in `switch` statement. Instead, you can use a dictionary or if-elif-else statements to achieve similar functionality.

Using a dictionary is generally considered more pythonic. Here's an example of how to use a dictionary to simulate a switch statement:

```python
def switch_example(num):
    switcher = {
        0: "Zero",
        1: "One",
        2: "Two"
     }
    
    return switcher.get(num, "Invalid input")
```

In the above code, we create a dictionary called `switcher`, where each key represents a possible input value and its corresponding value represents the output value. We then use the `get()` method of the dictionary to retrieve the value that corresponds to the input value. If the input value is not in the dictionary, the `get()` method returns the default value "Invalid input".

Here's an example of how to use `if-elif-else` statements to achieve similar functionality:

```python
def switch_example(num):
    if num == 0:
        return "Zero"
    elif num == 1:
        return "One"
    elif num == 2:
        return "Two"
    else:
        return "Invalid input"
```

In this example, we use `if-elif-else` statements to check if the input value matches each possible case, and return the corresponding output value. If the input value doesn't match any of the cases, the function returns the default value "Invalid input".