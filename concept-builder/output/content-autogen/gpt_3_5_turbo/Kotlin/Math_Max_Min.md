In Kotlin, we can easily find the maximum or minimum value of two numbers by using the built-in functions `maxOf()` and `minOf()`. 

Here's a code example that demonstrates how to use these functions:

```kotlin
fun main() {
    val a = 5
    val b = 8

    val max = maxOf(a, b)
    val min = minOf(a, b)

    println("Maximum value: $max") // Output: Maximum value: 8
    println("Minimum value: $min") // Output: Minimum value: 5
}
```

In the above example, we have two variables `a` and `b` which store the values 5 and 8 respectively. By calling `maxOf()` and `minOf()` functions with these variables as arguments, we can find out the maximum and minimum values between these two numbers.

The `maxOf()` function returns the greater value between two numbers, and `minOf()` function returns the smaller value between two numbers.