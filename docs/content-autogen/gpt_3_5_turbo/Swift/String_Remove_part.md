To remove part of a string in Swift, you can use the `replacingOccurrences(of:with:)` method. This method allows you to replace all occurrences of a specified substring in a string with a new substring. To remove part of a string, you can simply replace the part you want to remove with an empty string.

Here is an example:

```swift
let originalString = "Hello, World!"
let substringToRemove = ", World"
let newString = originalString.replacingOccurrences(of: substringToRemove, with: "")
print(newString) // prints "Hello!"
```

In this example, we first create a variable `originalString` with the string "Hello, World!" We then create a new constant `substringToRemove` with the value ", World". Finally, we use the `replacingOccurrences(of:with:)` method to replace all occurrences of the `substringToRemove` with an empty string. The resulting string is "Hello!", which is printed to the console.