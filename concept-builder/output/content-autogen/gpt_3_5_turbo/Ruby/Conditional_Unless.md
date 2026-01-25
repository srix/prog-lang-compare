In Ruby, `unless` is a conditional statement that executes a block of code if the condition is false. 

The general syntax of the `unless` statement is:

```
unless condition
  # code to execute if condition is false
end
```

Here's an example that uses `unless` in Ruby:

```
age = 18
unless age >= 21
  puts "You are not old enough to drink alcohol in the US."
end
```

In this example, if the age is less than 21, the code inside the `unless` block will run and display the message "You are not old enough to drink alcohol in the US."

You can also use an `else` clause with `unless`:

```
age = 25
unless age < 18
  puts "You are legally an adult."
else
  puts "You are a minor."
end
```

In this example, if the age is greater than or equal to 18, the code in the first block will execute and display the message "You are legally an adult." If the age is less than 18, the code in the `else` block will execute and display the message "You are a minor."