In Haskell, arrays are immutable, i.e., they cannot be changed once they are created. Therefore, it is not possible to delete an element from an array. However, you can create a new array that contains all the elements of the original array except for the one you want to remove.

Here's an example of how to achieve this:

```haskell
import Data.Array

deleteElement :: Int -> Array Int a -> Array Int a
deleteElement index arr = array (0, length arr - 2) [(i - (if i > index then 1 else 0), arr ! i) | i <- [0..length arr - 1], i /= index]
```

In this example, the `deleteElement` function takes an integer index and an array and returns a new array with the element at the given index removed. The array indices start at 0.

For example, if we have an array of integers `[1, 2, 3, 4, 5]` and we want to remove the element at index 2 (which is 3), we can call this function like this:

```haskell
main :: IO ()
main = do
    let arr = listArray (0, 4) [1, 2, 3, 4, 5]
        newArr = deleteElement 2 arr
    print newArr -- Output: array (0, 3) [(0,1),(1,2),(2,4),(3,5)]
```

The resulting array will be `[1, 2, 4, 5]` or `array (0, 3) [(0,1),(1,2),(2,4),(3,5)]`.
