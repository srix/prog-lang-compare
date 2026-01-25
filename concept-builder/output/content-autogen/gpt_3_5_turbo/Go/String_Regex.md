Sure, regex or regular expression is a useful tool in Go to match strings, find and replace data, validate input, and more. Here's how you can use regex in Go with examples:

1. Import the `regexp` package: First, you need to import the `regexp` package by adding this line at the beginning of your Go file: 

```
import "regexp"
```

2. Create a regex pattern: Then, you need to create a regex pattern that defines the pattern you want to match or search for. For example, if you want to match any word that starts with "go" regardless of case, you can create the pattern like this: 

```
pattern := "(?i)go\\w+"
```

Here, `(?i)` is a flag that enables case-insensitive matching, `go` is the literal string you want to match, and `\w+` is a word character that can appear one or more times.

3. Compile the regex pattern: Once you have the pattern, you need to compile it using the `Compile` function from the `regexp` package. Here's how to do it: 

```
regex := regexp.MustCompile(pattern)
```

This returns a `*regexp.Regexp` object that you can use to match or search for strings.

4. Use the regex pattern: Now that you have the regex object, you can use it to match or search for strings. Here are some examples:

```
// match a string against the regex pattern
result1 := regex.MatchString("golang is awesome")

// find the first match in a string
result2 := regex.FindString("Goroutines are lightweight threads of execution.")

// find all matches in a string
result3 := regex.FindAllString("Go is a programming language created by Google.", -1)

// replace matches in a string
result4 := regex.ReplaceAllString("Gopher loves to go to the golang meetup.", "💙")
```

In the above examples, `result1` will be `true` if the regex pattern matches the given string, `result2` will return the first match found in the string, `result3` will return a slice of all matches found in the string, and `result4` will return a new string with all matches replaced by the replacement string.

And that's it! You now know how to use regex in Go.