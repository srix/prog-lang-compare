In Haskell, we can throw exceptions using the `throw` function from the `Control.Exception` module.

Here's an example of how to throw an exception using `throw`:

```haskell
import Control.Exception

divideByZero :: Double -> Double -> IO Double
divideByZero x y =
  if y == 0
    then throw DivideByZero
    else return (x / y)
```

In this example, `divideByZero` function throws the `DivideByZero` exception if `y` is zero, otherwise it returns the division result of `x` and `y`. 

Another example:

```haskell
import Control.Exception

divideByZeroAgain :: Double -> Double -> IO Double
divideByZeroAgain x y =
  if y == 0
    then throwIO DivideByZero
    else return (x / y)
```

In this example, we use the `throwIO` function to raise the `DivideByZero` exception instead of `throw`. The `throwIO` function is an IO-based version of `throw`. It directly throws an exception inside an IO action.

Both of these examples use the `DivideByZero` exception type, which is already defined in the Haskell base library. However, you can create custom exception types by defining your own data types. Here's an example of a custom exception type:

```haskell
data MyException = MyException String
  deriving (Show, Eq)

instance Exception MyException

raiseMyException :: IO ()
raiseMyException = throwIO (MyException "Something went wrong!")
```

In this example, we define a custom exception type `MyException`. We use `instance Exception MyException` to declare it as an instance of the `Exception` class so that we can use it with the `throw` or `throwIO` functions. And in the last, we use `throwIO` to throw the custom exception `MyException` with a message.
