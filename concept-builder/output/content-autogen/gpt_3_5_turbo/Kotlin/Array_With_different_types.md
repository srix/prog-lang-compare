In Kotlin, you can create an array with different types by declaring the array type as `Any`. `Any` is the root class in Kotlin's class hierarchy, and it can be used to represent any object type.

Here's an example of creating an array with different types:

```
val mixedArray = arrayOf<Any>(1, "two", 3.0, true, 'c')
```

In this example, the `mixedArray` variable is declared as an array of type `Any`, and it contains values of different types: an `Int` (1), a `String` ("two"), a `Double` (3.0), a `Boolean` (true), and a `Char` ('c').

You can access the values in the array using indexing:

```
println(mixedArray[0]) // Output: 1
println(mixedArray[1]) // Output: two
println(mixedArray[2]) // Output: 3.0
println(mixedArray[3]) // Output: true
println(mixedArray[4]) // Output: c
```

Note that if you want to perform operations or access properties specific to a certain type of object in the `mixedArray`, you will need to cast the object to the desired type before doing so.