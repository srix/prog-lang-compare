In Julia, you can remove parts of a string using the `replace()` function or indexing.

1. Using `replace()`: You can use the `replace()` function to remove a specific substring from a string by replacing it with an empty string. The syntax is as follows:

```
new_string = replace(original_string, substring_to_remove, "")
```

Here's an example:

```julia
original_string = "Hello, world!"
substring_to_remove = "world"
new_string = replace(original_string, substring_to_remove, "")
println(new_string) # Output: "Hello, !"
```

2. Using indexing: You can also remove a specific portion of a string using indexing. The syntax is:

```
new_string = old_string[begin:index_to_remove-1]*old_string[index_to_remove+length_of_substring:end]
```

Here's an example:

```julia
old_string = "Good morning, everyone!"
index_to_remove = 14
length_of_substring = 9
new_string = old_string[begin:index_to_remove-1]*old_string[index_to_remove+length_of_substring:end]
println(new_string)  # Output: "Good morning, !"
```

Note that the `begin` is optional since it represents the first index.