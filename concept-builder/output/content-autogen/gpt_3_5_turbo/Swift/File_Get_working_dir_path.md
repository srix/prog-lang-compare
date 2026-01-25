In Swift, to get the current working directory path, we can use the FileManager class which provides methods to browse, create and manipulate directory and file structures.

Here's an example code snippet demonstrating how to get the working directory path using FileManager in Swift:

```swift
let fm = FileManager.default
let currentPath = fm.currentDirectoryPath
print("Current working directory path is: \(currentPath)")
```

This code declares a constant `fm` of type `FileManager` which corresponds to the default instance of the `FileManager` class. Then, the `currentDirectoryPath` method of this instance is called to retrieve the current working directory path, which is stored in the `currentPath` constant. Finally, the path is printed to the console using `print`.

Note that the current working directory path can vary depending on the context in which the program is executed. For instance, if the executable is launched from Xcode, the path will point to the build folder of the project, whereas if it's executed in the terminal, the path will be the one where the terminal window is opened.