In Python 3.10, you can use the built-in `sqrt()` function from the `math` module to get the square root of a number. 

Here's an example of how to use `sqrt()`:

```python
import math

# calculate the square root of 16
result = math.sqrt(16)

# print the result
print(result)
```

Output:

```
4.0
```

You can also use variables to store the input value and the result, like this:

```python
import math

# get user input for the number to find the square root of
number = float(input("Enter a number: "))

# calculate the square root of the input number
result = math.sqrt(number)

# print the result
print("The square root of", number, "is", result)
```

Output:

```
Enter a number: 25
The square root of 25.0 is 5.0
```