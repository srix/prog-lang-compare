In Kotlin, there are several ways to concatenate strings:

1. Using the `+` operator:

```kotlin
val str1 = "Hello"
val str2 = " world!"
val str3 = str1 + str2
println(str3) // Output: Hello world!
```

2. Using the string interpolation:

```kotlin
val name = "John"
val age = 25
val message = "My name is $name and I am $age years old."
println(message) // Output: My name is John and I am 25 years old.
```

3. Using the `plus()` function:

```kotlin
val text = "It is raining"
val newText = text.plus(" today.")
println(newText) // Output: It is raining today.
``` 

All of these methods will concatenate two or more strings together.