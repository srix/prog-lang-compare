In Swift, `try/catch/finally` statements are used for exception handling. Exceptions occur when unexpected conditions or errors occur during program execution. A try block contains the code that may throw an exception, while a catch block handles the exception if it is thrown. The finally block is optional and contains code that is executed after either the try or catch block is finished executing, regardless of whether an exception was thrown.

Here's an example of a method that declares and catches an exception:

```
func divide(_ a: Int, by b: Int) throws -> Int {
    if b == 0 {
        throw MyError.divisionByZero
    }
    return a / b
}
```

- In this example, the method takes two integers `a` and `b` as parameters.
- If `b` is zero, this indicates a division by zero error, so the method throws an exception using the `throw` keyword.
- Otherwise, the method divides `a` by `b` and returns the result.

Now, let's look at how to call this method and handle any exceptions:

```
do {
    let result = try divide(10, by: 2)
    print(result)
} catch MyError.divisionByZero {
    print("Division by zero error")
} catch {
    print("Unknown error: \(error)")
} finally {
    print("Method execution complete")
}
```

- The code above creates a do-catch-finally block.
- The `try` keyword is used to call the `divide()` method, which can throw an exception.
- If the exception type matches `MyError.divisionByZero`, the appropriate error message is printed.
- If the exception is not of that type, a generic error message is printed.
- The finally block contains some code that will always be executed after the try or catch block.

Overall, `try`, `catch`, and `finally` are important features in Swift that will help you write more robust and reliable code.