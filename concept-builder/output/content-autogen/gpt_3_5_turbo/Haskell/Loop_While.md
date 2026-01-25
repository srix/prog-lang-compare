In Haskell, the `while` construct is not available in the standard library, but it can be easily defined using recursion. 

Here is an example of how to define `while` function using recursion:

```haskell
-- Define a while function that takes a condition and an action
while :: (a -> Bool) -> (a -> a) -> a -> a
while condition action a
  -- Base case: if the condition is no longer true, return a
  | not (condition a) = a
  -- Recursive case: apply the action to a and continue the loop
  | otherwise = while condition action (action a)
```

Here is an example of how to use the `while` function:

```haskell
-- Define a condition and an action
condition :: Int -> Bool
condition i = i < 10

action :: Int -> Int
action i = i + 1

-- Use the while function to repeatedly apply the action until the condition is no longer true
result = while condition action 0

-- Output: 10
```

In this example, the `while` function is used to repeatedly apply the `action` function to the variable `a` until the `condition` is no longer true. The `result` variable will hold the value of `a` when the loop terminates.