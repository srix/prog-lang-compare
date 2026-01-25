To write a file in Kotlin, we can use the java.io.File class along with its output stream classes such as FileOutputStream and BufferedWriter. Here's an example of how to write a file in Kotlin:

```kotlin
import java.io.File
import java.io.FileOutputStream
import java.io.BufferedWriter
import java.io.OutputStreamWriter

fun main(args: Array<String>) {
    val file = File("example.txt")

    // Create a FileOutputStream to write bytes to the file
    val fos = FileOutputStream(file)

    // Create a BufferedWriter to write characters to the file
    val writer = BufferedWriter(OutputStreamWriter(fos, "UTF-8"))

    // Write some text to the file
    writer.write("Hello, world!")
    writer.newLine()
    writer.write("This is an example of writing to a file in Kotlin.")

    // Close the writer to flush the buffer and release resources
    writer.close()
}
```

In this example, we create a File object called "example.txt" to represent the file that we want to write to. Then we create a FileOutputStream object to write bytes to the file, and a BufferedWriter object to write characters to the file. We use the writer object's write() method to write some text to the file, and its newLine() method to add a line break. Finally, we close the writer to flush the buffer and release any resources that it may have been using.

Note that we also specify a character encoding (UTF-8) when creating the OutputStreamWriter object. This is important to ensure that the text we write to the file is correctly encoded and can be read back in later with the same encoding.