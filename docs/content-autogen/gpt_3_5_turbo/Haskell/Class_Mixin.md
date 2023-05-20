Haskell is a functional programming language and doesn't have a concept of mixins like some object-oriented languages. However, we can achieve similar functionality using type classes and instances.

In Haskell, type classes are used to define a set of functions that must have an implementation for a specific type. Similarly, when we want to use "mixin-like" behavior, we can define a type class with default implementations for our desired set of functions.

Let's take an example of implementing a "mixin-like" functionality for a logging feature. We can define a type class (let's call it `Loggable`) with a set of functions that our types can implement to have logging behavior.

```haskell
class Loggable a where
  logMsg :: a -> String -> IO ()

  logDebug :: a -> String -> IO ()
  logDebug x = logMsg x ("[Debug] " ++)

  logInfo :: a -> String -> IO ()
  logInfo x = logMsg x ("[Info] " ++)
  
  logError :: a -> String -> IO ()
  logError x = logMsg x ("[Error] " ++)
```

Now, we can define our types and provide instance definitions for each of the log functions.

```haskell
data Person = Person { firstName :: String
                     , lastName :: String }

instance Loggable Person where
  logMsg p s = putStrLn $ "[" ++ firstName p ++ " " ++ lastName p ++ "] " ++ s
```

In the example above, we have defined a type `Person` and provided an instance definition for the `Loggable` type class. This means that we can use the logging functionality on an instance of `Person`.

Example usage:

```haskell
main :: IO ()
main = do
  let john = Person "John" "Doe"
  logDebug john "Initializing app"
  logInfo john "Loading data"
  logError john "Data not found"
```

Output:

```
[John Doe] [Debug] Initializing app
[John Doe] [Info] Loading data
[John Doe] [Error] Data not found
```

In this example, we have shown how we can achieve "mixin-like" behavior in Haskell using type classes and instances. We defined a `Loggable` type class and provided instance definitions for the types that want to have logging functionality. This allows us to reuse the same logging functions for different types without duplicating code.