In Haskell, we use the `Control.Exception` library to implement error handling using try/catch/finally blocks. Here's an example code snippet:

```haskell
import Control.Exception

data DivideByZero = DivideByZero deriving (Show)

instance Exception DivideByZero

divSafe :: Int -> Int -> IO Int
divSafe x y = handle handler $ do
    if y == 0
        then throwIO DivideByZero
        else return (x `div` y)
  where
    handler :: DivideByZero -> IO Int
    handler DivideByZero = return 0

main = do
    result <- divSafe 6 2
    print result
    result1 <- divSafe 10 0
    print result1
```

In this example, we define a `divSafe` function that takes two integers and returns their division in an `IO` monad. We handle the exception caused by dividing by zero using the `handle` function, which takes two arguments: the exception handler function and the main computation to run. If a `DivideByZero` exception is thrown, the handler function returns `0`.

In the `main` function, we use `divSafe` to calculate the results of two division operations: 6/2 and 10/0. The first division is successful and returns the result, which is printed to the console using `print`. The second division throws a `DivideByZero` exception, which is caught by the `handle` function and returns `0`, which is also printed to the console.

Another way to catch exceptions is by using the `try` function, which returns an `Either` type:

```haskell
import Control.Exception

data MyException = MyException deriving (Show)

instance Exception MyException

someFunction :: Int -> Either MyException Int
someFunction n = if n `mod` 2 == 0
                    then Right n
                    else Left MyException

main :: IO ()
main = do
    result1 <- try (someFunction 2) :: IO (Either MyException Int)
    print result1
    result2 <- try (someFunction 3) :: IO (Either MyException Int)
    print result2
```

In this example, we define a `someFunction` that takes an integer and returns an `Either`, which may contain an exception `MyException` or an integer. We use the `try` function to catch any exceptions thrown by `someFunction` and return an `Either` type result. The `try` function wraps the main computation and returns an `IO` monad.

In the `main` function, we use `try` to calculate the result of two function calls, one with an even number and the other with an odd number. The first function call is successful and returns `Right 2`, which is printed to the console. The second function call throws a `MyException` exception, which is caught by `try` and returns the `Left MyException` result, which is also printed to the console.