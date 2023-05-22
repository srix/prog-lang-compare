Regex (Regular Expression) is a powerful tool that allows you to search, match, and manipulate text data. Groovy supports regex through the Matcher and Pattern APIs, which provides several methods to define, parse, and match patterns in strings.

Here are some examples of using regex in Groovy:

1. Defining a regex pattern:
```
def regex = /hello*/
```
This pattern matches any string that starts with "hell" and is followed by zero or more "o" characters.

2. Using the Matcher API to find a match:
```
def input = "hello world"
def matcher = input =~ /hello/
assert matcher.matches()
```
The `=~` operator matches the input string against the regex pattern. If the pattern is found, `matcher.matches()` returns true.

3. Substituting text with the replaceAll method:
```
def input = "hello world"
def output = input.replaceAll(/hello/, "hi")
assert output == "hi world"
```
The `replaceAll()` method replaces all occurrences of the regex pattern with the replacement string "hi".

4. Extracting matched groups using the find method:
```
def input = "I'm John, and I'm 30 years old"
def matcher = input =~ /I'm (\w+), and I'm (\d+) years old/
assert matcher.find()
assert matcher.group(1) == "John"
assert matcher.group(2) == "30"
```
This example matches the input string against a pattern that contains two groups: the first group matches any word character after "I'm" and the second group matches any digit after "I'm". `matcher.find()` finds the first occurrence of the pattern, and `matcher.group(index)` returns the value of the group at the specified index.

Overall, regex is a valuable tool that allows you to manipulate and search text data with a high degree of flexibility and precision, and Groovy provides excellent support for regex through the Matcher and Pattern APIs.