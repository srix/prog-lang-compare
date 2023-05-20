In Haskell, `unless` is a predefined function in the `Control.Monad` module. It is used to perform a certain action only if a given Boolean expression is `False`. The syntax of the `unless` function is as follows:

```haskell
unless :: Monad m => Bool -> m () -> m ()
```

Here, `Monad` is a typeclass, and `m` is a type variable that represents a monadic type. The `Bool` argument is the Boolean expression to be tested, and the second argument is the action to be performed if the Boolean expression is `False`. The `m ()` part represents the monadic action, which can be thought of as a function that takes no arguments and returns no value.

Here's an example that demonstrates the use of the `unless` function in Haskell:

```haskell
import Control.Monad

main = do
    putStrLn "Enter a number:"
    input <- getLine
    unless (null input) $ do
        let num = read input
        putStrLn ("The number is " ++ show num)
```

In this example, the program prompts the user to enter a number. If the user enters a non-empty string, the program converts the string to a number and prints it. If the user enters an empty string, nothing happens. This behavior is achieved using the `unless` function. The `null input` expression returns `True` if the input string is empty, so the action inside the `$` symbol is only executed if the input string is not empty.
