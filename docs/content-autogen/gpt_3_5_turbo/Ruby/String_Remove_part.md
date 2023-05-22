To remove part of a string in Ruby, you can use the `slice!` method or the `gsub!` method.

The `slice!` method removes the specified portion of the string and returns it as a new string. Here's an example:

```ruby
str = "hello world"
removed_str = str.slice!(0, 5)
puts removed_str # "hello"
puts str # " world"
```

In this example, the `slice!` method removes the first 5 characters ("hello") from the `str` variable and returns them as `removed_str`.

The `gsub!` method allows you to remove specific character sequences from a string. Here's an example:

```ruby
str = "goodbye moon"
str.gsub!('moon', '')
puts str # "goodbye"
```

In this example, the `gsub!` method removes the word "moon" from the `str` variable and updates the variable with the new string, which is "goodbye".