In Ruby, get/set methods are often used to access and modify data encapsulated within a class. These methods allow you to control how the data is accessed or modified, and can help ensure data integrity within your program.

Here's an example of how to use get/set methods in a Ruby class:

```ruby
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def name
    @name
  end
  
  def age=(new_age)
    if new_age >= 0
      @age = new_age
    else
      puts "Invalid age input"
    end
  end
end
```

In this example, we have a `Person` class with an `initialize` method that sets the `@name` and `@age` instance variables. We then define two get/set methods using the `name` and `age=` syntax, respectively. 

The `name` method is a simple get method that returns the value of the `@name` variable. The `age=` method is a set method that accepts a new age as an argument and verifies that the age is not less than 0. If the age is valid, it sets the `@age` variable to the new age. If the age is invalid, it prints an error message.

Here's an example of how we can use the `Person` class:

```ruby
p = Person.new("Alice", 25)
puts p.name   # Output: "Alice"
p.age = -5    # Output: "Invalid age input"
puts p.age    # Output: 25
p.age = 30
puts p.age    # Output: 30
```

In this example, we create a `Person` object with a name of "Alice" and age of 25. We then use the `name` method to output "Alice", and attempt to set the age to "-5". The `age=` method recognizes that the input is invalid and prints an error message. We then set the age to 30 and output the new value of `@age`.

Overall, get/set methods can be a powerful tool for controlling access to data within your Ruby class, and can help maintain the integrity of your program.