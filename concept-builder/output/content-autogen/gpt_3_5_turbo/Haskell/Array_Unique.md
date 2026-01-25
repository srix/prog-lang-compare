In Haskell, you can get unique elements of an array using the `nub` function from the `Data.List` module.

Here is an example:

```
import Data.List (nub)

main = do
  let arr = [1, 2, 3, 2, 1, 4, 5, 4]
  print $ nub arr
  
-- Output: [1,2,3,4,5]
```

In this example, we create an array `arr` with some duplicate elements and then apply the `nub` function from the `Data.List` module to get the unique elements of the array.

The `nub` function takes an array `arr` as input and returns a new array that contains only the unique elements from `arr`. The order of the elements in the new array is not defined.

Note that the `nub` function uses an O(n^2) algorithm to remove duplicates, so it may not be efficient for large arrays. If you need to work with large arrays, you may want to consider using a different data structure or a different algorithm to efficiently remove duplicates.
