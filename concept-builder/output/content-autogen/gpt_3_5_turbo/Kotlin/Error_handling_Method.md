In Kotlin, try/catch/finally is used for error handling and to manage resources that need to be cleaned up regardless of whether an exception is thrown or not. 

Here is a basic example of the syntax for try/catch/finally in a Kotlin method:

```
fun exampleMethod() {
    try {
        // Code that may throw an exception
    } catch (e: Exception) {
        // Code to handle the exception
    } finally {
        // Code to clean up resources
    }
}
```

In this example, if the code inside the `try` block throws an exception, then the code inside the `catch` block will execute to handle the exception. The `finally` block will always execute, whether or not an exception was thrown.

Here is a more concrete example of how this might be used in practice:

```
fun divideBy(numerator: Int, denominator: Int): Int {
    try {
        return numerator / denominator
    } catch (e: ArithmeticException) {
        println("Cannot divide by zero!")
    } finally {
        println("Done with division.")
    }
    return 0
}
```

In this example, the `divideBy` function attempts to divide the `numerator` parameter by the `denominator` parameter. If `denominator` is zero, then an `ArithmeticException` will be thrown and the code in the `catch` block will execute to print an error message. Regardless of whether an exception is thrown or not, the code in the `finally` block will execute to print a message indicating that the division is complete. The function then returns an integer value, which in this case will be zero if an exception occurs.