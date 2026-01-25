In Ruby, we can use the `return` keyword to return a value from a method or function. Here is an example:

```ruby
def square(num)
  return num * num
end

result = square(5)
puts result    # Output: 25
```

In the above example, the `square` method takes in a `num` parameter and returns the square of that number using the `return` keyword. The value returned by the method is then stored in the `result` variable and printed to the console.

We can also omit the `return` keyword in Ruby, and the last executed expression of the method will automatically be returned as the value. Here is an example:

```ruby
def cube(num)
  num * num * num
end

result = cube(3)
puts result    # Output: 27
```

In the above example, the `cube` method takes in a `num` parameter and returns the cube of that number without using the `return` keyword. The last expression in the method, `num * num * num`, is automatically returned as the value of the method. The value returned by the method is then stored in the `result` variable and printed to the console.