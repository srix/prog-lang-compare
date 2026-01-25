In Kotlin, if/else is used to make a decision based on a condition. Here's the structure of the if/else statement in Kotlin:

```kotlin
if (condition) {
    // statement(s) executed if condition is true
} else {
    // statement(s) executed if condition is false
}
```

Here is an example:

```kotlin
fun main() {
    val number = 50
    if (number % 2 == 0) {
        println("${number} is even.")
    } else {
        println("${number} is odd.")
    }
}
```

The output of this program will be `50 is even.` because 50 is an even number.

You can also use if/else with block statements:

```kotlin
fun main() {
    val age = 25
    if (age >= 18) {
        // Statement(s) executed if age is greater than or equal to 18
        println("You are an adult.")
        println("You can vote.")
    } else {
        // Statement(s) executed if age is less than 18
        println("You are not yet an adult.")
        println("You can't vote yet.")
    }
}
```

This program checks if the age is greater than or equal to 18. If it is, the program prints "You are an adult" and "You can vote", and if it's not, it prints "You are not yet an adult" and "You can't vote yet".