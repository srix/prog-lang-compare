In R, we can use the built-in function `==` for comparing two strings.

Here's an example:

```
string1 <- "Hello"
string2 <- "hello"

string1 == string2 # Returns FALSE
```

The above example returns FALSE because the comparison is case-sensitive.

If we want a case-insensitive comparison, we can use the `toupper()` or `tolower()` functions as shown below:

```
string1 <- "Hello"
string2 <- "hello"

toupper(string1) == toupper(string2) # Returns TRUE
tolower(string1) == tolower(string2) # Returns TRUE
```

The above example returns TRUE for both cases as we used `toupper()` and `tolower()` to make the comparison case-insensitive.