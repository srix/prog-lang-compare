In Kotlin, you can get the first and last element of an array using the `first()` and `last()` functions respectively. Here's an example code snippet that demonstrates how to do this:

```kotlin
fun main() {
    val myArray = arrayOf(1, 2, 3, 4, 5)
    val firstElement = myArray.first() // returns 1
    val lastElement = myArray.last() // returns 5
    
    println("First element of myArray: $firstElement")
    println("Last element of myArray: $lastElement")
}
```

In the above example, the `myArray` holds integer values. The `first()` function returns the first element of the array and stores it in the `firstElement` variable. Similarly, the `last()` function returns the last element of the array and stores it in the `lastElement` variable. Finally, the `println()` function is used to print the values of these two variables to the console.