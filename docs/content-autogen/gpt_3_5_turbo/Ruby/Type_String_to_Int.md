In Ruby, we can convert a string to an integer using the to_i method. Here are some examples:

Example 1: Simple string to integer conversion
```ruby
string_num = "123"
integer_num = string_num.to_i
puts integer_num # Output: 123
```

Example 2: Conversion of a string with leading and trailing spaces
```ruby
string_num = "    456  "
integer_num = string_num.to_i
puts integer_num # Output: 456
```

Example 3: Conversion of a string with non-numeric characters
```ruby
string_num = "12abc"
integer_num = string_num.to_i
puts integer_num # Output: 12
```

In the third example, notice that only the digits before the first non-numeric character were converted. If the string does not begin with any numeric characters, the to_i method will return 0.

Keep in mind that if the string represents an integer that is too large to be held by a Ruby integer (e.g. a 32-bit integer on a 32-bit platform), the to_i method will return the maximum/minimum integer value.