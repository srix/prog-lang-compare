In Haskell, you can check if an element is present in an array using the `elem` function. 

The syntax for checking if an element is in an array is as follows:
```
elem :: (Eq a) => a -> [a] -> Bool
```

The first argument is the element to check for, and the second argument is the array to search in. The function returns `True` if the element is present in the array, and `False` otherwise.

Here's an example of checking if an array includes a specific element:
```
-- check if the number 3 is in the array
containsThree = elem 3 [1, 2, 3, 4, 5]
-- containsThree = True

-- check if the letter 'c' is in the array
containsC = elem 'c' ['a', 'b', 'd', 'e']
-- containsC = False
```

In the first example, the array `[1, 2, 3, 4, 5]` includes the element `3`, so `containsThree` is `True`. In the second example, the array `['a', 'b', 'd', 'e']` does not include the element `'c'`, so `containsC` is `False`.