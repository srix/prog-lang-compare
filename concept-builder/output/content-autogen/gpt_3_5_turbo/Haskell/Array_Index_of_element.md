To get the index of an element in an array in Haskell, you can use the `elemIndex` function from the `Data.List` module. Here's the syntax:

```haskell
import Data.List

elemIndex :: (Eq a) => a -> [a] -> Maybe Int
```

The `elemIndex` function takes two parameters: the element you want to find the index of, and the array in which you want to search for the element. It returns a `Maybe Int` value, which means that it will return `Just i` if the element is found at index `i` in the array, and `Nothing` otherwise.

Here's an example of using `elemIndex` to find the index of the element `3` in the array `[1, 2, 3, 4, 3, 5]`:

```haskell
import Data.List (elemIndex)

array = [1, 2, 3, 4, 3, 5]
index = elemIndex 3 array -- Returns: Just 2
```

In this example, `elemIndex 3 array` will return `Just 2`, because the element `3` is found at index `2` in the array.

If the element you're searching for isn't in the array, `elemIndex` will return `Nothing`. Here's an example:

```haskell
import Data.List (elemIndex)

array = [1, 2, 3, 4, 3, 5]
index = elemIndex 6 array -- Returns: Nothing
```

In this example, `elemIndex 6 array` will return `Nothing`, because `6` isn't in the array.
