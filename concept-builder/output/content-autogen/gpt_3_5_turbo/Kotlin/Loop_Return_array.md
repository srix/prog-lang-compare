In Kotlin, you can return an array from a function using the `return` keyword followed by the array that you want to return. You can either create the array inside the function or pass it as a parameter to the function. Here are a few examples of how to return an array in Kotlin:

Example 1: Returning an array of integers

```kotlin
fun getIntArray(): IntArray {
    val numbers = intArrayOf(1, 2, 3, 4, 5)
    return numbers
}

// calling the function
val myNumbers = getIntArray()
println(myNumbers.contentToString()) // outputs: [1, 2, 3, 4, 5]
```

Example 2: Returning an array of strings

```kotlin
fun getStringArray(): Array<String> {
    val fruits = arrayOf("Apple", "Banana", "Cherry", "Durian")
    return fruits
}

// calling the function
val myFruits = getStringArray()
println(myFruits.contentToString()) // outputs: [Apple, Banana, Cherry, Durian]
```

Example 3: Passing an array as a parameter and returning it

```kotlin
fun doubleArray(array: DoubleArray): DoubleArray {
    for (i in array.indices) {
        array[i] *= 2.0
    }
    return array
}

// calling the function
val numbers = doubleArray(doubleArrayOf(1.0, 2.0, 3.0, 4.0, 5.0))
println(numbers.contentToString()) // outputs: [2.0, 4.0, 6.0, 8.0, 10.0]
```

In conclusion, returning an array in Kotlin is pretty straightforward. You just need to create the array and use the `return` keyword to return it from the function.