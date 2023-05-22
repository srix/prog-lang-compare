In Ruby, switch case statements are implemented using the `case` keyword, followed by the variable or value being compared and the `when` keyword, which represents a condition. Here is an example of how to use switch in Ruby:

```
# Example 1 - Using switch with integers
product_id = 3

case product_id
when 1
  puts "Product 1: iPhone"
when 2
  puts "Product 2: MacBook"
when 3
  puts "Product 3: Apple Watch"
else
  puts "Invalid product ID"
end
```

In this example, the `product_id` variable is being compared against several values using switch case statements. If `product_id` matches any of the `when` conditions, the corresponding message will be printed. If none of the conditions match, the `else` statement will be executed. The output of this code block is:

```
Product 3: Apple Watch
```

Switch statements can also work with non-integer values, such as strings or symbols. Here's an example that compares a string:

```
# Example 2 - Using switch with strings
fruit = "banana"

case fruit
when "apple"
  puts "This is an apple"
when "banana"
  puts "This is a banana"
when "orange"
  puts "This is an orange"
else
  puts "I don't know this fruit"
end
```

In this example, the `fruit` variable is compared against several possible string values. If `fruit` matches any of the `when` conditions, the corresponding message will be printed. If none of the conditions match, the `else` statement will be executed. The output of this code block is:

```
This is a banana
```

In summary, switch case statements in Ruby can be used to evaluate different conditions and perform different actions based on those conditions. It's a useful tool for handling multiple data values in a concise and understandable way.