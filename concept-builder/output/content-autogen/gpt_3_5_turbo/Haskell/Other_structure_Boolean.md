In Haskell, the Boolean type represents True or False values. 

To create a Boolean value, we can write `True` or `False` directly in our code:

```haskell
x = True
y = False
```

We can use Boolean values in logical expressions, which return a Boolean result. Here are some examples:

```haskell
-- Logical AND operation
True && True  -- returns True
True && False -- returns False
False && True -- returns False
False && False -- returns False

-- Logical OR operation
True || True -- returns True
True || False -- returns True
False || True -- returns True
False || False -- returns False

-- Logical NOT operation
not True -- returns False
not False -- returns True
```

In Haskell, we can also use Boolean values in conditional statements. For example:

```haskell
if x == True
  then "x is True"
  else "x is False"
```

This code will return "x is True" if `x` is `True`, or "x is False" if `x` is `False`.