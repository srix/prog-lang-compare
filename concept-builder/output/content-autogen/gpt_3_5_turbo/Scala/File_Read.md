In Scala, you can read a file using the Source class which provides several methods for reading from a file. Here is an example of how to read a file in Scala:

```
import scala.io.Source

object ReadFile {
  def main(args: Array[String]) {
    val fileName = "file.txt"
    val fileContents = Source.fromFile(fileName).getLines().mkString
    println(fileContents)
  }
}
```

In this example:

1. We first import the `Source` class from the `scala.io` package
2. We create a main method that takes an array of strings as an argument
3. We define the `fileName` variable and set it equal to the path of our file
4. We then declare a `fileContents` variable and use the `fromFile` method of the `Source` class to read the file contents
5. We use the `getLines` method of the `Source` class to get an iterator over all the lines in the file
6. We then use the `mkString` method to concatenate all the lines into a single string
7. Finally, we print the contents of the string using println

This will print the contents of the `file.txt` file.