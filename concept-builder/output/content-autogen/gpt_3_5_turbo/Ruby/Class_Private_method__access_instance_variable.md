In Ruby, private methods cannot be accessed outside of the class they are defined in. But instance variables can still be accessed by private methods within the same class.

Here's an example:

```ruby
class Person

  def initialize(name, age)
    @name = name
    @age = age
  end

  def say_hi
    puts "Hi, my name is #{@name} and I'm #{@age} years old."
  end

  private

  def secret_age
    puts "My secret age is #{@age}" # this will work because it's a private method within the same class
  end

end

person = Person.new("John", 25)
person.say_hi
#"Hi, my name is John and I'm 25 years old."
person.secret_age
# NoMethodError: private method `secret_age' called for #<Person:0x00007fbadc811740 @name="John", @age=25>
```

As you can see, calling the `secret_age` private method from outside the class raises a NoMethodError. But it can still access the instance variable `@age` because it's within the same class.