In Haskell, converting an integer to a string is very simple. You can use the `show` function to accomplish this. Here is an example:

```haskell
numberToString :: Int -> String
numberToString num = show num
```

In this example, the `numberToString` function takes an integer `num` and returns its string representation using the `show` function. For example:

```haskell
> numberToString 123
"123"
```

Note that `show` can work with other types of values in Haskell, not just integers. For example, if you wanted to convert a boolean value to a string, you could also use `show`:

```haskell
> show True
"True"
```
