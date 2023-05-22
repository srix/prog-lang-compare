In Kotlin, a constant is a kind of variable that can not be reassigned after initialization. To declare a constant, you use the keyword `val` followed by the constant name, a colon `:`, and the data type that the constant will hold.

Here are a few examples of declaring constants in Kotlin:

```kotlin
// A constant holding an integer value
val number = 10

// A constant holding a string literal
val message: String = "Hello, World!"

// A constant holding a boolean value
val isTrue = true

// A constant holding a double value
val price: Double = 9.99
```

As you can see, once you initialize a constant, its value can not be changed. If you try to reassign a constant value, the compiler will generate an error. For example:

```kotlin
val myName = "John"
myName = "Jane"   // Error: Val cannot be reassigned
``` 

Using constants can help you avoid accidental changes to values that should not be mutable in your program.