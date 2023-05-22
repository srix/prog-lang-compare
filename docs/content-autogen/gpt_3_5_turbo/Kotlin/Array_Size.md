In Kotlin, you can get the size of an array using the `size` property. Here are a few examples:

Example 1: Getting the size of an array of integers

```kotlin
val numbers = arrayOf(1, 2, 3, 4, 5)
val size = numbers.size
println("The size of the numbers array is $size") // Output: The size of the numbers array is 5
```

Example 2: Getting the size of an array of strings

```kotlin
val languages = arrayOf("Kotlin", "Java", "Python", "JavaScript")
val size = languages.size
println("The size of the languages array is $size") // Output: The size of the languages array is 4
```

Example 3: Getting the size of a multidimensional array

```kotlin
val matrix = arrayOf(
    arrayOf(1, 2, 3),
    arrayOf(4, 5, 6),
    arrayOf(7, 8, 9)
)
val size = matrix.size
println("The size of the matrix array is $size") // Output: The size of the matrix array is 3
```

In all of these examples, the `size` property returns the number of elements in the array.