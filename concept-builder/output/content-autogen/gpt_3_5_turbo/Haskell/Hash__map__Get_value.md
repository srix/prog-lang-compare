In Haskell, a hash (also called a map) is a collection of key-value pairs where each key is unique. You can access the value of a key in a hash using the `Map.lookup` function.

Here's an example hash in Haskell:

```
import qualified Data.Map as Map

myHash :: Map.Map String Int
myHash = Map.fromList [("apple", 1), ("banana", 2), ("orange", 3)]
```

This hash has keys as strings and values as integers.

To get the value of a key, use the `Map.lookup` function:

```
Map.lookup "apple" myHash -- returns Just 1
Map.lookup "pear" myHash  -- returns Nothing
```

The `Map.lookup` function returns a `Maybe` value. If the key is present in the hash, it returns `Just` the corresponding value. Otherwise, it returns `Nothing`.

You can also use the `Map.!` operator to get the value of a key. This operator throws an error if the key is not present in the hash:

```
myHash Map.! "apple" -- returns 1
myHash Map.! "pear"  -- throws an exception: "key not found"
```

It's generally safer to use `Map.lookup`, since it returns a `Maybe` value that you can handle gracefully if the key is not present in the hash.