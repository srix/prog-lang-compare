To find the first element of an array in Python 3.10, we can simply access it using its index, which is 0.

Here is an example using a list:

```python
my_list = [10, 20, 30, 40, 50]
first_element = my_list[0]
print(first_element)  # Output: 10
```

In this example, we have defined a list `my_list` and assigned it some values. We have then accessed the first element of the list using its index `0` and assigned it to the variable `first_element`. Finally, we have printed the value of `first_element`.

Similarly, we can find the first element of an array using an index in a NumPy array:

```python
import numpy as np

my_array = np.array([10, 20, 30, 40, 50])
first_element = my_array[0]
print(first_element)  # Output: 10
```

In this example, we have defined a NumPy array `my_array` and assigned it some values. We have then accessed the first element of the array using its index `0` and assigned it to the variable `first_element`. Finally, we have printed the value of `first_element`.