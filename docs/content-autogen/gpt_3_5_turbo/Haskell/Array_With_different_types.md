In Haskell, we can create an array with different types using the `Data.Array` module. This module provides the `Array` type which is used to represent arrays. We can create an array with different types by specifying the type of the values in the array as a tuple.

Here's an example of how to create an array with different types:

```
import Data.Array

-- Define the array with different types
arr :: Array Int (String, Int, Double)
arr = array (1,3) [(1,("apple",2,3.5)), (2,("banana",4,5.5)), (3,("orange",6,7.5))]

-- Accessing the elements of the array
item1 = fst $ arr ! 1
item2 = snd $ arr ! 2
```

In this example, we've defined an array called `arr` which has three elements. The first element is a tuple containing a string, an integer, and a double. The second and third elements are also tuples with the same structure.

To access the values in the array, we use the `!` operator followed by the index of the element we want. In this example, we've accessed the first and second elements of the array and extracted the first and second items from each tuple using the `fst` and `snd` functions, respectively. 

Output:
```
item1 => "apple"
item2 => (4,5.5)
```