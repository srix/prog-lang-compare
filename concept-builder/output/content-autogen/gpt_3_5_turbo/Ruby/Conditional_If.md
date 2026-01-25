In Ruby, the `if` statement is used to execute a block of code only if a specified condition is true. Here are some examples:

1. Basic `if` statement:

```ruby
age = 18
if age >= 18
  puts "You're an adult!"
end
```

Output:
```
You're an adult!
```
In this code, the if statement checks if the `age` variable is greater than or equal to 18. Since it is, the code inside the if block is executed and "You're an adult!" is printed to the console.

2. `if-else` statement:

```ruby
age = 15
if age >= 18
  puts "You're an adult!"
else
  puts "You're a minor."
end
```

Output:
```
You're a minor.
```
In this code, since `age` is less than 18, the code inside the else block is executed and "You're a minor." is printed to the console.

3. `if-elsif-else` statement:

```ruby
score = 85
if score >= 90
  puts "You got an A!"
elsif score >= 80
  puts "You got a B!"
elsif score >= 70
  puts "You got a C."
else
  puts "You failed."
end
```

Output:
```
You got a B!
```
In this code, the if statement checks the value of the `score` variable and executes the corresponding code block. Since `score` is 85, the code inside the `elsif score >= 80` block is executed, printing "You got a B!" to the console.