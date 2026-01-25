In Python, we return a value from a function or method using the `return` statement. The returned value can be of any data type, including strings, numbers, lists, and dictionaries. Here are some examples:

Example 1: A function that returns the sum of two numbers

```python
def add_numbers(a, b):
    sum = a + b
    return sum

result = add_numbers(3, 5)
print(result) # Output: 8
```

In this example, the function `add_numbers` takes two arguments `a` and `b`, adds them, and returns the sum using the `return` statement. We then call the function with arguments `3` and `5`, and assign the returned value to a variable `result`. Finally, we print the value of `result`, which is `8`.

Example 2: A method that returns a list of even numbers

```python
class NumberList:
    def get_even_numbers(self, nums):
        even_nums = [num for num in nums if num % 2 == 0]
        return even_nums

nl = NumberList()
result = nl.get_even_numbers([1, 2, 3, 4, 5, 6, 7, 8])
print(result) # Output: [2, 4, 6, 8]
```

In this example, we define a `NumberList` class with a method `get_even_numbers` that takes a list of numbers as an argument. The method filters out the even numbers from the list using a list comprehension and returns the result using the `return` statement. We create an instance of the `NumberList` class and call the `get_even_numbers` method with a list of numbers. We then assign the returned list to a variable `result` and print it, which gives us `[2, 4, 6, 8]`.