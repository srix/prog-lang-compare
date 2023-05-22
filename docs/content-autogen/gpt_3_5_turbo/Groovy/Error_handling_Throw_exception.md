In Groovy, you can throw exceptions using the `throw` keyword followed by an instance of a compatible exception class.

Here's an example of throwing an exception in Groovy:

```
try {
    def x = 10 / 0
} catch (ArithmeticException e) {
    throw new CustomException("Division by zero is not allowed", e)
}
```
In this example, we're trying to divide 10 by zero, which will raise an `ArithmeticException`. We catch this exception, and then throw a custom exception called `CustomException` with a message string and the original `ArithmeticException` passed in as the cause.

You can also throw exceptions in Groovy without a `try-catch` block like this:

```
def validateNumber(int input) {
    if (input < 0) {
        throw new IllegalArgumentException("Number must be positive")
    }
    return input * 2
}
```
In this example, we're defining a `validateNumber` function that checks if the input parameter is a positive number. If it's not, we throw an `IllegalArgumentException` with a message string.