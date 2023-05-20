In Python 3.10, you can access the value of a key in a dictionary (or hash) using the bracket notation.

Here's an example code that shows how to get the value of a specific key in a Python dictionary:

```
# Define a dictionary
my_dict = {'name': 'John', 'age': 35, 'gender': 'Male'}

# Get the value of a key
name_value = my_dict['name']

# Print the value
print(name_value)
```

Output:

```
John
```

In the example above, we defined a Python dictionary `my_dict` with three keys `'name'`, `'age'`, and `'gender'`. To access the value of the `'name'` key, we used the bracket notation `my_dict['name']` which returns the value `'John'` since `'John'` is the value associated with the `'name'` key.

Similarly, you can access the values of other keys in the dictionary by using the bracket notation with the respective key names.

Here's another example code that shows how to get the value of a key in a nested dictionary:

```
# Define a nested dictionary
my_dict = {'person1': {'name': 'John', 'age': 35}, 'person2': {'name': 'Mary', 'age': 25}}

# Get the value of a key
name_value = my_dict['person1']['name']

# Print the value
print(name_value)
```

Output:

```
John
```

In the example above, we defined a nested Python dictionary `my_dict` with two keys `'person1'` and `'person2'`, each containing a dictionary with `'name'` and `'age'` keys. To access the value of the `'name'` key of the `'person1'` dictionary, we used the bracket notation with both keys: `my_dict['person1']['name']` which returns the value `'John'`.