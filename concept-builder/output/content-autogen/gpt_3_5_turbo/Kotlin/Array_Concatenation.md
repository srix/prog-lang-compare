In Kotlin, you can concatenate two arrays using the `+` operator, as well as the `plus()` function. Here's an example using both:

```kotlin
val array1 = arrayOf("apple", "banana", "orange")
val array2 = arrayOf("grape", "mango", "pineapple")

// using the + operator
val concatenatedArray1 = array1 + array2
println(concatenatedArray1.contentToString())

// using the plus() function
val concatenatedArray2 = array1.plus(array2)
println(concatenatedArray2.contentToString())
```

Output:
```
[apple, banana, orange, grape, mango, pineapple]
[apple, banana, orange, grape, mango, pineapple]
```

In the above example, we first defined two arrays `array1` and `array2` containing some fruits. We then concatenated them using the `+` operator and the `plus()` function to create `concatenatedArray1` and `concatenatedArray2`, respectively. Finally, we printed the contents of both concatenated arrays using the `contentToString()` function.