In Swift, regular expressions (regex) can be used for pattern matching and string manipulation. Here's how to use regex in Swift with examples:

1. Import the `Foundation` framework: 

```swift
import Foundation
```

2. Create a regex pattern using `NSRegularExpression` class:

```swift
let pattern = "^[A-Za-z]+$" // accepts only letters (uppercase or lowercase)
guard let regex = try? NSRegularExpression(pattern: pattern) else { return }
```

3. Check if a string matches the regex pattern using `matches` function:

```swift
let string = "Hello World"
let matches = regex.matches(in: string, range: NSRange(string.startIndex..., in: string))
if !matches.isEmpty {
  print("String matches the pattern!")
}
```

4. Replace matches in a string using `stringByReplacingMatches` function:

```swift
let stringWithNumbers = "I have 3 apples and 4 oranges."
let replacedString = regex.stringByReplacingMatches(in: stringWithNumbers, options: [], range: NSRange(stringWithNumbers.startIndex..., in: stringWithNumbers), withTemplate: "")
print(replacedString) // "I have  apples and  oranges."
```

5. Extract matched parts of a string using `firstMatch` function:

```swift
let stringToExtract = "My phone number is +1-123-456-7890."
guard let match = regex.firstMatch(in: stringToExtract, options: [], range: NSRange(stringToExtract.startIndex..., in: stringToExtract)) else { return }
let extractedString = (stringToExtract as NSString).substring(with: match.range)
print(extractedString) // "Myphonenumberis"
```

These are just a few examples of how to use regex in Swift. With regex, you can create powerful pattern matching and string manipulation operations.