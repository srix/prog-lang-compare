Ternary expressions in Haskell are a way to perform a quick conditional check within an expression. The syntax for the ternary operator in Haskell is:

```
condition ? true_expression : false_expression
```

Here, `condition` is the statement being evaluated, `true_expression` is the expression to be returned if the `condition` is true, and `false_expression` is the expression to be returned if the `condition` is false.

Here are a few examples of using ternary expressions in Haskell:

```
-- Example 1
-- This function takes in a integer x and returns the string "positive" if x is positive, else it returns "non-positive".
checkPositivity :: Int -> String
checkPositivity x = if x > 0 then "positive" else "non-positive"

-- We can also write the above function using a ternary expression:
checkPositivity' :: Int -> String
checkPositivity' x = (if x > 0 then "positive" else "non-positive") -- Here, we're evaluating the conditional statement (x > 0) followed by the true/false expressions

-- Example 2
-- This function calculates the absolute value of a number x
absValue :: Float -> Float
absValue x = if x > 0 then x else -x

-- We can also write the above function using a ternary expression:
absValue' :: Float -> Float
absValue' x = (x > 0) ? x : (-x) -- Here, we're evaluating the conditional statement (x > 0) followed by the true/false expressions, separated by the ternary operator '?'

-- Example 3
-- This function takes in two integers x and y, and returns the larger of the two
findMax :: Int -> Int -> Int
findMax x y = if x > y then x else y

-- We can also write the above function using a ternary expression:
findMax' :: Int -> Int -> Int
findMax' x y = (x > y) ? x : y -- Here, we're evaluating the conditional statement (x > y) followed by the true/false expressions, separated by the ternary operator '?'
```

I hope this helps you understand how to use ternary expressions in Haskell!