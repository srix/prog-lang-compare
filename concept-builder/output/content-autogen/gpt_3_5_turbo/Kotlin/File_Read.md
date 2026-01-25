To read a file in Kotlin, follow these simple steps:

1. Create a reference variable of the File class, passing the name and path of the file as its constructor argument.

   ```kotlin
   val file = File("myFile.txt")
   ```

2. Create a BufferedReader object, passing an InputStreamReader object as its constructor argument, which in turn takes a FileInputStream object as its constructor argument.

   ```kotlin
   val reader = BufferedReader(InputStreamReader(FileInputStream(file)))
   ```

3. Read each line of the file using the reader's readLine() function. The function returns null when there are no more lines.

   ```kotlin
   var line: String?
   while (reader.readLine().also { line = it } != null) {
       println(line)
   }
   ```

Here's the complete code:

```kotlin
import java.io.BufferedReader
import java.io.File
import java.io.FileInputStream
import java.io.InputStreamReader

fun main() {
    val file = File("myFile.txt")
    val reader = BufferedReader(InputStreamReader(FileInputStream(file)))
    var line: String?
    while (reader.readLine().also { line = it } != null) {
        println(line)
    }
    reader.close()
}
```

Assuming that myFile.txt contains the following contents:

```
Hello Kotlin!
Welcome to file handling.
```

Once you run the code, it'll print:

```
Hello Kotlin!
Welcome to file handling.
```