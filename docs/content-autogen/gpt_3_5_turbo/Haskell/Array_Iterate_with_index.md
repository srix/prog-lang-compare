In Haskell, you can use the `zip` function to pair each element of an array with its index. Here's an example:

```haskell
myArray = ["apple", "banana", "cherry"]

-- Using the zip function to get pairs of elements and their indices
indexedArray = zip [0..] myArray 

-- Iterating over the indexed array
for (index, element) <- indexedArray do
    putStrLn $ "Element " ++ show index ++ " is " ++ element
```

The `zip` function takes two arrays as arguments and returns an array of pairs. In the example above, we are using `[0..]` to generate an infinite list of integers from `0` onwards, which is zipped with `myArray` to get an array of pairs.

The `for` loop is not a built-in construct in Haskell, but we can use the `mapM_` function to achieve a similar effect. The `mapM_` function takes a function and an array, and applies the function to each element of the array. In the example above, we are using a lambda function to print out each element and its index. The `show` function is used to convert the integers to strings so we can concatenate them with the output string.