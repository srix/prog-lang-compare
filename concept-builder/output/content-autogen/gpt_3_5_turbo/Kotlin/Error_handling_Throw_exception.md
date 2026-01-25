In Kotlin, we can throw exceptions using the `throw` keyword. Here's how it works:

1. Create a custom exception class:

```kotlin
class MyException(message: String) : Exception(message)
```

2. Throw the exception:

```kotlin
if (someCondition) {
  throw MyException("This is an error message")
}
```

In the above example, whenever `someCondition` is true, the `MyException` is thrown with the message "This is an error message".

We can also use the built-in exception classes in Kotlin and throw them with a specific message:

```kotlin
if (someOtherCondition) {
  throw IllegalArgumentException("Invalid argument provided")
}
```

In the above example, the `IllegalArgumentException` exception is thrown with the message "Invalid argument provided".

It's important to handle exceptions when they are thrown using `try-catch` blocks. Here's an example of handling the `MyException` we created earlier:

```kotlin
try {
  // code that may throw MyException
} catch (e: MyException) {
  // handle MyException
  println(e.message)
}
```

In the above example, if `MyException` is thrown, it will be caught and the message will be printed out.