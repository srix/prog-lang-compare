In Ruby, an alias is a way to rename an existing method so that it can be called by a different name. This can be useful if you want to make your code more readable or to provide alternative names for methods that may be more intuitive or descriptive.

To create an alias in Ruby, you can use the `alias` keyword followed by the desired new name and the original name:

```ruby
# Original method
def say_hello(name)
  puts "Hello, #{name}!"
end

# Alias method
alias hello say_hello

# Call original method
say_hello("John") # Output: "Hello, John!"

# Call alias method
hello("Mary") # Output: "Hello, Mary!"
```

In the example above, the `say_hello` method is defined and then an alias is created using the `alias` keyword. The new name for the alias is `hello`. This means that you can now call the same method using either name.

Another example:

```ruby
class Calculator
  def add(a, b)
    a + b
  end

  alias_method :plus, :add
end

calc = Calculator.new

# Call original method
puts calc.add(2, 3) # Output: 5

# Call alias method
puts calc.plus(2, 3) # Output: 5
```

In this example, an alias method is created using the `alias_method` keyword, which is a slightly different way to create an alias. The original and alias methods are both defined within the `Calculator` class. The `plus` method is now an alias for the `add` method, and both methods can be used interchangeably within the class.