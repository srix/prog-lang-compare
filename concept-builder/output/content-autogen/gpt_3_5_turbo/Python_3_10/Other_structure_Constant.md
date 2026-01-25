In Python, a constant is a variable whose value cannot be changed. Python does not have any built-in keyword to declare a constant. However, you can declare a constant using uppercase letters as variable names or by using the `const` library in Python 3.10. 

Here are examples of both methods to declare and use a constant in Python 3.10:

#### Method 1 - Using Uppercase Letters

```python
PI = 3.14159
RADIUS = 5.0

area = PI * (RADIUS ** 2)

print("The area of the circle is", area)
```

In this example, `PI` and `RADIUS` are declared as constants using uppercase letters. They are then used to calculate the area of the circle. Once the constants are defined they cannot be changed.

#### Method 2 - Using const library

```python
from const import const

# define a constant
MY_CONSTANT = const(10)

# try to change the value of the constant
MY_CONSTANT = 20

print(MY_CONSTANT)
```

In this example, we are importing the `const` library to declare a constant. The `const` function takes an argument for the value of the constant. Once defined, the value of the constant cannot be changed. In this example, `MY_CONSTANT` is defined as 10, but when we try to change the value to 20, we get an error. When declaring constants using the `const` library, you cannot change the value after it has been assigned. 

I hope this helps!