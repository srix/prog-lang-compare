In Python 3.10, we can use the new `union` feature of the typing module to create an array with different types. Here is an example:

```python
from typing import Union

my_array = [Union[int, str], Union[float, bool]]()
```

In this example, we created an array with two elements, where the first element can be either an integer or a string, and the second element can be either a float or a boolean.

We can also initialize the array with values:

```python
my_array = [Union[int, str], Union[float, bool]](["hello", 3.14])
```

This initializes the first element of the array with the string "hello" and the second element with the float value 3.14.

Another example would be creating an array with different types of numerical values:

```python
my_array = [Union[int, float], Union[complex, bool]]([1, 2.5, True, 4 + 2j])
```

This creates an array with four elements, where the first element can be either an integer or a float, the second element can be either a complex number or a boolean, and initializes them with the values 1, 2.5, True, and 4+2j respectively.