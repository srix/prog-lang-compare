In Ruby, the `if/else` statements are used for making decisions based on certain conditions. The basic structure of an `if/else` statement is:

```
if condition
  # Code to execute if the condition is true
else
  # Code to execute if the condition is false
end
```

Here's an example using `if/else` to check if a number is even or odd:

```ruby
num = 10

if num % 2 == 0
  puts "#{num} is even"
else
  puts "#{num} is odd"
end
```

The output of this code would be:

```
10 is even
```

Another example using `if/else` to check if a number is positive, negative, or zero:

```ruby
num = -5

if num > 0
  puts "#{num} is positive"
elsif num < 0
  puts "#{num} is negative"
else
  puts "#{num} is zero"
end
```

The output of this code would be:

```
-5 is negative
```

In summary, `if/else` statements in Ruby provide a way to execute different blocks of code based on specific conditions. The `if` statement executes a block of code if the condition is true, while the `else` statement executes a block of code if the condition is false. Additionally, the `elsif` statement can be used to check additional conditions before the final `else` block is executed.