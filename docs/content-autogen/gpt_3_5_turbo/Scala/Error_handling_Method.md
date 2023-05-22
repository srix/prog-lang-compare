In Scala, try/catch/finally is used to handle exceptions that may arise during the execution of a method. It consists of three blocks:

1. try: This block contains the code that needs to be executed. If any exception occurs, it throws the exception.

2. catch: This block is executed if any exception occurs in the try block. It catches the exception and handles it accordingly.

3. finally: This block is always executed after the try and catch blocks, whether an exception is thrown or not. 

Here is an example method that demonstrates the use of try/catch/finally:

```
def divide(x: Int, y: Int): Int = {
  try {
    x / y
  } catch {
    case e: ArithmeticException => {
      println("Error: " + e.getMessage())
      0
    }
  } finally {
    println("Division is done.")
  }
}
```

In the above example, we have a method called `divide` that takes two integer parameters, `x` and `y`. Inside the try block, we divide x by y. If y is 0, it will throw an `ArithmeticException`. In the catch block, we catch the exception and print an error message along with returning 0. In the finally block, we print a message to indicate that division is done.

Let's test the `divide` method:

```
// Test with divisor as non-zero
println(divide(10, 5)) // Output: 2
// Output: Division is done.

// Test with divisor as zero
println(divide(10, 0)) // Output: 0
// Output: Error: / by zero
// Output: Division is done.
```

In the first test, `divide` method successfully divides 10 by 5. In the second test, since divisor is zero, it throws an `ArithmeticException`, which is caught in the catch block and returns 0. Finally, the message "Division is done." is printed in both cases.

Note that there can be multiple catch blocks for different types of exceptions. Also, the finally block is optional and can be omitted if not required.