In Ruby, we can check if a string is a number using the `to_i` or `to_f` method and checking the result against the original string. If they are equal, then the string is a number. Here's an example:

```ruby
# Example 1 - checking if a string is an integer
string = "123"
if string.to_i.to_s == string
  puts "String is an integer!"
else
  puts "String is not an integer."
end
# Output: String is an integer!


# Example 2 - checking if a string is a float
string = "12.34"
if string.to_f.to_s == string
  puts "String is a float!"
else
  puts "String is not a float."
end
# Output: String is a float!


# Example 3 - checking if a string is a number with leading/trailing spaces
string = "  56  "
if string.strip.to_i.to_s == string.strip || string.strip.to_f.to_s == string.strip
  puts "String is a number!"
else
  puts "String is not a number."
end
# Output: String is a number!
```

In these examples, we use the `to_i` and `to_f` methods to convert the string to an integer or float, then use the `to_s` method to convert it back to a string, and compare it to the original string. If they are equal, then the string is a number. 

We also use the `strip` method to remove any leading/trailing spaces in the string before checking if it's a number.