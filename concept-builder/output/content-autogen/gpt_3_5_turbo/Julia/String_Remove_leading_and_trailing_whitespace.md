To remove leading and trailing whitespaces from a string in Julia, you can use the `strip()` function. Here's an example:

```julia
# Original string with leading and trailing whitespaces
original_str = "   Hello, world!   "

# Remove leading and trailing whitespaces
new_str = strip(original_str)

# Output the new string
println(new_str)
```

This will output `"Hello, world!"` with the leading and trailing whitespaces removed.

You can also specify which characters to remove from the beginning and end of the string by passing them as arguments to the `strip()` function. For example:

```julia
# Original string with leading and trailing periods
original_str = "...Hello, world!..."

# Remove leading and trailing periods
new_str = strip(original_str, '.')

# Output the new string
println(new_str)
```

This will output `"Hello, world!"` with the leading and trailing periods removed.