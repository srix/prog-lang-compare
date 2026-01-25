In Scala, an array's first element can be found using the `head` method. Here's an example:

```scala
val arr = Array(1, 2, 3, 4, 5)
val firstElement = arr.head
println(firstElement) // Output: 1
```

In this example, we have declared an array `arr` that contains the numbers 1 through 5. We then call the `head` method on the array to retrieve its first element, which is assigned to the variable `firstElement`. Finally, we print the value of `firstElement`, which is 1.

It's important to note that if the array is empty, calling the `head` method will result in an exception. To avoid this, you can use the `headOption` method, which returns an `Option` object that may contain the first element of the array if it is not empty. Here's an example:

```scala
val emptyArr = Array.empty[Int]
val firstElementOption = emptyArr.headOption
println(firstElementOption) // Output: None
```

In this example, we have declared an empty array `emptyArr` and called the `headOption` method to retrieve its first element. Since the array is empty, the method returns `None`, which is printed to the console.