In Swift, we can get the parent directory path of a file/folder using the `URL` class and its `deletingLastPathComponent()` method.

Here's an example code snippet:

```swift
let fileURL = URL(fileURLWithPath: "/Users/username/Documents/SampleFile.pdf")
let parentDirectoryURL = fileURL.deletingLastPathComponent()

print(parentDirectoryURL.path) // Output: "/Users/username/Documents"
```

In this example, we first initialize a `URL` instance with the path of a sample file ("/Users/username/Documents/SampleFile.pdf").

We then call the `deletingLastPathComponent()` method on this URL instance to obtain the parent directory path, which is then printed using the `path` property.