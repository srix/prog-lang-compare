To replace a substring within a string in Groovy, you can use the `replace()` method. Here is an example of how to replace all occurrences of a particular substring:

```groovy
def originalString = "The quick brown fox jumps over the lazy dog"
def newString = originalString.replace("lazy", "energetic")
println(newString) // The quick brown fox jumps over the energetic dog
```

In this example, `"lazy"` is the substring being replaced and `"energetic"` is the replacement substring. The `replace()` method returns a new string with all occurrences of the original substring replaced with the new substring.

You can also use regular expressions to replace substrings. Here is an example that replaces any occurrence of multiple whitespaces with a single space:

```groovy
def originalString = "The  quick brown    fox jumps over the lazy dog"
def newString = originalString.replaceAll(/\s+/, " ")
println(newString) // The quick brown fox jumps over the lazy dog
```

In this example, `/\s+/` is a regular expression that matches one or more whitespace characters. The `replaceAll()` method replaces all occurrences of the regex with the replacement string, which is `" "` in this case.