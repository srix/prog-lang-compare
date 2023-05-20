In Haskell, we use the if-then-else expression for conditional evaluation. It takes the following syntax:

```
if condition then expression1 else expression2
```

Here, `condition` can be any boolean expression that evaluates to `True` or `False`. If the `condition` is `True`, then `expression1` is evaluated, otherwise `expression2` is evaluated.

For example, consider the following `if` statement that checks whether a number is even or odd:

```haskell
main = do
  let x = 5
  if even x then putStrLn "Even" else putStrLn "Odd"
```

Here, we check if the number `x` is even or not using the `even` function. If it is even, we print "Even", otherwise we print "Odd".

Another example of using `if` with assignment is to find the maximum of two numbers:

```haskell
maxNumber :: Int -> Int -> Int
maxNumber a b = if a > b then a else b

main = do
  let x = 4
      y = 5
      max = maxNumber x y
  putStrLn ("The maximum of " ++ show x ++ " and " ++ show y ++ " is " ++ show max)
```

Here, we define a function `maxNumber` that takes two `Int` arguments and returns the maximum value using the `if` statement. Then we use this function to find the maximum of two numbers `x` and `y`, and assign it to `max`. Finally, we print the result to the console using `putStrLn`.