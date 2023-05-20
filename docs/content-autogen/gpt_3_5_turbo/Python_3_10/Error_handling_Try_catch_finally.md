In Python 3.10, the `try/except/finally` block is used to handle unexpected errors or exceptions that may occur during the execution of a program. The try block allows us to write the block of code which can raise an exception, while the except block allows us to handle the exceptions that were raised in the try block. Finally, we can use this block to execute some code, regardless of whether an exception was raised or not.

Here's an example:

```python
try:
    a = int(input("Enter a number: "))
    b = int(input("Enter another number: "))
    print(a/b)
except ValueError:
    print("Invalid input. Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
finally:
    print("Thanks for using this program.")
```

In this example, we first try to get two numbers from the user and attempt to divide the first number by the second number. If the user enters invalid input (such as a non-numeric value) or tries to divide by zero, the corresponding exceptions (`ValueError` or `ZeroDivisionError`) will be caught and the appropriate error message will be printed. Finally, regardless of whether an exception was raised or not, we will always print a message thanking the user for using the program.

Here's another example:

```python
try:
    file = open("example.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File not found.")
finally:
    file.close()
```

In this example, we try to open a file named `example.txt` and read its contents. If the file is not found, we catch the `FileNotFoundError` exception and print an error message. Finally, regardless of whether an exception was raised or not, we will always close the file.