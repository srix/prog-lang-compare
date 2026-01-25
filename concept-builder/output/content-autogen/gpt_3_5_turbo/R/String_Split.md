In R, you can split a string using the `strsplit()` function. It works by applying a regular expression to the string and splitting where the pattern matches. Here are some examples:

Example 1: Splitting a string by a delimiter
```
# Define a string
my_string <- "apples, oranges, bananas"

# Split the string by the comma delimiter
split_string <- strsplit(my_string, ", ")

# View the resulting list
split_string
```

Output:
```
[[1]]
[1] "apples"   "oranges"  "bananas"
```

In this example, we split the string `"apples, oranges, bananas"` by the comma delimiter `", "`. The resulting list contains separate strings `"apples"`, `"oranges"`, and `"bananas"`.

Example 2: Splitting a string into individual characters
```
# Define a string
my_string <- "abcd"

# Split the string into individual characters
split_string <- strsplit(my_string, "")

# View the resulting list
split_string
```

Output:
```
[[1]]
[1] "a" "b" "c" "d"
```

In this example, we split the string `"abcd"` into individual characters by providing an empty string `""` as the delimiter. The resulting list contains separate strings `"a"`, `"b"`, `"c"`, and `"d"`.

Example 3: Splitting a string with a regular expression
```
# Define a string
my_string <- "apple1 orange2 banana3"

# Split the string using a regular expression to match digits
split_string <- strsplit(my_string, "[0-9]")

# View the resulting list
split_string
```

Output:
```
[[1]]
[1] "apple"  " orange" " banana"
```

In this example, we split the string `"apple1 orange2 banana3"` using a regular expression that matches any digit. The resulting list contains separate strings `"apple"`, `" orange"`, and `" banana"`. Note that the digits themselves are not included in the resulting strings.