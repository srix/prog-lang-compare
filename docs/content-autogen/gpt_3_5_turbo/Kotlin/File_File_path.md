In Kotlin, you can get the file path using the `java.io.File` class. Here's an example:

```kotlin
import java.io.File

fun main() {
    val file = File("myFile.txt")
    val path = file.absolutePath
    println(path)
}
```

In this example, we first create an instance of the `File` class with the name of our file (`myFile.txt`). We then call the `absolutePath` property on the file to get its absolute path. Finally, we print out the path.

You can also get the path of a file using its relative path. Here's an example:
```kotlin
import java.io.File

fun main() {
    val file = File("data", "myFile.txt")
    val path = file.absolutePath
    println(path)
}
```

In this example, we create an instance of `File` by passing the folder name and file name to its constructor. The first parameter is the name of the folder and the second parameter is the name of the file. The `absolutePath` property of the file is then retrieved in the same way as the previous example.

Note that on Windows platforms, file paths are represented using "\\" as a separator, while on Unix-based systems, file paths are represented using "/" as a separator.