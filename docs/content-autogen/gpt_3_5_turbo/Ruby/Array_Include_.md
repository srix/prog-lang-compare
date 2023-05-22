In Ruby, you can use the `include?` method to check whether an array contains a certain element. 

Here's an example code snippet:

```ruby
fruits = ["apple", "banana", "orange", "kiwi"]

# Here, we're checking if the array 'fruits' includes the element "banana"
if fruits.include?("banana")
  puts "The array includes 'banana'"
else
  puts "The array does not include 'banana'"
end
```

This will output:

```
The array includes 'banana'
```

And here's another example:

```ruby
numbers = [1, 2, 3, 4]

# We're checking if the array 'numbers' includes the element 5
if numbers.include?(5)
  puts "The array includes 5"
else
  puts "The array does not include 5"
end
```

This will output:

```
The array does not include 5
```