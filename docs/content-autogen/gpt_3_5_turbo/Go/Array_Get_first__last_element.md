In Go, to get the first and last elements of an array, you can use the indexing syntax. Here are examples of how to do this:

```
// Create an array of numbers
numbers := [5]int{1, 2, 3, 4, 5}

// Get the first element of the array
firstElement := numbers[0] // Output: 1

// Get the last element of the array
lastElement := numbers[len(numbers)-1] // Output: 5
```

In the above example, we defined an array of integers called `numbers` with five elements. To get the first element of the array, we used the index `[0]`, which is the position of the first element in the array. Similarly, to get the last element of the array, we used `len(numbers)-1` to get the index of the last element in the array.