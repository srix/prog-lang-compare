In Kotlin, float is a primitive data type that provides a way to store decimal numbers with single precision. Float values are represented using a 32-bit IEEE 754 floating point format.

To use float values in Kotlin, you can declare a variable with the "float" keyword. Here's an example:

```kotlin
var num1: Float = 3.1415f
var num2 = 2.5f
```

In the first line, a variable named "num1" is declared and initialized with the value 3.1415f. Note that the "f" at the end of the number is necessary to explicitly specify that it is a float value. If you omit the "f", Kotlin will treat the number as a double by default, which will result in a compilation error.

In the second line, a variable named "num2" is declared and initialized with the value 2.5f. Since we did not specify the data type explicitly, Kotlin infers that "num2" is a float based on the presence of the "f" suffix.

You can perform various arithmetic operations on float values, just like with other numeric types. Here are some examples:

```kotlin
val a = 7.5f
val b = 2.0f
val sum = a + b
val diff = a - b
val prod = a * b
val div = a / b

println("sum = $sum")
println("difference = $diff")
println("product = $prod")
println("quotient = $div")
```

In this code, we declare two variables named "a" and "b" with float values. We then perform addition, subtraction, multiplication, and division operations using these variables and store the results in respective new variables "sum", "diff", "prod", and "div". Finally, we print out the results using the println() function.

Output:
```
sum = 9.5
difference = 5.5
product = 15.0
quotient = 3.75
```