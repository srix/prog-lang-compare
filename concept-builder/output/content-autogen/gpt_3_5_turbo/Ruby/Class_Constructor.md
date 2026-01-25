In Ruby, a constructor is a special method that gets called automatically when an object is created. The constructor method is used to initialize the object's variables and set its initial state. In Ruby, the constructor method is named "initialize".

Here is an example:

```ruby
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
end
```

In this example, we have defined a constructor method for the Person class. The constructor takes two arguments, "name" and "age", and initializes two instance variables, "@name" and "@age".

To create a new Person object, we simply call the "new" method on the Person class and pass in the required arguments:

```ruby
person1 = Person.new("John Doe", 30)
```

In this example, we have created a new Person object called "person1" and passed in the name "John Doe" and age "30". When the "new" method is called, the "initialize" method is automatically called with the provided arguments. The "@name" instance variable is set to "John Doe" and the "@age" variable is set to "30".

We can now access the initialized instance variables using the object's instance methods:

```ruby
puts person1.name #=> "John Doe"
puts person1.age #=> 30
```

In this example, we can use the getter methods to retrieve the initialized instance variables "@name" and "@age".