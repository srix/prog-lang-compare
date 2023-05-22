To convert an integer to a float in Kotlin, we simply need to append the integer with ".0". Here's an example:

```kotlin
val myInt = 50
val myFloat = myInt.toFloat()
```

In this example, `myInt` is an integer variable with a value of `50`. The `toFloat()` method converts this value to a floating-point number and assigns it to the `myFloat` variable.

Alternatively, we can also use type casting to convert an integer to a float like this:

```kotlin
val myInt = 123
val myFloat = myInt as Float
```

In the above example, we're casting the `myInt` variable as a `Float` using the `as Float` syntax. This will convert the integer value to a floating-point value and assign it to the `myFloat` variable. However, keep in mind that type casting should be used with caution as it can result in loss of precision or unexpected results.