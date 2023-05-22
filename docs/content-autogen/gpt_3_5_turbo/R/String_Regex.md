Regex, short for regular expression, is a sequence of characters that represent a search pattern. In R, regex can be used for pattern matching, extracting, replacing and manipulating strings. Here are some examples of how to use regex in R:

1. Pattern matching:

To check if a pattern exists in a string, we can use the `grepl()` function which returns `TRUE` if the pattern is found, `FALSE` otherwise.

```R
my_string <- "Hello World"
grepl("World", my_string)   # Output: TRUE
```

2. Extracting:

To extract a part of a string based on a regex pattern, we can use the `str_extract()` function.

```R
my_string <- "The 99 red balloons"
str_extract(my_string, "\\d+")   # Output: 99
```

This pattern `\\d+` matches any sequence of one or more digits.

3. Replacing:

To replace a part of a string based on a regex pattern, we can use the `gsub()` function.

```R
my_string <- "Hello World"
gsub("World", "Universe", my_string)   # Output: Hello Universe
```

4. Splitting:

To split a string into substrings based on a regex pattern, we can use the `strsplit()` function.

```R
my_string <- "apple,banana,orange,grape"
strsplit(my_string, ",")   # Output: list(c("apple", "banana", "orange", "grape"))
```

This pattern `,` matches the comma.

5. Anchors:

Anchors are regex patterns that provide a way to anchor a search to the beginning or end of a string. There are two types of anchors in regex, `^` which anchors a search to the beginning of a string and `$` which anchors a search to the end of a string.

```R
my_string <- "The quick brown fox jumps over the lazy dog"
grepl("^The", my_string)   # Output: TRUE
grepl("dog$", my_string)   # Output: TRUE
```

These patterns `^The` and `dog$` match the beginning and the end of the string respectively.

These are some basic examples of how to use regex in R. Regex can be complex, but once you understand the basic syntax, it becomes a powerful tool for handling strings in R.