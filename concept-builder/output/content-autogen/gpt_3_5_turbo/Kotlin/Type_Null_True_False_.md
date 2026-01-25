In Kotlin, we use the `==` operator to check for null/true/false values.

To check for null, we can simply compare the value to null using the `==` operator:

```kotlin
val myValue: String? = null

if (myValue == null) {
    // do something if myValue is null
} else {
    // do something if myValue is not null
}
```

To check for true or false values, we can do the same thing. For example, if we have a Boolean value:

```kotlin
val myBool: Boolean = false

if (myBool == true) {
    // do something if myBool is true
} else {
    // do something if myBool is false
}
```

Or we can simplify it further like this:

```kotlin
val myBool: Boolean = false

if (myBool) {
    // do something if myBool is true
} else {
    // do something if myBool is false
}
```

Here, the `if (myBool)` statement is equivalent to `if (myBool == true)`.