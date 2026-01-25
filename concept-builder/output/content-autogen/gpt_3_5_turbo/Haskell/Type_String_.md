In Haskell, you can check if a string is a number by using the `reads` function. The `reads` function takes a string and returns a list of pairs where each pair contains a parsed value and the remaining unparsed string. If the string can be parsed as a number, then the list contains a single pair with the parsed number and an empty string.

Here's an example code snippet:

```
isNumber :: String -> Bool
isNumber str =
  case reads str :: [(Double, String)] of
    [(_, "")] -> True
    _ -> False
```

In this code, we define a function `isNumber` which takes a string `str` and returns a boolean value indicating whether `str` can be parsed as a number.

The `reads` function is used with a type annotation specifying that we want to parse a `Double`, and the result is a list of pairs `[(Double, String)]`.

The `case` expression checks whether the `reads` function returned a list with a single pair where the second element is an empty string. If so, then `str` can be parsed as a number and the function returns `True`. Otherwise, the function returns `False`.

Here are some example inputs and their expected outputs:

```
isNumber "123"         -- True
isNumber "0.123"       -- True
isNumber "-42"         -- True
isNumber "not a num"   -- False
isNumber ""            -- False
```