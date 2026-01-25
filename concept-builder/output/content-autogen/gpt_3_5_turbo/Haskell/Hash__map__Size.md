In Haskell, the `Data.HashMap.Strict` module provides a `size` function to get the number of key-value pairs in a hash map.

Here's an example using the `Data.HashMap.Strict` module:

```haskell
import qualified Data.HashMap.Strict as Map

myMap = Map.fromList [("a", 1), ("b", 2), ("c", 3)]
sizeOfMyMap = Map.size myMap

main = do
  putStrLn "Size of myMap:"
  print sizeOfMyMap
```

The `fromList` function creates a new hash map from a list of key-value pairs, and `size` returns the number of key-value pairs in the hash map. In this example, `sizeOfMyMap` should be `3`.

Here's another example using the `Data.HashTable.ST.Basic` module:

```haskell
import qualified Data.HashTable.ST.Basic as HashTable

main = do
  ht <- HashTable.new
  HashTable.insert ht "a" 1
  HashTable.insert ht "b" 2
  HashTable.insert ht "c" 3
  sizeOfHashTable <- HashTable.size ht
  putStrLn "Size of hash table:"
  print sizeOfHashTable
```

In this example, `new` creates a new hash table, `insert` adds key-value pairs to the hash table, and `size` returns the number of key-value pairs in the hash table. In this example, `sizeOfHashTable` should be `3`.