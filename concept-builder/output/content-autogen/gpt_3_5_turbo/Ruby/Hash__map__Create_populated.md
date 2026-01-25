In Ruby, a hash is a collection of key-value pairs. You can create a hash using the curly braces `{}` or the `Hash.new` method.

Here's an example of creating a hash with curly braces:

```ruby
my_hash = { "name" => "John", "age" => 30, "city" => "New York" }
```

In this example, we've created a hash with three key-value pairs. The keys are "name", "age", and "city", and the values are "John", 30, and "New York", respectively.

You can also create a hash using the `Hash.new` method:

```ruby
my_hash = Hash.new
my_hash["name"] = "John"
my_hash["age"] = 30
my_hash["city"] = "New York"
```

In this example, we've initialized an empty hash using the `Hash.new` method. Then, we've added key-value pairs using the hash's indexing operator `[]`.

Once you've created a hash, you can access its values using the keys:

```ruby
puts my_hash["name"] # Output: John
puts my_hash["age"] # Output: 30
puts my_hash["city"] # Output: New York
```

You can also iterate over a hash using the `each` method:

```ruby
my_hash.each do |key, value|
  puts "#{key}: #{value}"
end
```

This will output:

```
name: John
age: 30
city: New York
```