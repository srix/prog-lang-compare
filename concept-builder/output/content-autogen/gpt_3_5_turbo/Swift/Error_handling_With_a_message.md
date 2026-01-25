Sure, we can do that! In Swift, `try/catch/finally` blocks are used to handle errors and make sure that certain tasks are executed no matter what the outcome of the try block is.

Here's an example of how you could use a `try/catch` block with a message in Swift:

```
do {
    // Some code that might throw an error
    let fileContents = try String(contentsOfFile: "path/to/file.txt")
    print(fileContents)
} catch let error as NSError {
    // Handle the error with a message
    print("Error reading file: \(error.localizedDescription)")
} finally {
    // Code that gets executed no matter what (optional)
    print("This will always get printed")
}
```

In this example, we're using the `try` keyword to attempt to read the contents of a file. If an error occurs, the `catch` block will catch it and print out a message including the error's description. The `finally` block is optional, but it will always get executed whether an error was caught or not.

Note that you can also catch specific types of errors by specifying the type after the `catch` keyword. This can be useful if you want to handle certain errors differently than others.

Here's an example of catching a specific error type:

```
do {
    // Some code that might throw an error
    let fileContents = try String(contentsOfFile: "path/to/file.txt")
    print(fileContents)
} catch let error as NSURLError {
    // Handle URL errors with a message
    print("Error reading file from URL: \(error.localizedDescription)")
} catch let error as NSError {
    // Handle other errors with a message
    print("Error reading file: \(error.localizedDescription)")
} finally {
    // Code that gets executed no matter what (optional)
    print("This will always get printed")
}
```

In this example, we're catching `NSURLError` specifically and printing a different error message than we would for other types of errors.