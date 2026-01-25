In Haskell, iterating over an array is typically done using functions from the standard library. One common way to iterate over an array is to use the `map` function, which applies a given function to each element of an array and returns a new array with the results. Another way is to use a recursive function or a list comprehension.

Here is an example of using the `map` function to iterate over an array and double each element:

```haskell
array = [1, 2, 3, 4, 5]
doubledArray = map (*2) array
```

The resulting `doubledArray` would be `[2, 4, 6, 8, 10]`.

Here is an example of using a recursive function to iterate over an array and calculate the sum of its elements:

```haskell
sumArray :: Num a => [a] -> a
sumArray [] = 0
sumArray (x:xs) = x + sumArray xs

array = [1, 2, 3, 4, 5]
sum = sumArray array
```

The resulting `sum` would be `15`.

Here is an example of using a list comprehension to iterate over an array and filter out all even numbers:

```haskell
array = [1, 2, 3, 4, 5]
oddsArray = [x | x <- array, odd x]
```

The resulting `oddsArray` would be `[1,3,5]`.