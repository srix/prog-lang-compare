Sure! There are various ways you can sort an array in Kotlin. Here are some examples:

1. Using the `sort()` function: 

The `sort()` function sorts the array in ascending order. Here's an example:

```
val array = intArrayOf(3, 1, 4, 1, 5, 9, 2, 6, 5, 3)
array.sort()
println(Arrays.toString(array)) // [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
```

2. Using the `sorted()` function: 

The `sorted()` function returns a new sorted array without modifying the original array. Here's an example:

```
val array = intArrayOf(3, 1, 4, 1, 5, 9, 2, 6, 5, 3)
val sortedArray = array.sorted()
println(Arrays.toString(sortedArray)) // [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
```

3. Using the `sortDescending()` function:

The `sortDescending()` function sorts the array in descending order. Here's an example:

```
val array = intArrayOf(3, 1, 4, 1, 5, 9, 2, 6, 5, 3)
array.sortDescending()
println(Arrays.toString(array)) // [9, 6, 5, 5, 4, 3, 3, 2, 1, 1]
```

4. Using the `sortedDescending()` function:

The `sortedDescending()` function returns a new sorted array in descending order without modifying the original array. Here's an example:

```
val array = intArrayOf(3, 1, 4, 1, 5, 9, 2, 6, 5, 3)
val sortedArray = array.sortedDescending()
println(Arrays.toString(sortedArray)) // [9, 6, 5, 5, 4, 3, 3, 2, 1, 1]
``` 

I hope this helps! Let me know if you have any questions.