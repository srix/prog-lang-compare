To define a static method in a class Ruby, you can use the `self` keyword followed by the method name. Here's an example:

```
class MyClass
  def self.static_method
    puts "This is a static method."
  end
end
```

In this example, we've defined a class called `MyClass` and a static method called `static_method`. We've used `self` to define the method as static.

Now, we can call this method directly on the class, without needing to instantiate an object:

```
MyClass.static_method
# Output: This is a static method.
```

Static methods are useful when you need to perform a certain task that doesn't require any specific instance data to work with. They can be accessed at any point throughout the application and do not need to be invoked on instances of the class.