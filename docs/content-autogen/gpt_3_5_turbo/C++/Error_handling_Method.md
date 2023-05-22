In C++, try/catch/finally blocks are used to handle exceptions thrown during runtime. The try block contains the code that may throw an exception, the catch block catches the thrown exception and handles it, and the finally block contains code that is executed regardless of whether or not an exception is thrown.

Here's an example of how to use try/catch/finally in a method:

```
void divide(int numerator, int denominator) {
    try {
        if (denominator == 0) {
            throw "Division by zero error"; // throw an exception if denominator is zero
        }
        int result = numerator / denominator; // perform division if denominator is not zero
        std::cout << "Result: " << result << std::endl;
    }
    catch (const char* error) {
        std::cerr << "Error: " << error << std::endl; // handle the exception and print an error message
    }
    finally {
        std::cout << "Execution complete." << std::endl; // regardless of whether an exception was thrown, this line of code will be executed
    }
}
```

In this example, the `divide` method takes two integer arguments and attempts to divide them. If the denominator is zero, an exception is thrown with the message "Division by zero error". The catch block catches the exception and prints an error message. The finally block always prints the message "Execution complete.".

We can call the `divide` function with different arguments to see how it handles exceptions:

```
divide(10, 0); // prints "Error: Division by zero error" and "Execution complete."
divide(10, 5); // prints "Result: 2" and "Execution complete."
```

In the first call, an exception is thrown and caught, resulting in the error message being printed. In the second call, the division is performed successfully and the result is printed, followed by the "Execution complete." message in both cases.