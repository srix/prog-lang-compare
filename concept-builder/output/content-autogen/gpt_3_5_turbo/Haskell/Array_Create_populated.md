To create an array in Haskell, you can use the `array` function provided by the `Data.Array` module.

Here's the syntax:

```haskell
array :: Ix i => (i,i) -> [(i, e)] -> Array i e
```

The `Ix i` constraint indicates that the array index type `i` must be an instance of the `Ix` class, which provides a way to map indices to integers. `(i, i)` is the range of the array indices and the second argument is a list of `(index, value)` pairs. The `Array i e` type indicates that the resulting array has indices of type `i` and elements of type `e`.

Here are two examples of creating arrays using the `array` function:

```haskell
import Data.Array

-- create an array with the range [0,3] and the values 1,2,3,4
arr1 :: Array Int Int
arr1 = array (0,3) [(0,1), (1,2), (2,3), (3,4)]

-- create an array with the range ['a','f'] and some values of type Double
arr2 :: Array Char Double
arr2 = array ('a','f') [('a',3.14), ('c',2.5), ('e',1.0)]
```

In the first example, we create an array with the range `[0,3]` containing the values `1,2,3,4`. In the second example, we create an array with the range `['a','f']` containing some values of type `Double`.
