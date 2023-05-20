In Python, an alias is an alternate name given to an existing function or module. Aliases in Python are often used to shorten the length of a call to long or frequently-used module or function names.

To create an alias in Python, you can use the `as` keyword.

Here's an example where aliasing is used to shorten the name of the `datetime` module:

```python
import datetime as dt

today = dt.date.today()
print(today)
```

In this example, we've imported the `datetime` module and given it the alias `dt`. This allows us to use `dt` instead of `datetime` whenever we reference the module.

Similarly, you can also use aliasing to shorten the name of variables as shown in the next example:

```python
import numpy as np

a = np.array([1, 2, 3])
print(a)
```

In this example, we've imported the `numpy` module and given it the alias `np`. Later on, we've created a NumPy array and given it the alias `a`. This allows us to use `np` instead of `numpy` whenever we reference the module and `a` instead of the variable name.

Overall, aliasing in Python allows us to write more concise code and reduce repetitive typing.