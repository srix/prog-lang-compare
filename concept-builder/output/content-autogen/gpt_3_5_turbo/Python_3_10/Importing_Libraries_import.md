To import libraries in Python 3.10, we use the `import` statement followed by the name of the library we want to import. Here's an example of how to import the `math` library, which provides various mathematical functions:

```python
import math

# calculate the square root of 16
result = math.sqrt(16)

print(result)  # output: 4.0
```

In this example, we import the `math` library and use the `sqrt()` function to calculate the square root of 16.

We can also use the `as` keyword to give an alias to the library we are importing. For example:

```python
import math as m

# calculate the sine of pi/2 radians
result = m.sin(m.pi/2)

print(result)  # output: 1.0
```

In this example, we import the `math` library but give it the alias `m`. We then use the alias to call the `sin()` function and calculate the sine of pi/2 radians.

Finally, we can import specific functions from a library using the `from` keyword. Here's an example:

```python
from math import sqrt, pi

# calculate the area of a circle with radius 5
result = pi * sqrt(5)

print(result)  # output: 8.866543904
```

In this example, we import only the `sqrt()` and `pi` functions from the `math` library using the `from` keyword. We then use these functions to calculate the area of a circle with radius 5.