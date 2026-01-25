In Haskell, a hash can be constructed using the `Data.Map` library. The `Map` module provides an implementation of ordered maps.

Here is an example code to create a hash ("dictionary") in Haskell using the `Data.Map` library:

```
import qualified Data.Map as Map

-- create a hash
hash = Map.fromList [("key1", "value1"), ("key2", "value2")]

-- accessing the values stored in the hash
val1 = Map.lookup "key1" hash     -- returns Just "value1"
val2 = Map.lookup "key3" hash     -- returns Nothing
```

In the above example code, we begin by importing the `Data.Map` library. Then, we create a hash using the `fromList` function of the `Map` module. The `fromList` function accepts a list of key-value tuples. Finally, we demonstrate how to access the values stored in the hash using the `lookup` function of `Map`. If the key is present in the hash, `lookup` returns `Just` followed by the corresponding value. If the key is not present, it returns `Nothing`.