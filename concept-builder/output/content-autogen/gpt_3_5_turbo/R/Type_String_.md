In R, there are multiple ways to check if a string is a number. Here are three common ways to achieve this:

1. Using the `is.numeric()` function: This function checks if the argument passed to it is a numeric value or not. If the input is a string that can be converted to a numeric value, then it will return `TRUE`.

```
> is.numeric("23.5")
[1] TRUE

> is.numeric("hello")
[1] FALSE
```

2. Using the `as.numeric()` function: This function tries to convert the argument passed to it into a numeric value. If the input is a string that can be converted to a numeric value, then it will return the numeric value. If the input is not a numeric string, then it will return `NA`.

```
> as.numeric("23.5")
[1] 23.5

> as.numeric("hello")
[1] NA
```

3. Using regular expressions: Regular expressions can be used to match patterns in strings. In R, we can use the `grepl()` function with regular expressions to check if a string is numeric. The following regular expression will match any string that contains only digits and optionally a decimal point:

```
> grepl("^\\d+\\.?\\d*$", "23.5")
[1] TRUE

> grepl("^\\d+\\.?\\d*$", "hello")
[1] FALSE
```

In the above examples, `^` indicates the start of a string, `$` indicates the end of a string, `\\d` indicates a digit, `+` indicates one or more of the preceding pattern, `\\.?` indicates a decimal point (optional), and `*` indicates zero or more of the preceding pattern.