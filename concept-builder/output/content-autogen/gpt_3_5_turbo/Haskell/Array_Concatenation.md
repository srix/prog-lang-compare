In Haskell, we can concatenate two arrays using the `++` operator. This operator is used to join two lists (arrays) together into a single list. Here's an example:

```haskell
-- Defining two arrays
array1 = [1, 2, 3]
array2 = [4, 5, 6]

-- Concatenating the arrays using ++
concatenatedArray = array1 ++ array2

-- Printing the concatenated array
main = print concatenatedArray
```

Output:
```
[1,2,3,4,5,6]
```

In this example, `array1` and `array2` are two arrays that we want to concatenate. The `++` operator is used to join the two arrays together into a single array named `concatenatedArray`. Finally, the `print` function is used to output the concatenated array.

Note that the `++` operator can also be used to concatenate more than two arrays at once. For example:

```haskell
-- Defining three arrays
array1 = [1, 2, 3]
array2 = [4, 5, 6]
array3 = [7, 8, 9]

-- Concatenating the arrays using ++
concatenatedArray = array1 ++ array2 ++ array3

-- Printing the concatenated array
main = print concatenatedArray
```

Output:
```
[1,2,3,4,5,6,7,8,9]
```