In Ruby, there are several ways to iterate over a hash. Here are three common methods:

1. Using the "each" method:

```ruby
hash = {one: 1, two: 2, three: 3}

hash.each do |key, value|
  puts "#{key} is #{value}"
end
```

Output:

```
one is 1
two is 2
three is 3
```

2. Using the "each_key" method:

```ruby
hash = {one: 1, two: 2, three: 3}

hash.each_key do |key|
  puts key
end
```

Output:

```
one
two
three
```

3. Using the "each_value" method:

```ruby
hash = {one: 1, two: 2, three: 3}

hash.each_value do |value|
  puts value
end
```

Output:

```
1
2
3
```

These methods give you flexibility in how you want to iterate over the hash depending on whether you want to work with both the keys and values or just one or the other.