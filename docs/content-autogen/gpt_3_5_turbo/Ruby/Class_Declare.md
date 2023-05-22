In Ruby, you can declare a class using the `class` keyword followed by the name of the class. Here's an example:

```
class MyClass
  def initialize(name)
    @name = name
  end

  def greeting
    "Hello, #{@name}!"
  end
end
```

In this example, we're defining a class called `MyClass`. The `initialize` method is the constructor, which takes an argument `name` and sets an instance variable `@name`. The `greeting` method returns a greeting string using the `@name` instance variable.

To create an instance of this class, we'll call the `new` method:

```
my_object = MyClass.new("Ruby")
puts my_object.greeting
# Output: Hello, Ruby!
```

This code creates a new instance of the `MyClass` class with the argument "Ruby" passed to the constructor. The `puts` statement calls the `greeting` method on the `my_object` instance and prints "Hello, Ruby!" to the console.