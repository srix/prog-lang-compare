To find all elements of an array satisfying a condition in Python 3.10, we can use list comprehension. List comprehension is one of the easiest ways to create a new list based on an existing list. 

Let's consider an example below which returns the list of all even numbers from an input list "arr":

```python
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_numbers = [num for num in arr if num % 2 == 0]

print(even_numbers)   # [2, 4, 6, 8, 10]
```

In the above example, the list comprehension creates a new list "even_numbers" containing only elements from the "arr" list that are divisible by 2.

We can also use lambda functions with filter() function to achieve the same result. Let's see how this can be accomplished below:

```python
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_numbers = list(filter(lambda x: x % 2 == 0, arr))

print(even_numbers)   # [2, 4, 6, 8, 10]
```

In the above example, the filter() function takes a lambda function as its first argument and applies it to each element in the input list "arr". The lambda function evaluates if the element is divisible by 2 and returns True if it is, else it returns False. Finally, the filter() function returns an iterable object with only the elements from "arr" that evaluate to True for the lambda function. The iteratable object can then be converted to a list using the list() function.

These methods can be used to satisfy any condition necessary and can be combined with other methods such as map() and reduce() to create more complex data structures.