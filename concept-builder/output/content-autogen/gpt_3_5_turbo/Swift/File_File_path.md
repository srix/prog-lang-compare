In Swift, you can get the file path using the `Bundle` framework. The `Bundle` class provides information about the application's code and resources, including the file system location of the app bundle.

Here's an example of how to retrieve the path of a file located in the app bundle:

```swift
if let filePath = Bundle.main.path(forResource: "example", ofType: "txt") {
    print("File path: \(filePath)")
} else {
    print("File not found")
}
```

In this example, we are using the `path(forResource: ofType:)` method of the `Bundle` class to retrieve the path of a file named "example.txt" located in the app bundle. If the file is found, its path is printed to the console. Otherwise, a message indicating that the file could not be found is displayed.

You can also retrieve the path of a file located outside of the app bundle, like this:

```swift
let fileManager = FileManager.default
let filePath = fileManager.currentDirectoryPath + "/example.txt"
print("File path: \(filePath)")
```

In this example, we are using the `FileManager` class to retrieve the current directory path, and appending the name of the file we want to locate. The resulting file path is then printed to the console. Note that this assumes that the file is located in the same directory as the running program. If the file is located in a different directory, you'll need to specify the full path.