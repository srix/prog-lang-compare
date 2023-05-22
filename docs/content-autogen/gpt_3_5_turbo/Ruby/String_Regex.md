Regular expressions or regex is a sequence of characters which specifies a search pattern. They are essentially a matching pattern that allows you to search for specific patterns in text. In Ruby, we can use the "regex" module which is part of the core library for Ruby.

Here are a few examples of how you can use regex in Ruby:

1. Basic Matching: 

```ruby
string = "The quick brown fox jumps over the lazy dog"
if string =~ /quick/
  puts "It matches the word quick"
else
  puts "It doesn't match"
end
```

2. Multiline Matching:

```ruby
string = "apple
banana
orange"

if string =~ /banana/
  puts "It matches the word banana"
else
  puts "It doesn't match"
end
```

3. Using the match method:

```ruby
string = "The quick brown fox jumps over the lazy dog"
match = string.match(/jumps/)
puts match[0]
#output: jumps
```

4. Replacing strings:

```ruby
string = "The quick brown fox jumps over the lazy dog"
string.gsub!(/quick/, "slow")
puts string
#output: "The slow brown fox jumps over the lazy dog"
```

These are just a few examples of how you can use regex in Ruby. Regex is a very powerful tool when working with text and can help you find, validate, and replace text in a very efficient way.