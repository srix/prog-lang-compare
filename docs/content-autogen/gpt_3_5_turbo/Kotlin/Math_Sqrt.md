Sure, here's how to get the square root of a number in Kotlin:

1. Using kotlin.math.sqrt() function: 

The simplest way to find the square root value is by using the sqrt() function that is present under the kotlin.math module. 

For example: 

```kotlin
import kotlin.math.sqrt
 
fun main(args: Array<String>) {
    val number = 36.0
    val squareRoot = sqrt(number)
    println("Square root of $number is $squareRoot")
}
```

Output: Square root of 36.0 is 6.0

2. Using extension functions: 

You can also create an extension function to find the square root of a number.

For example: 

```kotlin
import kotlin.math.sqrt
 
fun Double.sqrt(): Double {
    return sqrt(this)
}
 
fun main(args: Array<String>) {
    val number = 36.0
    val squareRoot = number.sqrt()
    println("Square root of $number is $squareRoot")
}
```

Output: Square root of 36.0 is 6.0

Hope that helps! Let me know if you have any questions.