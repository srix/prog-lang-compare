In Ruby, you can split a string into an array of substrings using the `.split` method. The method splits the original string into substrings at any point where a specified separator character or regular expression pattern matches.

Here are some examples of splitting a string in Ruby:

```
# Split a string at a space character
string = "Hello World"
array = string.split(" ")
puts array
# Output: ["Hello", "World"]

# Split a string at a comma
string = "Apple,Banana,Cherry"
array = string.split(",")
puts array
# Output: ["Apple", "Banana", "Cherry"]

# Split a string at a regular expression pattern
string = "The quick brown fox jumps over the lazy dog"
array = string.split(/\s+/)
puts array
# Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
```

In the first example, we split the string using a space character as the separator. In the second example, we split the string using a comma as the separator. In the third example, we split the string at any sequence of one or more whitespace characters using a regular expression.