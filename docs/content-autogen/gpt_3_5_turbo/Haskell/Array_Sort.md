In Haskell, we can sort an array using the `sort` function provided in the `Data.List` module. This function takes a list as input and returns a sorted list in ascending order. Here's an example:

```
import Data.List

main = do
  let arr = [5, 2, 1, 9, 7]
  putStrLn ("Original array: " ++ show arr)
  putStrLn ("Sorted array: " ++ show (sort arr))
```

Output:

```
Original array: [5,2,1,9,7]
Sorted array: [1,2,5,7,9]
```

We can also sort a list of strings using the `sort` function. Here's an example:

```
import Data.List

main = do
  let arr = ["banana", "apple", "orange", "grapes"]
  putStrLn ("Original array: " ++ show arr)
  putStrLn ("Sorted array: " ++ show (sort arr))
```

Output:

```
Original array: ["banana","apple","orange","grapes"]
Sorted array: ["apple","banana","grapes","orange"]
```

Note that `sort` function sorts the list in ascending order by default. If we want to sort the list in descending order, we can use the `reverse` function along with `sort`. Here's an example:

```
import Data.List

main = do
  let arr = [5, 2, 1, 9, 7]
  putStrLn ("Original array: " ++ show arr)
  putStrLn ("Sorted array in descending order: " ++ show (reverse (sort arr)))
```

Output:

```
Original array: [5,2,1,9,7]
Sorted array in descending order: [9,7,5,2,1]
```