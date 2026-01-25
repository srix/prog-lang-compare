In Ruby programming, the `break` statement is used to exit a loop or iteration. It can be used within any loop block including `loop`, `while`, and `for` loops. Here are some examples of how to use the `break` statement in Ruby:

Example 1:
```ruby
# Using break in a for loop
for num in 1..10
  puts num
  break if num == 5
end
```
Output:
```
1
2
3
4
5
```

Example 2:
```ruby
# Using break in a while loop
i = 1
while i <= 10
  puts i
  i += 1
  break if i == 6
end
```
Output:
```
1
2
3
4
5
```

Example 3:
```ruby
# Using break in a loop block
loop do
  puts "Enter your name:"
  name = gets.chomp
  break if name == "exit" # user enters 'exit' to stop the loop
  puts "Hello, #{name}!"
end
```

Output (sample run):
```
Enter your name:
John
Hello, John!
Enter your name:
Mary
Hello, Mary!
Enter your name:
exit
``` 

In each of these examples, the `break` statement is used to exit the loop when a certain condition is met.