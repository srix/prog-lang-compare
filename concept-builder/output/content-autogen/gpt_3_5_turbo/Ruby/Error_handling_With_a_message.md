In Ruby, `begin`, `rescue`, `ensure`, `else` are used to implement try/catch/finally blocks. Here is an example on how to use them with a message:

```
begin
  # this block contains code that might raise an exception
  age = 17
  raise ArgumentError, "Age should be greater than or equal to 18." if age < 18
rescue ArgumentError => e
  # this block will catch the exception
  puts "Error: #{e.message}"
else
  # this block will execute only if there is no exception
  puts "Welcome!"
ensure
  # this block will always execute, regardless of whether there
  # was an exception raised or not
  puts "Thank you for using our application."
end
```

In this example, `begin`, `rescue`, `ensure`, `else` have been used to create a try/catch/finally block. The `begin` block contains the code that might raise an exception. In this case, we are checking if the age is less than 18 and raising an `ArgumentError` with a custom message if it is.

The `rescue` block will catch any exception thrown by the code in the `begin` block and provide a customized error message using `e.message`. The `else` block will execute only if there is no exception.

The `ensure` block will always execute, regardless of whether there was an exception raised or not. In this case, it simply prints a thank you message.