In Dart, try/catch/finally is used for error handling in a program. The try block contains the code that might throw an exception or error. The catch block catches the exception and handles it gracefully, while the finally block contains code that always executes, whether an exception was thrown or not.

Here's an example of how to use try/catch/finally with a message in Dart:

```
void divideNumbers(int num1, int num2) {
  try {
    int result = num1 ~/ num2;
    print('Result: $result');
  } catch (e) { 
    print('Error Occurred: $e'); 
  } finally {
    print('This block always executes.');
  }
}

void main() {
  divideNumbers(10, 0);
}
```

In the above example, the divideNumbers method tries to divide two numbers using the ~/ operator. If the second number is 0, an exception is thrown, which is caught by the catch block. Inside the catch block, we print a custom error message along with the thrown exception message. Finally, we print a message indicating that the finally block will always execute.

Output:
```
Error Occurred: IntegerDivisionByZeroException
This block always executes.
```
In this output, you can see an error message indicating that an IntegerDivisionByZeroException occurred, followed by the message from the finally block.