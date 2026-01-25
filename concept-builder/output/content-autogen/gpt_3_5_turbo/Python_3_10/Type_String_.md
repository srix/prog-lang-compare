To check if a string is a number in Python 3.10, you can use the `isdigit()` or `isnumeric()` method.

Here is an example using `isdigit()`:

```
string = "1234"
if string.isdigit():
    print("The string is a number.")
else:
    print("The string is not a number.")
```

Output:
```
The string is a number.
```

Note that `isdigit()` method returns `True` only if all the characters in the string are digits.

Here is an example using `isnumeric()`:

```
string = "ⅠⅡⅢⅣⅤ"
if string.isnumeric():
    print("The string is a number.")
else:
    print("The string is not a number.")
```

Output:
```
The string is a number.
```

Note that `isnumeric()` method is more general than `isdigit()`, as it returns `True` not only for digits but also for other numeric characters such as fractions, subscripts and superscripts. 

In addition, you can also try to convert the string into a number using `int()` or `float()`. If there is an error, then the string is not a number.

Example using `int()`:

```
string = "1234"
try:
    num = int(string)
    print("The string is a number.")
except ValueError:
    print("The string is not a number.")
```

Output:
```
The string is a number.
```

Example using `float()`:

```
string = "12.34"
try:
    num = float(string)
    print("The string is a number.")
except ValueError:
    print("The string is not a number.")
```

Output:
```
The string is a number.
```