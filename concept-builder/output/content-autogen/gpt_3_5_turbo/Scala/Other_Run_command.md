To run a command in Scala, follow the steps below:

1. Install Scala on your system
2. Open the terminal or command prompt and navigate to the directory where your Scala file is located
3. Compile the Scala file using the scala command followed by the name of the file. For example, if your Scala file is named HelloWorld.scala, you would use the command:

   ```
   scala HelloWorld.scala
   ```

4. If the compilation is successful, you can now run the Scala file using the scala command followed by the name of the compiled class (excluding the .scala extension). For example, if your compiled class is named HelloWorld.class, you would use the command:

   ```
   scala HelloWorld
   ```

Here is an example of a Scala program that reads a number from the user and prints its square:

```
import scala.io.StdIn

object Square {
  def main(args: Array[String]) {
    println("Enter a number: ")
    val number = StdIn.readDouble()
    val square = number * number
    println(s"The square of $number is $square")
  }
}
```

To run this program, save it in a file named Square.scala and follow the steps above to compile and run it.