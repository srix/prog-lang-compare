In Python 3.10, `and` and `or` are logical operators used to evaluate multiple conditions. 

The `and` operator returns `True` if both conditions are `True`. For example, we can use `and` to check if a variable is between two values:

```
x = 10
if x > 5 and x < 15:
    print("x is between 5 and 15")
```

The output will be:
```
x is between 5 and 15
```

The `or` operator returns `True` if at least one of the conditions is `True`. For example, we can use `or` to check if a variable is either equal to 5 or equal to 10:

```
x = 5
if x == 5 or x == 10:
    print("x is either 5 or 10")
```

The output will be:
```
x is either 5 or 10
```

We can also use `and` and `or` together to create more complex conditions. For example:

```
x = 10
y = 20
if (x > 5 and x < 15) or (y > 15 and y < 25):
    print("either x is between 5 and 15 or y is between 15 and 25")
```

The output will be:
```
either x is between 5 and 15 or y is between 15 and 25
```