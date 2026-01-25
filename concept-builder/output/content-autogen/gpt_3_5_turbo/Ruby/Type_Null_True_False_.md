To check if a value is null/true/false in Ruby, you can use the following methods:

1. `nil?` method: This method is used to check if a value is `nil` or not.

```ruby
value = nil
puts value.nil? # Output: true

value = "Hello"
puts value.nil? # Output: false
```

2. `true?` and `false?` methods: These methods are used to check if a value is `true` or `false`.

```ruby
value = true
puts value.true? # Output: true

value = false
puts value.false? # Output: true
```

Note: In Ruby, `nil` is considered as a false value.

```ruby
value = nil
puts value.true? # Output: false
puts value.false? # Output: false
```