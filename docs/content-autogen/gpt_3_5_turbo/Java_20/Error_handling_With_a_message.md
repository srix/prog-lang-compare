Exception handling is an important aspect of software development. Exceptions in Java are managed through the try/catch and finally blocks. Let’s take an example of dividing two numbers.

```
public class ExceptionHandlingExample {

  public static void main(String[] args) {

    int num1 = 20, num2 = 0;

    try {
       int result = num1 / num2;
    } catch (ArithmeticException e) {
         System.out.println("Exception occurred: Division by Zero"); 
    } finally {
         System.out.println("Finally block is executed");
    }

  }

}
```

In the example above, we are trying to divide 20 by 0. Since division by zero is not defined, it throws an ArithmeticException. To handle this exception, we use the try block. Inside the try block, we have written a statement to divide the two numbers. If an exception is thrown by this statement, it is caught by the catch block.

The catch block is used to catch the exception and handle it. In the example, we catch the ArithmeticException and print a message “Exception occurred: Division by Zero”. This message will be displayed in the output console when the exception occurs.

The finally block is used to run a block of code, regardless of whether there is an exception or not. This block of code will be executed after the try and catch blocks are executed.

In the example, we have written a message in the finally block, “Finally block is executed”, which will be executed after the exception handling is done.

In summary, the try/catch/finally statement allows us to handle exceptions that may be thrown in our code. The try block contains code that may throw an exception. The catch block catches the exception and handles it gracefully. The finally block is a block of code that will run regardless of whether there is an exception, and is useful for cleaning up resources in our code.