To count the number of elements in an array matching a condition in Haskell, you can use the `length` and `filter` functions.

The `filter` function takes a conditional function and an array as arguments, and returns a new array that only includes the elements of the original array that satisfy the condition.

The `length` function simply takes an array as argument and returns its length.

Here's an example code snippet that demonstrates how to count the number of even numbers in an array:

```
countEvenNumbers :: [Int] -> Int
countEvenNumbers xs = length (filter even xs)
```

In this example, the `filter even xs` expression will return a new array that only includes the even numbers from the input array `xs`. The `length` function is then used to get the length of this new array, which gives us the number of even numbers in `xs`.

Here's another example where we count the number of strings in an array that start with the letter 'A':

```
countAStrings :: [String] -> Int
countAStrings xs = length (filter (\x -> head x == 'A') xs)
```

In this example, the `filter (\x -> head x == 'A') xs` expression will return a new array that only includes the strings from the input array `xs` that start with the letter 'A'. The `length` function is then used to get the length of this new array, which gives us the number of 'A'-starting strings in `xs`.