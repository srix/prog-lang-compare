In Kotlin, try-catch-finally is used for handling exceptions and performing cleanup actions. The try block contains the code that can throw an exception, and the catch block is used to catch and handle the exception. The finally block is used to execute any clean-up code that needs to be done, whether an exception is thrown or not. 

To explain with an example, let's consider a simple program that attempts to divide two numbers entered by the user:

```
fun main() {
    try {
        val num1 = readLine()?.toInt() // Read first number from user
        val num2 = readLine()?.toInt() // Read second number from user
        val result = num1!! / num2!! // Attempt division
        println("Result: $result")
    }
    catch (e: Exception) {
        println("Error: ${e.message}")
    }
    finally {
        println("End of program")
    }
}
```

In the above code, the `readLine()?.toInt()` function is used to read user input as an integer. The `try` block attempts to divide `num1` by `num2` and displays the result if successful. If an exception occurs, the `catch` block will print an error message containing the exception message. The `finally` block will always execute, regardless of whether an exception was thrown or not. In this case, it prints "End of program".

In general, it's a good practice to include informative error messages in catch blocks, so that it's clear what went wrong if an exception occurs.