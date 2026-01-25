Regex (short for regular expression) is a pattern-matching technique that can be used in Kotlin (and many other programming languages) to search, manipulate, and validate text. Here's how to use regex in Kotlin with some examples:

1. Creating a Regex object
To use regex in Kotlin, you first need to create a Regex object. This can be done using the `Regex()` constructor, like this:

```
val regex = Regex(pattern)
```

The `pattern` parameter is a string that contains the regex pattern you want to match.

2. Matching a string against a regex pattern
Once you have a Regex object, you can use it to match a string against a regex pattern. This is done using the `matchEntire()` method, which returns a `MatchResult?` object if the string matches the pattern, or `null` if it doesn't. Here's an example:

```
val pattern = "\\d+".toRegex()
val matchResult = pattern.matchEntire("123")
if (matchResult != null) {
    println("Match found: ${matchResult.value}")
} else {
    println("No match found")
}
```

This code creates a Regex object that matches one or more digits (`\d+`), and then tries to match the string "123" against it. If a match is found, the code prints the matched value ("123") to the console.

3. Extracting matched groups
Regex patterns often include groups, which are portions of the pattern that you can extract separately. To do this in Kotlin, you can use the `groupValues` property of the `MatchResult` object, which returns a list of all matched groups. Here's an example:

```
val pattern = "(\\d+)-(\\d+)".toRegex()
val matchResult = pattern.matchEntire("123-456")
if (matchResult != null) {
    val group1 = matchResult.groupValues[1]
    val group2 = matchResult.groupValues[2]
    println("Match found: $group1, $group2")
} else {
    println("No match found")
}
```

This code creates a Regex object that matches a pattern of two groups (one or more digits, followed by a hyphen, followed by one or more digits), and then tries to match the string "123-456" against it. If a match is found, the code extracts both groups and prints them to the console ("123, 456").

4. Replacing matched text
Regex can also be used to replace text that matches a pattern, using the `replace()` method. Here's an example:

```
val pattern = "\\d+".toRegex()
val input = "1A2B3C4D5E"
val replacement = "***"
val output = pattern.replace(input, replacement)
println(output)
```

This code creates a Regex object that matches one or more digits, and then replaces all occurrences of that pattern in the string "1A2B3C4D5E" with "***". The resulting string ("A"B"C"D"E") is then printed to the console.

These are just a few examples of how to use regex in Kotlin. With this powerful tool, you can parse, validate, and manipulate text in countless ways.