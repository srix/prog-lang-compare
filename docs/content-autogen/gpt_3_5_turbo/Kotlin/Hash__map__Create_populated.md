In Kotlin, you can create a hash using the `HashMap` class. Here's an example of how to do it:

```kotlin
// create a HashMap with key as String and value as Int
val myMap = HashMap<String, Int>()

// add key-value pairs to the HashMap
myMap.put("apple", 1)
myMap.put("banana", 2)
myMap.put("orange", 3)

// print the HashMap
println(myMap) // {apple=1, banana=2, orange=3}
```

In the example above, we first declare a `HashMap` with keys as `String` and values as `Int`. We can then add key-value pairs using the `put` method provided by the `HashMap` class. Finally, we print the hash map to verify that it contains the expected data.

Alternatively, you can also declare and initialize the `HashMap` in a single line:

```kotlin
val myMap = hashMapOf("apple" to 1, "banana" to 2, "orange" to 3)
```

This will create the same hash map as the previous example.