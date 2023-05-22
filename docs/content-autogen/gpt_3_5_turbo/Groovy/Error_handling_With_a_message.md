In Groovy, try/catch/finally statements are used for error handling in the code. The try block contains the code that may throw an exception, the catch block handles the exception if one is thrown, and the finally block contains code that will always execute, regardless of whether an exception was thrown or not.

Here is an example of try/catch/finally with a message in Groovy:

```
try {
  // code that may throw an exception
  def x = 10 / 0
} catch (Exception e) {
  // handling the exception with a message
  println "An error occurred: ${e.message}"
} finally {
  // code that will always execute
  println "The code has finished executing."
}
```

In this example, the try block divides 10 by 0, which will throw an ArithmeticException. The catch block catches the exception and prints a message with the exception's message. The finally block will execute regardless of whether an exception was thrown or not, and it prints a message to indicate that the code has finished executing.

Output:
```
An error occurred: / by zero
The code has finished executing.
```

If the try block does not throw an exception, the catch block will be skipped and only the finally block will be executed.

Here is an example where the try block does not throw an exception:

```
try {
  // code that does not throw an exception
  def x = 10 - 5
} catch (Exception e) {
  // this block will be skipped
  println "An error occurred: ${e.message}"
} finally {
  // code that will always execute
  println "The code has finished executing."
}
```

Output:
```
The code has finished executing.
```