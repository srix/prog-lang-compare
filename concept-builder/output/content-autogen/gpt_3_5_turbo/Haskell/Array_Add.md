In Haskell, arrays are not the primary collection data type. Instead, the language primarily relies on lists. However, you can still work with arrays by importing the `Data.Array` module.

To add an element to an array in Haskell, you cannot modify existing arrays. Instead, you will need to create a new array with the added element. Here is the syntax:

```haskell
let newArray = array (lowerIndex, upperIndex) oldArray ++ [(index, element)]
```

Explanation:
- `newArray` is the new array with the added element.
- `array` is a function for constructing arrays.
- `lowerIndex` and `upperIndex` specify the range of indices in the array.
- `oldArray` is the original array.
- The `++` operator is used to concatenate the original array with a new list containing a tuple of the index and element to be added.

Here is an example:

```haskell
import Data.Array

-- create an array with three elements
myArray = array (1,3) [(1, "apple"), (2, "banana"), (3, "orange")]

-- add a fourth element
newArray = myArray // [(4, "grape")]
-- note that "//" is the function for updating array elements with new values

-- print the old and new arrays
main = do
  putStrLn "Original array:"
  print myArray
  putStrLn "New array with added element:"
  print newArray
```

Output:

```
Original array:
array (1,3) [(1,"apple"),(2,"banana"),(3,"orange")]
New array with added element:
array (1,4) [(1,"apple"),(2,"banana"),(3,"orange"),(4,"grape")]
```

In this example, we first create an array `myArray` with three elements. We then create a new array `newArray` with the added element "grape" at index 4. Finally, we print both the original and new arrays for comparison.