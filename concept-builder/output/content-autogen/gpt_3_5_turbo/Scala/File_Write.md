To write a file in Scala, you need to follow a sequence of steps:

1. Open a file for writing using a `PrintWriter` object
2. Write data to the file using the `print` or `println` methods of the `PrintWriter` object
3. Close the file using the `close` method of the `PrintWriter` object to ensure all data is written and resources are released.

Here is an example Scala code that demonstrates writing to a file:

```scala
import java.io._

object WriteToFileExample extends App {
  val fileName = "example.txt"
  val file = new File(fileName)
  val writer = new PrintWriter(file)

  writer.println("Scala is awesome!")
  writer.println("Functional programming is the future.")
  writer.println("We can write to files in Scala very easily.")
  writer.close()
}
```

In this example, we create a new file called `example.txt`, and then create a `PrintWriter` object `writer` to write to the file. We then write three lines of text using the `println` method and finally we close the file using the `close` method. After executing this code, you will find the written text in the `example.txt` file.

Note that if the file specified by `fileName` already exists, the old contents of the file will be replaced with the new contents written by the `PrintWriter` object. If you want to append to an existing file instead of overwriting it, you can create the `PrintWriter` object with the `FileWriter` object and pass `true` as the second argument to the `FileWriter` object constructor.