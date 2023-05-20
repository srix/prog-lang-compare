In Python, there is no `switch` statement like in other programming languages such as Java or C. However, you can simulate a `switch` statement using a dictionary or a function, also known as a dispatch table. Here's an example of how to use a dictionary as a `switch` statement in Python 3.10:

```
def case_zero():
    print("You typed zero")
    
def case_one():
    print("You typed one")
    
def case_default():
    print("Invalid input")

switch = {
    0: case_zero,
    1: case_one
}

user_input = int(input("Enter a number: "))

switch.get(user_input, case_default)()
```

In this example, the `switch` dictionary has keys that represent the user's input and values that are the functions to be called. If the user enters a number that is not a key in the `switch` dictionary, the `case_default` function is called.

Another way to simulate a `switch` statement in Python is to use a series of `if` and `elif` statements. Here's an example:

```
user_input = input("Enter a letter: ")

if user_input == "A":
    print("You typed A")
elif user_input == "B":
    print("You typed B")
else:
    print("Invalid input")
```

In this example, the `if` and `elif` statements act as the different cases in a `switch` statement. If the user enters a letter that is not handled by any of the `if` or `elif` statements, the `else` block is executed.