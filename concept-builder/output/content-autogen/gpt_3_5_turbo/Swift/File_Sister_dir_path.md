In Swift, you can get the path of a sibling directory using FileManager. Here's an example code:

```swift
// Define the base path
let basePath = "/Users/username/Documents"

// get the path of the parent directory
let parentPath = (basePath as NSString).deletingLastPathComponent

// get the path of the sibling directory
let siblingPath = (parentPath as NSString).appendingPathComponent("SiblingDirectory")

print(siblingPath) // this will output "/Users/username/SiblingDirectory"
```

In this example, we first define the base path as "/Users/username/Documents". Then, we get the path of the parent directory by removing the last component from the base path using the `deletingLastPathComponent` method of NSString. 

Finally, we get the path of the sibling directory by appending the name of the sibling directory to the parent directory path using the `appendingPathComponent` method of NSString. 

The resulting `siblingPath` variable will contain the path of the sibling directory.