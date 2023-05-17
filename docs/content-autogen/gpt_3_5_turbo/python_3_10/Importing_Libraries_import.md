In Python 3.10, you can import libraries using the `import` statement. Here are some examples:

1. Importing the `math` library:

```python
import math

print(math.sqrt(16))

# Output: 4.0
```

2. Importing a function from a library:

```
from datetime import date

today = date.today()
print(today)

# Output: 2022-05-25
```

3. Aliasing a library:

```
import pandas as pd

data = pd.read_csv('data.csv')
print(data.head())

# Output: displays the first 5 rows of the data.csv file
```

4. Importing a user-defined module:

Assuming you have a module named `custom_module.py` with a function `greet(name)`, you can import it like this:

```
import custom_module

custom_module.greet('John')

# Output: Hello, John!
```

These are just a few examples of how to import libraries in Python 3.10. Keep in mind that there are many libraries available online that may require installation prior to importing.