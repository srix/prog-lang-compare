To import libraries in python 3.10, we use the `import` keyword followed by the name of the library we want to import. Here are some examples:

```python
# Importing the math library
import math

# Using the sqrt function from the math library
print(math.sqrt(25)) # Output: 5.0
```

In the code above, we have imported the `math` library and used the `sqrt` function to calculate the square root of 25.

```python
# Importing a library with a custom name
import numpy as np

# Using the linspace function from the numpy library
print(np.linspace(0, 10, 5)) # Output: [ 0.   2.5  5.   7.5 10. ]
```

In the code above, we have imported the `numpy` library and given it a custom name `np`. We have then used the `linspace` function to generate an array of 5 evenly spaced numbers between 0 and 10.

```python
# Importing a specific function from a library
from random import randint

# Generating a random integer between 1 and 10
print(randint(1, 10)) # Output: a random integer between 1 and 10
```

In the code above, we have imported the `randint` function from the `random` library. We have then used the `randint` function to generate a random integer between 1 and 10.

Note that it is also possible to import all the functions from a library using `from library_name import *`, but this is generally not recommended as it can lead to naming conflicts and make code harder to read.