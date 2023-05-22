In Ruby, you can create an array with different types using the following syntax:

```ruby
array_name = [element1, element2, element3, ...]
```

Here's an example of an array with different types:

```ruby
my_array = [1, "string", true, 4.5]
```

In the above example, `my_array` contains four elements of different types: an integer (`1`), a string (`"string"`), a boolean (`true`), and a floating-point number (`4.5`). 

You can access individual elements of the array using their index counting from 0:

```ruby
puts my_array[0] # Output: 1
puts my_array[1] # Output: "string"
puts my_array[2] # Output: true
puts my_array[3] # Output: 4.5
```

You can also loop through the array to access all its elements:

```ruby
my_array.each do |element|
  puts element
end
```

This will produce the following output:

```
1
"string"
true
4.5
```