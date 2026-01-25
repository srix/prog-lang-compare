To get the directory path in Kotlin, you can use the `File` class in the Java IO package. Here is an example code to get the directory path:

```kotlin
import java.io.File

fun main() {
    // creates a file object with a file path
    val file = File("src/main/resources")

    // gets the directory path
    val directoryPath = file.absolutePath

    // prints the directory path
    println(directoryPath)
}
```

In this example, we create a `File` object with the file path `"src/main/resources"`, which is a directory in the project's resources folder. Then we use the `absolutePath` method to get the directory path as a string and print it out using `println`.

Output:
```
/path/to/project/src/main/resources
```

You can replace the file path with any directory path that you want to get.