In Haskell, there are several ways to find the first element of an array.

One way is to use the `head` function, which returns the first element of a list. Since arrays are a type of list in Haskell, the `head` function can also be used to find the first element of an array.

Here is an example:

```haskell
myArray = [1, 2, 3, 4, 5]
firstElement = head myArray
```

In this example, `myArray` is an array of integers, and `firstElement` is the first element of the array, which is `1`.

Another way to find the first element of an array is to use pattern matching. This involves defining a function that takes an array as an argument and matches the array to a pattern that extracts the first element.

Here is an example:

```haskell
findFirstElement :: [Int] -> Int
findFirstElement (x:xs) = x
```

In this example, the function `findFirstElement` takes an array of integers as an argument and matches it to a pattern with two parts: `x`, which is the first element of the array, and `xs`, which is the rest of the array. The function returns `x`, which is the first element of the array.

To use this function, you would call it with an array as an argument, like this:

```haskell
myArray = [1, 2, 3, 4, 5]
firstElement = findFirstElement myArray
```

In this example, `myArray` is the array of integers from before, and `firstElement` is the first element of the array, which is still `1`.
