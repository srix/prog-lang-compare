Regex is used in Julia for pattern matching and manipulation of strings. The standard regex module in Julia is called `Regex`.

Here is how you can create a regular expression object and match it against a string:

```julia
# Create a regex object
r = r"world"

# Match the regex against a string
match(r, "Hello world!") # Returns a Match object with the matched string "world"
```

You can also extract all occurrences of the matched pattern in a string using `matchall()` function:

```julia
# Extract all occurrences of the matched regex in a string
matchall(r, "Hello world! Hello world!") # Returns an array of Match objects with "world" repeated twice
```

To replace the matched pattern with another string, you can use `replace()` function:

```julia
# Replace the matched regex with a new string
replace("Hello world!", r, "everyone") # Returns "Hello everyone!"
```

You can also use regex to split a string into an array of substrings using `split()` function:

```julia
# Split a string into an array of substrings
split("hello-world", r"-") # Returns ["hello", "world"]
```

You can also use regex to search for and extract specific patterns within a string using `search()` function:

```julia
# Search for a specific pattern in a string
search(r"[0-9]+", "abc123def") # Returns a Match object with the matched string "123"
```

Note that in Julia, regex patterns are written using a combination of regular characters and special characters called metacharacters, which have special meaning within the regex. It is recommended to study the documentation thoroughly before implementing regex in your code.