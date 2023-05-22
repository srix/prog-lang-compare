Sure! In Kotlin, you can use the `trim()` function to remove leading and trailing whitespaces from a string. Here's how:

Example 1:

```
val str1 = "  Hello World  "
val trimmedStr1 = str1.trim()
println(trimmedStr1) // Output: "Hello World"
```

In this example, the original string `str1` contains leading and trailing whitespaces. The `trim()` function is called on the string, which returns a new string with the leading and trailing whitespaces removed. The resulting string is stored in the variable `trimmedStr1`, and when printed to the console, it outputs `"Hello World"` with no leading or trailing whitespaces.

Example 2:

```
val str2 = "  Kotlin is awesome!   "
val trimmedStr2 = str2.trim()
println(trimmedStr2) // Output: "Kotlin is awesome!"
```

This example works the same way as the first one, but the original string `str2` contains a mix of leading and trailing whitespaces. The `trim()` function is again used to remove these whitespaces, and the resulting string is stored in the variable `trimmedStr2`. When printed to the console, it outputs `"Kotlin is awesome!"` with no leading or trailing whitespaces.