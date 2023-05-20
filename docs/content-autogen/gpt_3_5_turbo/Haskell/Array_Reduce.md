In Haskell, we can use the `foldl` and `foldr` functions to reduce an array to a single value. The `foldl` function applies a binary operation to the elements of an array so as to collapse them into a final result from the left end of the array. The `foldr` function does the same but in the opposite direction, starting from the right end of the array.

Here are some examples of using `foldl` and `foldr` to reduce an array to a single value:

```haskell
-- Using foldl to sum the elements of an array
sumArray :: [Int] -> Int
sumArray arr = foldl (+) 0 arr

-- Using foldr to concatenate strings in an array
concatArray :: [String] -> String
concatArray arr = foldr (++) "" arr

-- Using foldl to find the minimum element in an array
minArray :: [Int] -> Int
minArray arr = foldl min (head arr) arr
```

In the first example, the `foldl` function takes a binary operation `+` and an initial value of `0`, and then applies the operation to each element of the array `arr` from left to right (i.e., starting with the first element and accumulating the result with each subsequent element). The final result is the sum of all elements in the array.

In the second example, the `foldr` function takes a binary operation `++` and an initial value of `""`, and then applies the operation to each element of the array `arr` from right to left (i.e., starting with the last element and accumulating the result with each preceding element). The final result is the concatenation of all strings in the array.

In the third example, the `foldl` function takes a binary operation `min` and an initial value of the first element of the array `arr`, and then applies the operation to each element of the array from left to right (i.e., starting with the second element and comparing it with the current minimum value). The final result is the minimum value in the array.