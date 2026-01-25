In Python, you can reduce an array to a single value using the `reduce()` function from the `functools` module. 

The `reduce()` function takes two arguments: a function and an iterable. The function is applied to the first two elements of the iterable, and then to the result and the next element, and so on, until the entire iterable is reduced to a single value. 

Here's an example of using `reduce()` to find the product of all the elements in an array:

```python
from functools import reduce

array = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x*y, array)
print(product) # Output: 120 (1 * 2 * 3 * 4 * 5)
```

In the above code, we imported the `reduce()` function from the `functools` module and defined an array `array` with the values `[1, 2, 3, 4, 5]`. We then passed a lambda function `lambda x, y: x*y` to the `reduce()` function, which multiplies two numbers. The `reduce()` function then multiplies all the elements of the array consecutively using the lambda function, resulting in the final value 120.

Here's another example that demonstrates how we can use `reduce()` to find the maximum element in an array:

```python
from functools import reduce

array = [5, 3, 7, 2, 8]
maximum_element = reduce(lambda x, y: x if x > y else y, array)
print(maximum_element) # Output: 8
```

In the above code, we defined an array `array` with the values `[5, 3, 7, 2, 8]`. We then passed a lambda function `lambda x, y: x if x > y else y` to the `reduce()` function, which returns the maximum value of `x` and `y`. The `reduce()` function then compares all the elements in the array using the lambda function, resulting in the final value 8.