To replace a substring within a string in Kotlin, you can use the `replace` function which takes two arguments: the substring to be replaced and the new substring to replace it with. 

Here is an example of how to replace a substring within a string:

```kotlin
fun main() {
    val str = "The quick brown fox jumps over the lazy dog."
    val newStr = str.replace("lazy", "energetic")
    println(newStr)
}
```

Output:
```
The quick brown fox jumps over the energetic dog.
```

In this example, we first declared a `str` variable and initialized it with a string that contains the word "lazy". We then used the `replace` function to replace the word "lazy" with "energetic" and assigned the result to a new variable `newStr`. Finally, we printed the new string `newStr` to the console. 

You can also use the `replaceFirst` or `replaceLast` functions to replace only the first or last occurrence of a substring, respectively. These functions take the same arguments as `replace`. 

Here's an example of using `replaceFirst`:

```kotlin
fun main() {
    val str = "The quick brown fox jumps over the lazy dog."
    val newStr = str.replaceFirst("lazy", "energetic")
    println(newStr)
}
```

Output:
```
The quick brown fox jumps over the energetic dog.
```

In this example, only the first occurrence of the word "lazy" is replaced with "energetic".