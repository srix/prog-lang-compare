In Python 3.10, you can check for null/true/false using the following syntax:

To check if a value is null, you can use the keyword `None`. Here's an example:

```
value = None
if value is None:
    print("Value is null")
else:
    print("Value is not null")
```

To check if a value is true or false, you can use the keywords `True` and `False`. Here's an example:

```
value = True
if value is True:
    print("Value is true")
else:
    print("Value is false")
```

Alternatively, since boolean values are actually subclassed from integers in Python, you can also use the built-in functions `bool` and `isinstance` to check for boolean values. Here's an example:

```
value = True
if isinstance(value, bool) and bool(value) is True:
    print("Value is true")
else:
    print("Value is false")
``` 

This will print "Value is true" because `value` is a boolean and its value is `True`.