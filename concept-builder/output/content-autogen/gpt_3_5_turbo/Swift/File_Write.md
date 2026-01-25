To write a file in Swift, you can use the FileManager class which provides methods to create, write, and delete files and directories.

Here's an example of creating a file and writing to it in Swift:

```Swift
let fileName = "example.txt"
let documentDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
let fileURL = documentDirectory.appendingPathComponent(fileName)

do {
    let text = "Hello, world!"
    try text.write(to: fileURL, atomically: false, encoding: .utf8)
} catch {
    print("Error writing to file: \(error.localizedDescription)")
}
```

In this example, we first define the name of the file we want to create (`example.txt`) and then get the path to the document directory of the app using the `urls(for:in:)` method of the `FileManager` class.

Next, we create a `fileURL` by appending the file name to the document directory path using the `appendingPathComponent(_:)` method.

Finally, we write the text `"Hello, world!"` to the file using the `write(to:atomically:encoding:)` method. The `atomically` parameter specifies whether to write to the file atomically (true) or non-atomically (false), while the `encoding` parameter specifies the encoding to use (`utf8` in this case).

If the write operation is successful, the text will be written to the file at the specified `fileURL`. If there is an error, the catch block will handle it and print an error message.

Alternatively, you can use the following approach to write to a file:

```Swift
let fileName = "example.txt"
let documentDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
let fileURL = documentDirectory.appendingPathComponent(fileName)

do {
    let fileHandle = try FileHandle(forWritingTo: fileURL)
    defer {
        fileHandle.closeFile()
    }
    let text = "Hello, world!"
    if let data = text.data(using: .utf8) {
        fileHandle.write(data)
    }
} catch {
    print("Error writing to file: \(error.localizedDescription)")
}
```

Here, we first create a `FileHandle` using the `forWritingTo:` method of the `FileManager` class. We then defer the call to `fileHandle.closeFile()` to ensure that the file handle is closed after we are done writing to it.

We then convert the string to data using the `data(using:)` method and write it to the file using the `write(_:)` method of the file handle.

Again, if there is an error, the catch block will handle it and print an error message.