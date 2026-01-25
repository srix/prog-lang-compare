In Python 3.10, you can assign variables using the `:=` (also called the walrus operator) syntax. 

The `:=` operator is used to assign the value to a variable and return the same value. This operator is especially useful in situations where you need to evaluate a condition and assign the result to a variable in the same line of code.

Here are some examples:

```python
# Assign value to a variable based on a condition
x = 10
if (y := x + 1) > 10:
    print("y is greater than 10")
else:
    print("y is less than or equal to 10")

# Assign values to multiple variables based on conditions
if (x := input("Enter a number: ")) and (y := input("Enter another number: ")):
    print("Sum of", x, "and", y, "=", int(x)+int(y))
else:
    print("Please enter valid numbers")

# Use in list comprehension
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers if (flag := x % 2 == 0)]
print(squared_numbers)
```

In the first example, we assign the value of `x + 1` to `y` using `:=` and check if `y` is greater than `10`. If it is, we print a message saying so; otherwise, we print a different message.

In the second example, we ask the user to enter two numbers, then assign those values to `x` and `y` using `:=`. We then print the sum of the two numbers if they are both valid inputs.

In the final example, we use `:=` in a list comprehension to check if each number is even, and if so, we square the number and add it to a new list.