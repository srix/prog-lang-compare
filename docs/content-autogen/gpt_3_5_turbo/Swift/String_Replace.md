To replace a substring within a string in Swift, you can use the `replacingOccurrences(of:with:)` method. This method takes in two arguments: the substring to be replaced and the replacement substring. It returns a new string with all occurrences of the specified substring replaced with the replacement substring. Here is an example:

```swift
let originalString = "Hello, World!"
let newString = originalString.replacingOccurrences(of: "o", with: "e")
print(newString) // Prints "Helle, Werld!"
```

In this example, we replace all occurrences of the letter "o" with the letter "e" in the string "Hello, World!"

You can also use this method to replace only a specific occurrence of the substring by providing a range of the string to replace. Here's an example:

```swift
let originalString = "The quick brown fox jumps over the lazy dog"
var newString = originalString
if let range = newString.range(of: "fox") {
    newString.replaceSubrange(range, with: "puma")
}
print(newString) // Prints "The quick brown puma jumps over the lazy dog"
```

In this example, we replace only the first occurrence of the substring "fox" with "puma" by using the `range(of:)` method to find the range of the substring and then using `replaceSubrange(_:with:)` to replace the substring within that range.