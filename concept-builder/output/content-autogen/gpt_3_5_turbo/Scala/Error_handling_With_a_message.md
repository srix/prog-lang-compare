In Scala, try/catch/finally blocks are used for handling exceptions in a program. The try block contains the code that may throw an exception, while the catch block catches the exception and provides a message to the user, and the finally block contains any code that should always be executed, regardless of whether an exception occurred or not.

Here is an example of using try/catch/finally block in Scala:

```scala
try {
  // code that may throw an exception
  val x = 10 / 0
} catch {
  case e: ArithmeticException => println("Cannot divide by zero")
} finally {
  // code that should always be executed
  println("This block will always be executed, whether an exception occurred or not.")
}
```

In this example, the code in the try block attempts to divide 10 by 0, which will throw an ArithmeticException. The catch block catches the exception and prints a message to the user saying that division by zero is not possible. The finally block prints a message that will always be executed, whether the exception occurred or not.

Another example illustrating try/catch/finally block usage is:

```scala
try {
  // some code that may throw an exception
} catch {
  case e: Exception => println("An exception occurred: " + e.getMessage)
} finally {
  println("This message is displayed in all cases")
}
```

In this example, the try block may contain any code that has the potential to throw an exception. The catch block catches any type of exception that the code may throw. In the case of an exception, the catch block will execute and display the message along with the exception message that is passed as an argument. The finally block will be executed at any cost, whether an exception occurred or not.

By using try/catch/finally blocks in your code, you can handle exceptions more gracefully and provide a meaningful message to the user when an exception occurs.