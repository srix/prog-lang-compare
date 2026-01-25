In Python, a constant list is a list that cannot be modified after it is created. This can be achieved by using the `tuple` data type instead of the `list` data type. Here is an example:

```python
# creating a constant list
my_list = (1, 2, 3, 4, 5)

# trying to modify the constant list will raise an error
my_list[0] = 10
```

Output:

```
TypeError: 'tuple' object does not support item assignment
```

As you can see, trying to modify the constant list `my_list` by changing its first element, raises a `TypeError` because tuples are immutable.

Another way to create a constant list in Python is by using the `frozenset` function. Here is an example:

```python
# creating a constant list
my_list = frozenset([1, 2, 3, 4, 5])

# trying to modify the constant list will raise an error
my_list.add(6)
```

Output:

```
AttributeError: 'frozenset' object has no attribute 'add'
```

As you can see, trying to modify the constant list `my_list` by adding an element to it, raises an `AttributeError` because frozensets are immutable. 

Therefore, to create a constant list in Python, you can use either `tuple` or `frozenset` data types.