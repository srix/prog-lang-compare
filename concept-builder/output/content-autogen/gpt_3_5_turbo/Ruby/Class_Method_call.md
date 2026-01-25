Sure, here's an explanation of how to call a method in a class in Ruby, along with some examples:

In Ruby, you can define methods within a class using the 'def' keyword, and you can then call those methods using the class name and the method name. Here's a simple example:

```
class Greeting
  def say_hello(name)
    puts "Hello, #{name}!"
  end
end

g = Greeting.new
g.say_hello("Alice")  # Output: "Hello, Alice!"
```

Here, we have defined a class called 'Greeting', with a single method called 'say_hello'. The method has a single argument, 'name', which is used to dynamically generate a greeting. Then, we create an instance of the Greeting class, and call the say_hello method on that instance, passing in the argument "Alice". This will output "Hello, Alice!" to the console.

You can also call class methods (methods that belong to the class itself, rather than to an instance of the class) using the same syntax, but without needing to create an instance of the class first. Here's an example:

```
class MathHelper
  def self.square(n)
    return n*n
  end
end

puts MathHelper.square(3)  # Output: 9
```

Here, we have defined a class called 'MathHelper', with a single class method called 'square'. To define a class method, we use the 'self' keyword before the method name. Then, we can call this class method directly on the class itself, by using the class name and the method name. Here, we call MathHelper.square(3) which will output 9 to the console.

I hope this helps!