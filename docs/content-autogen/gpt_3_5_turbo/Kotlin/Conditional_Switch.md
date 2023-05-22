Switch in Kotlin is known as when expression. It allows you to check different cases based on a value. Here's an example of how to use a when expression in Kotlin:

```kotlin
val day = 3

when (day) {
    1 -> println("Monday")
    2 -> println("Tuesday")
    3 -> println("Wednesday")
    4 -> println("Thursday")
    5 -> println("Friday")
    else -> println("Weekend")
}
```

In the above example, we check the value of the variable `day` and print the corresponding day of the week. If the value doesn't match any of the cases, the `else` block is executed which prints "Weekend".

You can also perform multiple operations in a single case:

```kotlin
val month = 3

when (month) {
    1, 3, 5, 7, 8, 10, 12 -> println("31 days")
    4, 6, 9, 11 -> println("30 days")
    2 -> println("28 or 29 days")
    else -> println("Invalid month")
}
```

In the above example, we check the value of the variable `month` and print the number of days it has. Multiple values can be checked together separated by commas.

You can also use when as an expression:

```kotlin
val result = when (day) {
    1 -> "Monday"
    2 -> "Tuesday"
    3 -> "Wednesday"
    4 -> "Thursday"
    5 -> "Friday"
    else -> "Weekend"
}
println(result)
```

In the above example, the when expression returns a value based on the value of `day`. This value is stored in the variable `result` and then printed. If none of the cases match, the value returned is "Weekend".