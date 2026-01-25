To find the first element of an array in Kotlin, you can use the `first()` method. Here's an example:

```kotlin
val myArray = arrayOf(1, 2, 3, 4, 5)
val firstElement = myArray.first()
println(firstElement) // Output: 1
```

In this example, `myArray.first()` returns the first element of the array `myArray` which is `1`. You can also use an optional predicate as a parameter to the `first()` method to get the first element that matches a specific condition. Here's an example:

```kotlin
val myArray = arrayOf(1, 2, 3, 4, 5)
val firstEvenElement = myArray.first { it % 2 == 0 }
println(firstEvenElement) // Output: 2
```

In this example, `myArray.first { it % 2 == 0 }` returns the first element of the array `myArray` that is even, which is `2`.