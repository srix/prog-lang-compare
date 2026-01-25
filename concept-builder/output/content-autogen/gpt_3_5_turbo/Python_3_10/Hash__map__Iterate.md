In Python 3.10, we can iterate over a hash using the `items()` method. The `items()` method returns a list of the hash's (key, value) tuple pairs. Here is an example:

```python
# create a hash
my_hash = {"name": "John", "age": 25, "city": "New York"}

# iterate over the hash using items()
for key, value in my_hash.items():
    print(key, value)
```

This will output:

```
name John
age 25
city New York
```

Additionally, we can use the `keys()` and `values()` methods to iterate over only the keys or only the values of the hash. Here are examples of both:

```python
# iterate over only the keys of the hash
for key in my_hash.keys():
    print(key)
```

This will output:

```
name
age
city
```

```python
# iterate over only the values of the hash
for value in my_hash.values():
    print(value)
```

This will output:

```
John
25
New York
```