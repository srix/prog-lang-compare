In Haskell, we can define functions that take multiple arguments. To specify multiple arguments, we separate the arguments by spaces in the function definition. 

Here is an example of defining a function with multiple arguments:

```
add :: Int -> Int -> Int
add x y = x + y
```

In this example, we are defining a function `add` that takes two `Int` arguments (`x` and `y`) and returns the result of their addition. The `->` symbol specifies the argument and return types in the function signature. 

We can call this function by passing in two `Int` values as arguments:

```
add 3 4 -- returns 7
```

Here, the function `add` is called with the arguments `3` and `4`. The function returns the sum of these numbers, which is `7`.

We can also define functions that take more than two arguments. Here is another example:

```
concatStrings :: String -> String -> String -> String
concatStrings a b c = a ++ b ++ c
```

In this example, we are defining a function `concatStrings` that takes three `String` arguments (`a`, `b`, and `c`) and returns the result of concatenating them. 

We can call this function by passing in three `String` values as arguments:

```
concatStrings "hello" " " "world" -- returns "hello world"
```

Here, the function `concatStrings` is called with the arguments `"hello"`, `" "`, and `"world"`. The function returns the concatenated string `"hello world"`.