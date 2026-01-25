In Kotlin, we can convert an integer to a string using the `toString()` method. Here's an example:

```kotlin
val number = 123
val numberAsString = number.toString()
println("The number as a string is $numberAsString")
```

Output: `The number as a string is 123`

If you want to format the string, you can use the `stringFormat()` method. Here's an example:

```kotlin
val number = 123
val numberAsString = String.format("%03d", number)
println("The number as a padded string is $numberAsString")
```

Output: `The number as a padded string is 123`

In the above example, `%03d` is used to format the string. It means that the string should have a minimum width of 3 characters, and if the number is less than 3 digits long, it should be padded with leading zeros.