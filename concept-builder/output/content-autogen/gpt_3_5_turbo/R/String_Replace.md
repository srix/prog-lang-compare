To replace a substring within a string in R, we can use the `gsub()` function. This function replaces all occurrences of a pattern in a string with a specified replacement. Here is the general syntax of `gsub()` function:

```
gsub(pattern, replacement, x)
```

* `pattern`: a character string containing a regular expression pattern that we want to replace.
* `replacement`: a character string that we want to replace the matched pattern with.
* `x`: a character vector in which we want to make replacements.

Here is an example:

```
# Create a string
text <- "Hello world! Today is a sunny day."

# Replace all occurrences of "day" with "night"
new_text <- gsub("day", "night", text)

# Print the output
print(new_text)

# Output:  "Hello world! Today is a sunny night."
```

In this example, we use the `gsub()` function to replace all occurrences of the word "day" with "night" in the string "text". The resulting string "new_text" contains the modified string.