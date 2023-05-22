The working directory is the base directory from which your program is run. Kotlin provides a way to get the working directory path:

```kotlin
fun main() {
    val workingDir = System.getProperty("user.dir")
    println("Working directory is: $workingDir")
}
```

In this example, we use the `System.getProperty()` method to retrieve the system property `"user.dir"`, which corresponds to the current working directory. We then print out the working directory using `println()`.

Alternatively, you can use the `Paths` class to retrieve the working directory path:

```kotlin
import java.nio.file.Paths

fun main() {
    val workingDir = Paths.get("").toAbsolutePath().toString()
    println("Working directory is: $workingDir")
}
```

In this example, we use the `Paths.get("")` method to retrieve the path of the current working directory. We then use `toAbsolutePath()` to convert it to an absolute path, and finally, we convert it to a string and print it out.

Both methods will output something like: 

```
Working directory is: /Users/johndoe/working_directory/
```