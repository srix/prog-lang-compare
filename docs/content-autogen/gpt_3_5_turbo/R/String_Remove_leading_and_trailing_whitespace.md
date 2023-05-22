Sure, in R, you can use the `trimws()` function to remove both leading and trailing whitespaces from a string.

Here's an example:

```
# Define a string with leading and trailing whitespaces
text <- "  Hello, World!   "

# Use the trimws() function to remove the whitespaces
trimmed_text <- trimws(text)

# Print the original string and the trimmed string
cat("Original string: '",text,"'\n", sep="")
cat("Trimmed string: '",trimmed_text,"'", sep="")
```

Output:
```
Original string: '  Hello, World!   '
Trimmed string: 'Hello, World!'
```

As you can see, the `trimws()` function removed the leading and trailing whitespaces from the string.