In Haskell, the `Typeable` type class is used to get the type of an object. To use this type class, you must enable the `DeriveDataTypeable` extension with the `{-# LANGUAGE DeriveDataTypeable #-}` pragma at the top of your file.

Here's an example code snippet using `Typeable` type class to get the type of a value:

```
{-# LANGUAGE DeriveDataTypeable #-}

import Data.Typeable

-- Define a data type
data Person = Person { name :: String, age :: Int } deriving Typeable

-- Create an object of the Person type
person :: Person
person = Person { name = "Alice", age = 25 }

-- Get the type of the Person object
personType :: String
personType = show $ typeOf person

-- Print the type information
main :: IO ()
main = putStrLn personType
```

In the code above, `Person` is a custom data type with two fields, `name` and `age`. The `Typeable` type class is derived for the `Person` type using the `deriving` keyword. 

The `typeOf` function is used to get the type information of the `person` object, which returns a `TypeRep`. The `show` function is then used to convert the `TypeRep` to a `String` that can be printed to the console.

When running the `main` action, the output will be: `Person {name = "", age = 0}`, which shows the type information of the `person` object.
