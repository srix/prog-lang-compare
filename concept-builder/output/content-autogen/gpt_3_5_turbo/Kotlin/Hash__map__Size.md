In Kotlin, the size of a hash can be obtained by using the `size` property of a `HashMap`. Here's an example:

```
fun main() {
   val hash = hashMapOf<String, Int>("apple" to 2, "orange" to 4, "banana" to 1)
   val size = hash.size
   println("The size of the hash is: $size")
}
```

In this example, we have created a `HashMap` that contains three key-value pairs. We have then used the `size` property to obtain the size of the hash. The `println` statement prints the size of the hash.

Output:
```
The size of the hash is: 3
```