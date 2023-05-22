In Ruby, you can import code from another file using the `require` method, which takes the name of the file as an argument. Here's an example of how to do this:

1. Let's assume you have a file called `my_module.rb` that contains some code you want to use in another file.

```ruby
module MyModule
  def greet(name)
    puts "Hello, #{name}!"
  end

  def farewell(name)
    puts "Goodbye, #{name}!"
  end
end
```

2. In your main file, you can import this module using the `require` method.

```ruby
require_relative 'my_module'

class MyClass
  include MyModule

  def some_method
    greet('Alice') # => prints "Hello, Alice!"
    farewell('Bob') # => prints "Goodbye, Bob!"
  end
end

```

The `require_relative` method loads the `my_module.rb` file and makes its contents available in the current file. In this example, the `MyClass` class includes the `MyModule` module, which means that its methods are available to instances of the class.

Note that you can also use the `require` method to load external libraries and gems in your Ruby scripts.