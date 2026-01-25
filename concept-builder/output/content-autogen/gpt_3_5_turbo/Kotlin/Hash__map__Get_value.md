In Kotlin, hash is known as a map and it can be accessed with the use of the `get` method. Here's how to get the value of a key in a hash (map) in Kotlin:

```
val myMap = mapOf("a" to 1, "b" to 2, "c" to 3)
println(myMap["a"]) // Prints 1
```

In this example, we have created a hash `myMap` with keys "a", "b" and "c" paired with integers 1, 2, and 3 respectively. To get the value of the key "a" in the map, we simply use `myMap["a"]`. This returns the value 1, which is then printed to the console.

Another way to access the value of a key in a map is to use the `get` method. Here's an example for that:

```
val myMap = mapOf("a" to 1, "b" to 2, "c" to 3)
println(myMap.get("b")) // Prints 2
```

In this example, we have created a map `myMap` with keys "a", "b" and "c" paired with integers 1, 2, and 3 respectively. To get the value of the key "b" in the map, we use `myMap.get("b")`. This returns the value 2, which is then printed to the console. 

Note that if we try to access a key that doesn't exist in the map, the `get` method will return `null`. It also means that the key doesn't exist in the map, so we must handle null values in our program appropriately.