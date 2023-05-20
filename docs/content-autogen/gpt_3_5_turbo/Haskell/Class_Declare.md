In Haskell, we declare a class using the `class` keyword followed by the name of the class and its constraints. Here is the general syntax for declaring a class:

```
class ClassName constraints where
    function1 :: Type1
    function2 :: Type2
    ...
    functionN :: TypeN
```

`ClassName` is the name of the class, and `constraints` are optional constraints on the type variables used in the class.

Here is an example of declaring a class `Printable` that defines a single function `printMe`. This function takes an argument of type `a` and returns nothing.

```haskell
class Printable a where
    printMe :: a -> IO ()

instance Printable Int where
    printMe = print

instance Printable Char where
    printMe c = putChar c >> putChar '\n'

main :: IO ()
main = do
    printMe (5 :: Int)
    printMe 'c'
```

In this example, we declare the `class Printable` with one member function `printMe` that takes an argument of type `a` and returns `IO()`. We then provide instances for the `Printable` class for types `Int` and `Char`. 

The `instance Printable Int` declaration uses the `print` function which is pre-defined in Haskell to print the value of the integer. The `instance Printable Char` declaration creates a custom implementation of `printMe` that takes a `Char` argument and uses `putChar` to print the character and then a newline character.

Finally, in the `main` function, we use `printMe` to print an integer and a character using their corresponding instances.