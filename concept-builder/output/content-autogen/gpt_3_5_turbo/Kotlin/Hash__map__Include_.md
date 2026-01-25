In Kotlin, we can use the `in` operator to check if a key is available in a hash. We use the syntax `<key> in <hash>` to check if the `<key>` is present in the `<hash>`. 

Here is an example:

```kotlin
fun main() {
    val myMap = hashMapOf("one" to 1, "two" to 2, "three" to 3)

    if ("one" in myMap) {
        println("Key 'one' is present with value ${myMap["one"]}")
    } else {
        println("Key 'one' is not present")
    }

    if ("four" in myMap) {
        println("Key 'four' is present with value ${myMap["four"]}")
    } else {
        println("Key 'four' is not present")
    }
}
```

Output:
```
Key 'one' is present with value 1
Key 'four' is not present
```

In the example, we have created a hash map containing three key-value pairs. We then use the `in` operator to check if "one" and "four" keys are present. The first check for "one" key returns true, and the second check for "four" key returns false.