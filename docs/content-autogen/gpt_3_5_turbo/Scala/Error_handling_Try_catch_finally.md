In Scala, try/catch/finally is used to handle exceptions that may occur during runtime. 

The basic structure of try/catch/finally in Scala is:

```
try {
  // code that may throw an exception
} catch {
  case e: ExceptionType => // code to handle the exception
} finally {
  // code to execute regardless of exception status
}
```

Here's an example that demonstrates the use of try/catch/finally in Scala:

```
object TryCatchFinallyExample {
  def main(args: Array[String]): Unit = {
    try {
      val x = 10 / 0
    } catch {
      case e: ArithmeticException => println("Caught an arithmetic exception")
    } finally {
      println("Finally block executed")
    }
  }
}
```

In this example, we divide 10 by 0 which should result in a division by zero error. However, by wrapping it in a try/catch block, we can handle the error appropriately. Since dividing by zero results in an `ArithmeticException`, we catch that specific exception. In the `finally` block we have a print statement that will execute regardless of whether or not an exception is thrown.

Overall, try/catch/finally allows us to gracefully handle exceptions that may occur during runtime and ensure our code executes as intended, even if an error occurs.