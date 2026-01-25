In Kotlin, we can get the type of an object by using the `::class` syntax. Here are some examples:

1. Getting the type of a string:
```kotlin
val myString = "Hello, world!"
println(myString::class) // prints "class kotlin.String"
```

2. Getting the type of an integer:
```kotlin
val myInt = 42
println(myInt::class) // prints "class kotlin.Int"
```

3. Getting the type of a custom object:
```kotlin
data class Person(val name: String, val age: Int)

val myPerson = Person("John Doe", 30)
println(myPerson::class) // prints "class Person"
```

It's also worth noting that you can use the `is` operator in Kotlin to check whether an object is of a certain type. For example:

```kotlin
val myAny: Any = "Hello, world!"
if (myAny is String) {
    println("myAny is a String!")
}
``` 

This will print "myAny is a String!" if `myAny` is indeed a `String`.