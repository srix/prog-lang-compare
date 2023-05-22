Sure! In Kotlin, we can iterate over a hash using the `for` loop and `for each` syntax. Here's an example:

```kotlin
val myHash = hashMapOf(1 to "One", 2 to "Two", 3 to "Three")

// Using for loop
for ((key, value) in myHash) {
    println("$key = $value")
}

// Using forEach loop
myHash.forEach {
    println("${it.key} = ${it.value}")
}
```

Output:
```
1 = One
2 = Two
3 = Three
1 = One
2 = Two
3 = Three
```

In the first loop, we are using the destructuring declaration to extract the key and value from each entry in the hash and printing it. In the second loop, we are using the `forEach` function to iterate over each entry of the hash and printing it. Both ways can be used to iterate over a hash in Kotlin.