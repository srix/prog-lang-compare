Constants in Ruby are like variables but their values stay the same throughout the execution of the program. A constant is defined using an uppercase letter at the beginning of the identifier.

Here's an example of how to define a constant in Ruby:

```ruby
MY_CONSTANT = 42
```

In this example, `MY_CONSTANT` is a constant with the value of `42`.

Once a constant is defined, you can then use it in your code just like any other variable:

```ruby
puts MY_CONSTANT # Output: 42
```

It's important to note that while constants have a fixed value, it is still possible to change it by re-assigning a new value to the constant. This is not recommended, as it can lead to unexpected behavior in your program. 

```ruby
MY_CONSTANT = "Hello World"
puts MY_CONSTANT # Output: Hello World

MY_CONSTANT = 10
puts MY_CONSTANT # Output: 10
```

To prevent this, Ruby will issue a warning if you attempt to change the value of a constant.