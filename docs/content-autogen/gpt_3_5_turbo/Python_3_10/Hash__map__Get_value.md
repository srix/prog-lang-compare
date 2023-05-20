To get the value of a key in a hash (or dictionary) in Python 3.10, you can use the indexing syntax by providing the key inside square brackets. If the key is present in the dictionary, this will return its corresponding value.

Here is an example:

``` python
# Create a dictionary
my_dict = {'apple': 2, 'banana': 5, 'orange': 1}

# Retrieve the value of the 'apple' key
apple_value = my_dict['apple']
print(apple_value)  # Output: 2
```

In the above example, we created a dictionary named `my_dict` with three key-value pairs. We retrieved the value of the 'apple' key by using the indexing syntax and assigned it to the variable `apple_value`. Finally, we printed the value of the variable `apple_value` to the console.

If the key you are trying to retrieve doesn't exist in the dictionary, an error is raised. Here's an example:

``` python
# Create a dictionary
my_dict = {'apple': 2, 'banana': 5, 'orange': 1}

# Try to retrieve a non-existent key
mango_value = my_dict['mango']
```

In the above example, we tried to retrieve the value of a non-existent key named 'mango'. This raises a `KeyError` with the message "mango". To handle this error, you can use the `get()` method instead, which returns `None` (or a default value of your choice) instead of raising an error. Here's an example:

``` python
# Create a dictionary
my_dict = {'apple': 2, 'banana': 5, 'orange': 1}

# Try to retrieve a non-existent key with get() method
mango_value = my_dict.get('mango')

# mango_value is None
print(mango_value)  # Output: None

# You can also provide a default value of your choice
mango_value = my_dict.get('mango', 'not found')
print(mango_value)  # Output: not found
``` 

In this example, we used the `get()` method to retrieve the value of the 'mango' key. Since 'mango' is not present in the dictionary, `get()` returns `None` by default. We then printed the value of the variable `mango_value` to the console. We also showed how to provide a default value using the second argument of the `get()` method.