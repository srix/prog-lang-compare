In Ruby, `if` is used as a conditional statement to check if certain conditions are true or false. 

The basic syntax for using the `if` statement is as follows:

```
if condition
  # code to execute if condition is true
else
  # code to execute if condition is false
end
```

The `else` block is optional. If the condition is true, the code inside the `if` block will be executed; if the condition is false, the code inside the `else` block (if any) will be executed.

Here are some examples of using `if` in Ruby:

Example 1: Checking if a number is even or odd

```ruby
num = 12
if num % 2 == 0
  puts "#{num} is even"
else
  puts "#{num} is odd"
end
```

Output: `"12 is even"`

Example 2: Checking if a user's age is greater than or equal to 18

```ruby
age = 22
if age >= 18
  puts "You are an adult"
else
  puts "You are not an adult yet"
end
```

Output: `"You are an adult"`

Example 3: Checking if a string is empty

```ruby
string = ""
if string.empty?
  puts "The string is empty"
else
  puts "The string is not empty"
end
```

Output: `"The string is empty"`

In summary, `if` allows you to control the flow of your code based on certain conditions.