In Haskell, we can check if a value is null/true/false using built-in functions such as `null`, `True`, and `False`.

1. To check if a list is empty (i.e. null), we can use the `null` function. It returns `True` if the list is empty and `False` otherwise. For example:

```
null [] -- returns True
null [1,2,3] -- returns False
```

2. To check if a boolean value is `True` or `False`, we can simply use the `True` and `False` keywords. For example:

```
True -- returns True, obviously
False -- returns False, obviously
```

3. To check if a value is `Nothing` (i.e. null), we can use pattern matching with the `Maybe` type. For example:

```
case maybeValue of
    Just x -> -- do something with x
    Nothing -> -- handle null case
```

In the above example, `maybeValue` is a value of type `Maybe a`, where `a` is the type of the value we are checking. If `maybeValue` is `Nothing`, it will match with the second pattern and we can handle the null case appropriately.