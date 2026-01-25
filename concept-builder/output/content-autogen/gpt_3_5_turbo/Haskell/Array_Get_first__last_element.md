In Haskell, we can get the first and last element of an array by using the functions `head` and `last`, respectively. 

`head` function returns the first element of a list, while `last` function returns the last element of a list. As arrays are just lists in Haskell, we can use these functions to easily get the first and last elements of an array. 

Here's an example:

```haskell
-- Define an array of integers
myArray = [1, 2, 3, 4, 5]

-- Get the first element of the array
firstElement = head myArray -- Output: 1

-- Get the last element of the array
lastElement = last myArray -- Output: 5
```

Note that it's important to make sure the array is not empty, since `head` and `last` will throw an error when used on an empty list.