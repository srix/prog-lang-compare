Try/catch/finally is typically not used in Haskell, as it is not a pure functional language. However, Haskell provides some control structures for exception handling which can be used to implement similar functionality as try/catch/finally.

One method of exception handling in Haskell is by using the `Control.Exception` module. This module provides a high-level interface for catching and handling different types of exceptions. Here is an example of how to use try/catch/finally in a Haskell function:

```haskell
import Control.Exception

myFunction :: IO ()
myFunction = do
  result <- try $ do
    putStrLn "Trying..."
    -- run some IO actions or functions here that may throw exceptions
    -- if an exception is thrown, it will be caught by the catch block
    return "Successful result"
  -- The catch block will handle exceptions
  catch (putStrLn $ "Caught an exception: " ++ show (result :: SomeException)) (\e -> return ())
  finally (putStrLn "Finally...") (putStrLn "Do something after try/catch")

main :: IO ()
main = do
  myFunction
```
In the above example, the `try` function wraps a block of code that could throw an exception. If the block throws an exception, it will be caught by the `catch` block, which handles the exception and prints a message. The `finally` block is executed after the `try` block is executed, regardless of whether an exception was thrown or not.

Note that the `Control.Exception` module is only meant to be used in specific scenarios and when necessary. Generally speaking, pure functional programming avoids side effects and mutation, and therefore does not need exception handling in the same way that other languages require it.