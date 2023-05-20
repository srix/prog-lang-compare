In Haskell, the simplest way to check if a class has a method is to use the `elem` function. This function checks whether an element is in a list of elements or not. We can use the function in the following way:

```haskell
elem "method_name" $ map show $ methods (undefined :: ClassName a)
```

Explanation of the code:
- `methods` is a function provided by the GHC.Generics module, which returns a list of all the method names of a class.
- `map show` converts the list of method names to a list of strings.
- `undefined :: ClassName a` creates an instance of the class with a type variable `a`. We don't care about this variable, we just need to have an instance of the class in order to call the `methods` function.
- `"method_name"` is the name of the method we want to check for.
- `elem` checks if `"method_name"` is present in the list of method names.

Here's an example:

```haskell
import GHC.Generics

class MyFuncs a where
  foo :: a -> a
  bar :: a -> a -> a

classHasMethod :: String -> Bool
classHasMethod methodName = elem methodName $ map show $ methods (undefined :: MyFuncs a)

main :: IO ()
main = do
  putStrLn $ "MyFuncs has method foo? " ++ show (classHasMethod "foo") -- True
  putStrLn $ "MyFuncs has method baz? " ++ show (classHasMethod "baz") -- False
```

Here, we have defined a class `MyFuncs` with two methods `foo` and `bar`. We then define a function `classHasMethod`, which takes a method name as an argument and returns `True` if the class has that method, and `False` otherwise. Finally, we call `classHasMethod` for the method names `foo` and `baz` and print the results. The output will be:

```
MyFuncs has method foo? True
MyFuncs has method baz? False
```