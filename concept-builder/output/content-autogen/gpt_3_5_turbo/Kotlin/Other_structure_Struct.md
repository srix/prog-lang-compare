In Kotlin, you can define a `struct` type using the `data class` keyword. A `data class` is a specialized type of class that has certain optimizations for data storage, equality checks, and utility methods.

Here's an example of how to define a `struct` in Kotlin:

```kotlin
data class Point(val x: Int, val y: Int)
```

In this example, we've defined a `struct` called `Point` that has two properties: `x` and `y`. The properties are declared with the `val` keyword, which means they are read-only.

You can create instances of the `Point` struct by calling its constructor and passing in values for `x` and `y`:

```kotlin
val origin = Point(0, 0)
val point = Point(3, 4)
```

You can access the properties of a `struct` using the dot notation:

```kotlin
println("x: ${origin.x}, y: ${origin.y}") // x: 0, y: 0
println("x: ${point.x}, y: ${point.y}")   // x: 3, y: 4
```

Because `data class`es automatically generate implementations for methods such as `equals()`, `hashCode()`, and `toString()`, you can use them right away:

```kotlin
val point2 = Point(3, 4)
println(point == point2) // true
println(point.hashCode() == point2.hashCode()) // true
println(point.toString()) // Point(x=3, y=4)
```

Structs can also be used to define nullable properties: 

```kotlin
data class NullablePoint(val x: Int?, val y: Int?)
```

And can be created with nullable values:

```kotlin
val point3 = NullablePoint(null, 2)
val point4 = NullablePoint(1, null)
val point5 = NullablePoint(null, null)
val point6 = NullablePoint(3, 4)
``` 

In summary, `struct` types in Kotlin are defined using the `data class` keyword and they allow you to define custom data types with properties and behavior. They provide useful methods such as `equals()`, `hashCode()`, and `toString()` out of the box.