In Kotlin, there are multiple ways to remove a part of a string. Here are a few examples:

1. Using the `replace` function:
   ```kotlin
    val str = "Kotlin is awesome"
    val newStr = str.replace("awesome", "")
    println(newStr) // Output: Kotlin is 
    ```

2. Using the `substring` function:
   ```kotlin
    val str = "Kotlin is awesome"
    val newStr = str.substring(0, 6)
    println(newStr) // Output: Kotlin
    ```
    
3. Using string interpolation:
   ```kotlin
    val str = "Kotlin is awesome"
    val newStr = "${str.substringBefore("is")}is"
    println(newStr) // Output: is awesome
    ```
    
In the first example, we use the `replace` function to replace the word "awesome" with an empty string to remove it from the original string.

In the second example, we use the `substring` function to get a sub-string from the original string starting at index 0 and ending at index 6, which removes everything after "Kotlin".

In the third example, we use string interpolation to combine the substring before "is" with "is" to get the remaining part of the string after removing "Kotlin" from it.