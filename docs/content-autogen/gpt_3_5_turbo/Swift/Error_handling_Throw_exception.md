In Swift, you can throw an exception by using the `throw` keyword followed by an error object. Here is an example:

```
enum MyError: Error {
    case badInput
    case fileNotFound
}
func processFile(filename: String) throws {
    if filename.isEmpty {
        throw MyError.badInput
    } else if !FileManager.default.fileExists(atPath: filename) {
        throw MyError.fileNotFound
    }
    // process file here
}
```

In this example, we define an enumeration of errors called `MyError`. We then define a function called `processFile` that takes a file name as a parameter and may throw an exception if the file name is empty or if the file doesn't exist. 

When you call this function, you can use a `do-catch` block to catch and handle any thrown exceptions like so:

```
do {
    try processFile(filename: "file.txt")
} catch MyError.badInput {
    print("Bad input!")
} catch MyError.fileNotFound {
    print("File not found!")
} catch {
    print("Unknown error!")
}
```

In this example, if the `processFile` function throws an exception of type `MyError.badInput`, the message "Bad input!" will be printed to the console. Similarly, if it throws an exception of type `MyError.fileNotFound`, the message "File not found!" will be printed instead. If it throws any other exception, the message "Unknown error!" will be printed.