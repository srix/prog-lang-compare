In Haskell, the `for` function is used to iterate over a range of values. The function takes three arguments:

1. The starting value of the range
2. The ending value of the range
3. A function to be applied to each value in the range

The syntax for the `for` function is as follows:

```
for :: Monad m => a -> a -> (a -> m ()) -> m ()
```

Here's an example of how to use the `for` function:

```haskell
import Control.Monad

main = forM_ [1..5] $ \i -> do
  putStrLn $ "Iteration " ++ show i
```

In this example, the `forM_` function is used instead of `for`. The `forM_` function is a monadic version of the `for` function and is often preferred in Haskell. The first argument to `forM_` is the range of values to iterate over (`[1..5]`), the second argument is a function to apply to each value, and in this case, it's an anonymous function that prints a message to the console with the iteration number.

The output of running this program would look like this:

```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

Note that the `show` function is used to convert the integer value of `i` to a string so that it can be concatenated with the message string in the `putStrLn` function.
