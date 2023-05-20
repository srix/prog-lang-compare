In Haskell, arrays are created using the `array` function which takes a pair of indices and a list of values. To return an array, you can simply write a function that constructs an array and returns it.

Here's an example function that constructs an array of integers and returns it:

```
import Data.Array

myArray :: Array Int Int
myArray = array (0, 4) [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5)]

getArray :: Array Int Int
getArray = myArray
```

In this example, the `myArray` function constructs an array of integers with 5 values and indices ranging from 0 to 4. The `getArray` function simply returns this array.

You can test that this works by calling the `getArray` function and printing the result:

```
main = do
  let arr = getArray
  print arr
```

This will output:

```
array (0,4) [(0,1),(1,2),(2,3),(3,4),(4,5)]
```