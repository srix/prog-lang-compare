In Ruby, you can concatenate strings using the `+` operator.

Here is an example:

```ruby
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
puts full_name #=> "John Doe"
```

In this example, we create two strings `first_name` and `last_name` and then concatenate them using the `+` operator to create a new string `full_name`. We then print the value of the `full_name` variable.

Here is another example using string interpolation:

```ruby
age = 30
puts "I am #{age} years old." #=> "I am 30 years old."
```

In this example, we use string interpolation to insert the value of the `age` variable into a string. The `#{}` syntax is used to evaluate the expression inside the braces and insert the result into the string.

You can also use the `<<` operator to concatenate strings:

```ruby
greeting = "Hello, "
name = "John"
greeting << name << "!" #=> "Hello, John!"
puts greeting
```

In this example, we use the `<<` operator to append the value of the `name` variable to the `greeting` string. The `<<` operator is a destructive append method that modifies the string on the left-hand side of the operator.