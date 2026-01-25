In Swift, you can split a string into an array of substrings using the `split(separator: )` function. This function takes a separator character or string as an argument and returns an array of substrings that were separated by the specified separator.

Here is an example:

```swift
let str = "Hello, World!"
let result = str.split(separator: ", ")

print(result)
```

The output will be an array of two substrings:

```
["Hello", "World!"]
```

In this example, the separator character is a comma followed by a space. You can use any separator character or string that is appropriate for your specific use case.

If you want to split a string into lines, you can use the `split(separator: )` function like this:

```swift
let multiLineStr = "This is\na multiline\nstring"
let lines = multiLineStr.split(separator: "\n")

print(lines)
```

The output will be an array of three substrings:

```
["This is", "a multiline", "string"]
```

In this example, the separator string is `\n`, which is the newline character. This results in a split at each newline, separating the string into three lines.