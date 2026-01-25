In Ruby, we can use the logical operators `and` and `or` to combine conditional expressions. They can be used to perform multiple tests in a single condition. The difference between `and` and `or` operators is as follows:

- `and`: returns the first condition if it is false, and the second condition otherwise. It has higher precedence than `or` operator. 

Example:

```ruby
x = 5
y = 10

if x > 3 and y < 15
  puts "Both conditions are true."
end
```

This will output "Both conditions are true" because both conditions are true.

- `or`: returns the first condition if it is true, and the second condition otherwise. It has lower precedence than `and` operator.

Example:

```ruby
x = 5
y = 10

if x > 7 or y < 5
  puts "At least one condition is true."
end
```

This will output "At least one condition is true" because the second condition is true.

We can also use `&&` and `||` as logical operators which behave similarly to `and` and `or` respectively.

Example:

```ruby
x = 5
y = 10

if x > 3 && y < 15
  puts "Both conditions are true."
end

if x > 7 || y < 5
  puts "At least one condition is true."
end
```