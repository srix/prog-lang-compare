In Swift, try/catch/finally is used to handle errors and exceptions in the code. The try block contains code that may throw an error or exception. The catch block handles the error that is caught by the try block. The finally block contains the code that will execute regardless of whether the error was caught or not.

Here's an example of how to use try/catch/finally:

```
enum CustomError: Error {
    case invalidData
}

func fetchData() throws {
    let data = ["John", "Sam", "Peter", "Thomas"]

    guard !data.isEmpty else {
        throw CustomError.invalidData
    }

    print("Data fetched successfully")
}

do {
    try fetchData()
} catch {
    print("Error occurred: \(error)")
} finally {
    print("Execution completed")
}
```

In this example, we define an error "CustomError" and a function "fetchData" that throws an error if the data is invalid. In the try block, we call the "fetchData()" function. If an error occurs, it will be caught by the catch block, which will print the error message. The finally block will be executed regardless of whether the error was caught or not, and will print the message "Execution completed".