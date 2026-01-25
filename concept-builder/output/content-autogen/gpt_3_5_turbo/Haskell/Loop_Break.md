In Haskell, `break` is a higher-order function that takes a predicate and a list and returns a tuple of two lists: the prefix of the input list before the first element that satisfies the predicate and the rest of the list.

Here's the syntax of the `break` function in Haskell:

```
break :: (a -> Bool) -> [a] -> ([a], [a])
```

The first argument is a function that tests the elements of the list, and the second argument is the list itself.

Here's an example of using `break` function in Haskell:

```
Prelude> break (== 3) [1, 2, 3, 4, 5]
([1, 2], [3, 4, 5])
```

In this case, `break` has been used to split the list `[1, 2, 3, 4, 5]` into two parts: `[1, 2]` and `[3, 4, 5]`. The function `break (== 3)` checks each element of the list to see if it is equal to 3. As soon as it finds the element 3, it stops and returns the tuple of two lists.

Another example of using `break` function in Haskell:

```
Prelude> break odd [2, 4, 6, 7, 8, 10]
([2, 4, 6], [7, 8, 10])
```

In this case, the function `odd` is used as the predicate. The `break` function starts at the beginning of the list and checks each element until it finds an odd number. It then returns the prefix of the list up to that point (i.e., `[2, 4, 6]`) as the first element of the tuple, and the suffix of the list from that point onwards (i.e., `[7, 8, 10]`) as the second element of the tuple.