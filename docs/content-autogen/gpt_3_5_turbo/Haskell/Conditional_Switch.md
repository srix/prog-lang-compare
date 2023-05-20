In Haskell, the `switch` statement is not available. However, the same functionality can be achieved using the `case` expression. 

The `case` expression allows a value to be pattern matched against a series of patterns. When a pattern matches, the corresponding expression is evaluated and returned. 

Here is an example of how to use `case` in Haskell:

```
isEven :: Int -> String
isEven n = case mod n 2 of
             0 -> "Even"
             1 -> "Odd"
```

In this example, we define a function `isEven` which take an `Int` argument and returns a `String` indicating whether the number is even or odd. We use the `case` expression to pattern match against the result of `mod n 2`, which gives us whether the number is even (0) or odd (1). 

Another example:

```
getGrade :: Int -> String
getGrade score = case score of
                   90 -> "A"
                   80 -> "B"
                   70 -> "C"
                   _  -> "Fail"
```

In this example, we define a function `getGrade` which takes an `Int` argument and returns a `String` indicating the corresponding grade. We use the `case` expression to pattern match against the value of `score`. If the value of `score` is 90, 80, or 70, we return the corresponding grade ("A", "B", or "C"). If the value of `score` does not match any of the patterns, we return "Fail". The underscore symbol (_) is used as a catch-all pattern that matches any value.