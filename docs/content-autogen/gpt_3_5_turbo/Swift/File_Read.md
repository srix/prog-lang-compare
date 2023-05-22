In Swift, reading a file can be done using the `FileManager` class. The following is an example code snippet that reads a file called `example.txt` in the user's documents directory:

```swift
let fileManager = FileManager.default
let documentsURL = try! fileManager.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: false)
let fileURL = documentsURL.appendingPathComponent("example.txt")
if let fileContents = try? String(contentsOf: fileURL) {
    print(fileContents)
} else {
    print("Unable to read file")
}
```

This code first creates an instance of `FileManager`, then retrieves the URL for the user's documents directory. It appends the file name to the URL to get the full path to the file. It then attempts to read the contents of the file as a string using the `String` method `contentsOf`. If the read is successful, it prints the contents of the file to the console. If it fails, it will print an error message.