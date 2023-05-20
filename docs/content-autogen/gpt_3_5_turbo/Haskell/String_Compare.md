In Haskell, strings are represented as lists of characters. To compare strings, we can compare each element of the list using the equality operator (`==`) or the comparison operators (`<`, `>`, `<=`, `>=`).

Here is an example of comparing two strings using the equality operator:

```haskell
compareStrings :: String -> String -> Bool
compareStrings s1 s2 = s1 == s2
```

We can also compare two strings character by character using pattern matching:

```haskell
compareStrings :: String -> String -> Bool
compareStrings [] [] = True
compareStrings (x:xs) (y:ys) = x == y && compareStrings xs ys
compareStrings _ _ = False
```

The first pattern matches on empty strings and returns `True`. The second pattern matches the heads of the two strings (`x` and `y`) and recursively checks the tails of the strings (`xs` and `ys`). If the heads are equal and the tails are equal, it returns `True`. The third pattern matches any other cases and returns `False`.

Example of how to compare two strings using the above function:

```haskell
ghci> compareStrings "hello" "hello"  -- returns True
ghci> compareStrings "hello" "world"  -- returns False
```

Note that there is also a built-in function `compare` which returns an `Ordering` value (`LT`, `EQ`, or `GT`) and can be used to sort strings. Here is an example:

```haskell
ghci> compare "hello" "world"  -- returns LT
```