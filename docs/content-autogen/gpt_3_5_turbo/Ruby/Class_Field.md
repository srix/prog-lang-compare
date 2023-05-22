In Ruby, a field in a class is simply an instance variable that is accessible across methods within the class. Here's an example:

```ruby
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def greet
    puts "Hello, my name is #{@name} and I am #{@age} years old."
  end

  def age_one_year
    @age += 1
  end
end
```

In this example, the `Person` class has two fields, `@name` and `@age`, which are set in the constructor via the `initialize` method. These fields can then be accessed by any other method in the class, such as the `greet` method which uses them to print out a greeting, or the `age_one_year` method which increments the `@age` field by one year.

To create a `Person` object and interact with these fields, you can do something like the following:

```ruby
person = Person.new("Alice", 30)
person.greet #=> "Hello, my name is Alice and I am 30 years old."
person.age_one_year
person.greet #=> "Hello, my name is Alice and I am 31 years old."
```

As you can see, the `@name` and `@age` fields are accessible throughout the lifetime of the `Person` object, allowing for a wide range of functionality and interactions between different methods within the class.