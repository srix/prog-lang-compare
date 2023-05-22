To find all elements of an array satisfying a condition in Ruby, you can use the `select` method or the `keep_if` method. Here are some examples:

Example 1: Find all even numbers in an array

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = arr.select { |num| num.even? }
puts even_numbers # output: [2, 4, 6, 8, 10]
```

Example 2: Find all strings longer than 5 characters in an array

```ruby
arr = ["apple", "banana", "orange", "pear", "kiwi"]
long_strings = arr.select { |str| str.length > 5 }
puts long_strings # output: ["banana", "orange"]
```

Example 3: Remove all numbers less than 3 from an array

```ruby
arr = [1, 2, 3, 4, 5]
arr.keep_if { |num| num >= 3 }
puts arr # output: [3, 4, 5]
```

Example 4: Remove all strings that start with the letter "a" from an array

```ruby
arr = ["apple", "banana", "avocado", "pear"]
arr.keep_if { |str| !str.start_with?("a") }
puts arr # output: ["banana", "pear"]
```

These methods allow you to easily filter and manipulate arrays in Ruby.