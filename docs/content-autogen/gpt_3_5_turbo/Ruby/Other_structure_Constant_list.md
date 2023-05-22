In Ruby, a constant is a variable that cannot be reassigned once it has been initialized. A constant list is simply a list of constants, usually used for organizational purposes.

To declare a constant, you simply use all uppercase letters for the variable name:

```
MY_CONSTANT = 42
```

To define a constant list, you group a set of constants together using square brackets:

```
MY_CONSTANTS = [
  MY_CONSTANT,
  OTHER_CONSTANT,
  ANOTHER_CONSTANT,
]
```

Here's an example of how you could use a constant list in Ruby:

```ruby
# Define a list of colors as constants
COLORS = [
  RED = "FF0000",
  GREEN = "00FF00",
  BLUE = "0000FF"
]

# Output the list of colors
puts "The available colors are:"

COLORS.each do |color|
  puts color
end

# Output the value of a specific color
puts "The hex value of red is #{RED}"
```

In this example, we define a list of colors as constants, then use the `each` method to iterate over the list and output the values. We also reference a specific color by its constant name to output its value.