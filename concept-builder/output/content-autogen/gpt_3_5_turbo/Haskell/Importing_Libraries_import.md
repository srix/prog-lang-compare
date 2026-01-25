In Haskell, you can import libraries using the `import` keyword followed by the name of the library module. Here's an example:

```haskell
import Data.List

sortedList = sort [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

main = do
  putStrLn "Here is the sorted list:"
  print sortedList
```

In this example, we are importing the `Data.List` module which provides various list manipulation functions. We then use the `sort` function to sort a list of integers. Finally, we print out the sorted list using `putStrLn` and `print`.

Another example using the `Data.Map` library:

```haskell
import qualified Data.Map as Map

ages = Map.fromList [("Alice", 25), ("Bob", 30), ("Charlie", 22)]

main = do
  putStrLn "Here are the ages:"
  print $ Map.lookup "Alice" ages
  print $ Map.lookup "Bob" ages
  print $ Map.lookup "Eve" ages
```

In this example, we are importing the `Data.Map` module and giving it an alias `Map`. We then create a `Map` data structure with age values for three people. Finally, we use the `lookup` function to print out the age of Alice, Bob, and Eve (who is not in the map).
