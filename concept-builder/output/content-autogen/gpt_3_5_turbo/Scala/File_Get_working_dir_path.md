To get the working directory path in Scala, you can use the `java.nio.file.Paths` object. Here's an example:

```scala
import java.nio.file.Paths

object Main {
  def main(args: Array[String]): Unit = {
    val path = Paths.get(".").toAbsolutePath.normalize.toString
    println("Working directory = " + path)
  }
}
```

In the code above, `Paths.get(".")` creates a `Path` object representing the current directory, and `toAbsolutePath.normalize.toString` gets the absolute path of this directory as a string. Finally, we print the working directory path using `println()`. 

This will output the path to the current working directory. For example, if you run this code in a Scala REPL or in a file in your project directory, you should see the path to that directory printed out.