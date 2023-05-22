Destructuring assignment is a feature included in Ruby 2.7 and above. It allows you to extract multiple variables from an array or hash and assign them to individual variables at once.

Here are some examples of how to use destructuring assignment in Ruby:

1. Destructuring an array:

```ruby
arr = [1, 2, 3]
a, b, c = arr
puts a # Output: 1
puts b # Output: 2
puts c # Output: 3
```

2. Destructuring a hash:

```ruby
hash = { name: 'John', age: 30 }
name, age = hash.values_at(:name, :age)
puts name # Output: John
puts age # Output: 30
```

3. Destructuring nested arrays and hashes:

```ruby
arr = [1, [2, 3], 4]
a, (b, c), d = arr
puts a # Output: 1
puts b # Output: 2
puts c # Output: 3
puts d # Output: 4

hash = { name: 'John', contact: { email: 'john@example.com', phone: '1234567890' } }
name, (email, phone) = hash.values_at(:name, [:contact, :email, :phone])
puts name # Output: John
puts email # Output: john@example.com
puts phone # Output: 1234567890
```

Destructuring assignment can be especially useful when working with complex data structures as it allows you to extract the specific values you need without having to write long and cumbersome code.