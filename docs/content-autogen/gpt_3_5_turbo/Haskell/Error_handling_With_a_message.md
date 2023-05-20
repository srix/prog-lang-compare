In Haskell, we use the `Control.Exception` module to handle exceptions. The general syntax for using try/catch/finally in Haskell is as follows:

```haskell
import Control.Exception

main = do
    result <- try $ do
         -- code that may throw an exception
         return "Success" -- return value if no exception is thrown
    case result of
        Left exception -> do
            putStrLn $ "Caught exception: " ++ show (exception :: SomeException)
        Right success -> do
            putStrLn $ "Success: " ++ success
    finally Block
```
Here, `try` wraps the code block that might throw an exception. If an exception is thrown, then the result will be a `Left` value containing the exception, otherwise, a `Right` value containing the result of the code block is returned. The `case` statement is used to pattern match on the result to handle the exception if one occurred, or to handle the success value.

The `finally` block is optional, and is used to execute some code regardless of whether or not an exception was thrown. Here's an example with a message:

```haskell
import Control.Exception

main = do
    result <- try $ do
         num1 <- readLn
         num2 <- readLn
         if num2 == 0
            then throwIO DivideByZero
            else return $ num1 `div` num2
    case result of
        Left DivideByZero -> do
            putStrLn "Caught DivideByZero exception. Cannot divide by zero!"
        Left exception -> do
            putStrLn $ "Caught exception: " ++ show (exception :: SomeException)
        Right quotient -> do
            putStrLn $ "The result of dividing " ++ show num1 ++ " by " ++ show num2 ++ " is: " ++ show quotient
    finally putStrLn "Exiting program."
```
In this example, we're trying to divide two numbers provided by user input, but we first check if the second number is zero, and throws a `DivideByZero` exception if it is. If no exception is thrown, we print out the quotient. If an exception is thrown, we print out an appropriate message. Finally, we print out a message indicating that the program is exiting, regardless of whether or not an exception was thrown.