In Julia, we can split a string using the `split()` function. The function takes two arguments: the string to be split and the delimiter to split on. The delimiter can be a single character or a string.

Here's an example:

```julia
# Splitting a string using a single character delimiter
text = "Hello, world!"
result = split(text, ",")
println(result)  # Output: ["Hello", " world!"]

# Splitting a string using a multi-character delimiter
text = "The quick brown fox jumps over the lazy dog."
result = split(text, "the")
println(result)  # Output: ["The quick brown fox jumps over ", " lazy dog."]
```

In the above examples, the first argument is the string we want to split, and the second argument is the delimiter we want to split on - which can be a single character (`,` in the first example) or a string (`"the"` in the second example).

The `split()` function returns an array of substrings resulting from splitting the input string by the specified delimiter.