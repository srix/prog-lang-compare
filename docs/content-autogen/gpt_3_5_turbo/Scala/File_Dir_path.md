In Scala, you can get the current directory path using the `System.getProperty("user.dir")` method. This returns a string representing the current directory path.

Here's an example code snippet:

```scala
object DirPathExample {
  def main(args: Array[String]) {
    val dirPath = System.getProperty("user.dir")
    println("Directory path: " + dirPath)
  }
}
```

When you run this code, the output should be the current directory path of your project.

You can also use the Scala `java.io.File` class to navigate to other directories relative to the current directory. Here's an example:

```scala
import java.io.File

object DirPathExample {
  def main(args: Array[String]) {
    val dir = new File("src/main/resources")
    println("Directory path: " + dir.getAbsolutePath)
  }
}
```

In this example, we use the `File` class to navigate to a directory called `resources`, which is located in the `src/main` directory relative to the current directory. The `getAbsolutePath` method is used to obtain the full path of the directory.