In Haskell, arrays are immutable data structures, meaning their elements cannot be modified once they are created. However, we can create a new array with the updated elements using the `//` operator.

The syntax to change all elements of an array is as follows:

```
newArray = originalArray // [(i, newValue) | i <- [0..((length originalArray)-1)]]
```

Here, `(i, newValue)` is used to represent the updated value at index `i` of the new array. The list comprehension `[0..((length originalArray)-1)]` generates a list containing all the indices of the original array, allowing us to update all elements.

Here's an example code that changes all elements of an array containing integers:

```
import Data.Array

main = do
    let origArray = array (0,4) [(i, i) | i <- [0..4]] -- Creates an array of size 5 
                                                      -- with the values [0, 1, 2, 3, 4]
    putStrLn "Original array: "
    print origArray
    let newArray = origArray // [(i, i*2) | i <- [0..4]] -- Creates a new array with all values
                                                        -- multiplied by 2
    putStrLn "New array: "
    print newArray
```

The output of this code would be:

```
Original array:
array (0,4) [(0,0),(1,1),(2,2),(3,3),(4,4)]
New array:
array (0,4) [(0,0),(1,2),(2,4),(3,6),(4,8)]
```

Note that while the original array remains unchanged, the new array has all its elements updated according to our specified logic.