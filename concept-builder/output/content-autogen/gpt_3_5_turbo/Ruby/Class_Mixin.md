In Ruby, a mixin is a way to share functionality among different classes without using inheritance. It allows you to define a module with certain methods and include that module in one or more classes. 

Here's an example of how to use a mixin in Ruby:

```ruby
module Greeting
  def say_hello
    puts "Hello, how are you today?"
  end

  def say_goodbye
    puts "Goodbye, see you later!"
  end
end

class Person
  include Greeting
end

class Dog
  include Greeting
end
```

In this example, we've defined a module called `Greeting` with two methods: `say_hello` and `say_goodbye`. We then include this module in two separate classes, `Person` and `Dog`. This means that instances of both classes will have access to the methods defined in the `Greeting` module.

Here's how we can use these methods:

```ruby
person = Person.new
person.say_hello # Output: "Hello, how are you today?"
person.say_goodbye # Output: "Goodbye, see you later!"

dog = Dog.new
dog.say_hello # Output: "Hello, how are you today?"
dog.say_goodbye # Output: "Goodbye, see you later!"
```

As you can see, we don't need to define these methods separately in each class. Instead, we define them once in the `Greeting` module and include that module wherever we need those methods. This makes our code more DRY (Don't Repeat Yourself) and easier to maintain.