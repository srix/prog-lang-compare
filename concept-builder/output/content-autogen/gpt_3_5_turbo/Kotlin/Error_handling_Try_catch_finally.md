In Kotlin, try/catch/finally can be used to handle exceptions that might occur during program execution. The try block contains the code that might throw an exception and the catch block catches the exception and performs a specific action. The finally block contains the code that should be executed regardless of whether an exception occurred or not.

Here's an example that shows how to use try/catch/finally in Kotlin:

```kotlin
fun divide(dividend: Int, divisor: Int): Int {
    try {
        return dividend / divisor
    } catch (e: ArithmeticException) {
        println("Error: ${e.message}")
    } finally {
        println("Done!")
    }
    return 0
}

fun main() {
    val result = divide(10, 0)
    println("Result: $result")
}
```

In this example, the divide() function takes two integer arguments as input and attempts to divide the dividend by the divisor. If the divisor is 0, an ArithmeticException is thrown. The catch block catches the exception and prints an error message. The finally block prints "Done!" to indicate that the function has finished executing. In the main function, we call the divide() function with arguments 10 and 0. The result variable would contain 0 since an exception was thrown.

Another example that shows how to use try/catch/finally with multiple catch blocks:

```kotlin
fun readFile(filename: String) {
    try {
        File(filename).inputStream().use { stream ->
            val content = BufferedReader(InputStreamReader(stream)).readText()
            println(content)
        }
    } catch (e: FileNotFoundException) {
        println("File not found: ${e.message}")
    } catch (e: IOException) {
        println("IO Error: ${e.message}")
    } finally {
        println("Done!")
    }
}

fun main() {
    readFile("example.txt")
}
```

In this example, the readFile() function attempts to read the contents of a file and print it to the console. If the file is not found, a FileNotFoundException is thrown and caught in the first catch block. If an IO error occurs, such as a permission issue or a disk error, the second catch block will be executed. Finally, the "Done!" message is printed to indicate that the function has finished executing. In the main function, we call the readFile() function with "example.txt" as the argument.