To count the number of elements in an array that match a condition in Scala, you can use the `count` method of the array. This method takes a predicate function as its argument and returns the number of elements that satisfy the condition.

Here's an example to demonstrate this:

```scala
val arr = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
val count = arr.count(x => x % 2 == 0)
println(s"The number of even elements in the array is: $count") // Output: The number of even elements in the array is: 5
```

In this example, we have an array of integers `arr` containing the numbers from 1 to 10. We want to count the number of even elements in the array. To do this, we use the `count` method on the array and provide a predicate function that checks if an element is even or not. The `x % 2 == 0` condition checks if an element is even or not. Finally, we print the count using the `println()` function.

Similarly, you can write your own predicate function to count elements that satisfy any given condition in an array.