In Ruby, a method or function can be declared using the `def` keyword, followed by the method name, any parameters, and the method body. Here are some examples:

1. A simple method that takes no parameters:

```
def say_hello
  puts "Hello, world!"
end
```

2. A method that takes parameters:

```
def add_numbers(x, y)
  sum = x + y
  puts "The sum of #{x} and #{y} is #{sum}"
end
```

3. A method that returns a value:

```
def multiply_numbers(x, y)
  product = x * y
  return product
end
```

4. A method with default parameter value (Ruby 2.0 or above):

```
def greet(name="World")
  puts "Hello, #{name}!"
end
```

5. A method that takes a variable number of arguments:

```
def add_numbers(*numbers)
  sum = numbers.inject(0) { |result, number| result + number }
  puts "The sum of #{numbers.join(', ')} is #{sum}"
end
```

These are just a few examples of how to declare a method in Ruby. Keep in mind that you can also use blocks and lambdas as methods.