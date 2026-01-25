To get the parent directory path in Kotlin, you can use the `File.parent` property of a `File` object. Here's an example:

```kotlin
import java.io.File

fun main(args: Array<String>) {
    // absolute file path
    val filePath = "/Users/user/Documents/myfile.txt"
    
    // create a File object
    val file = File(filePath)
    
    // get the parent directory path
    val parentDir = file.parent
    
    // print the parent directory path
    println("Parent directory path: $parentDir")
}
```

In this example, the `File` object is created using an absolute file path, but it can also be created using a relative file path. The `parent` property returns the parent directory path as a string, which is then printed to the console.

Output: `Parent directory path: /Users/user/Documents`