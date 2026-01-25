In R, we can remove parts of a string using the `gsub()` function.

Here's an example of how to remove a specific character from a string:

```
phrase <- "hello world!"
new_phrase <- gsub("l", "", phrase)
print(new_phrase)
```

In this example, we use `gsub()` to remove all occurrences of the character "l" from the string "hello world!". The resulting string is "heo word!".

We can also use `gsub()` to remove a substring of a string. Here's an example:

```
phrase <- "The quick brown fox jumps over the lazy dog."
new_phrase <- gsub("brown fox ", "", phrase)
print(new_phrase)
```

In this example, we use `gsub()` to remove the substring "brown fox " from the string "The quick brown fox jumps over the lazy dog.". The resulting string is "The quick jumps over the lazy dog.".

Note that `gsub()` replaces all occurrences of a pattern in a string, so if there are multiple instances of the pattern you want to remove, they will all be removed from the resulting string.