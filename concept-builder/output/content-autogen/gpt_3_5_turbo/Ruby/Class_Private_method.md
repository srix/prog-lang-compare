In Ruby, private methods are defined using the keyword `private`. Private methods can only be called from within the class in which they are defined and cannot be called from outside the class.

Here is an example of a class with a private method in Ruby:

```ruby
class Car
  def initialize(make, model)
    @make = make
    @model = model
  end
  
  def start_engine
    # Call private method from within class
    ignite_engine
    puts "Engine started"
  end
  
  private
  
  def ignite_engine
    puts "Igniting engine for #{@make} #{@model}"
  end
end

car = Car.new("Toyota", "Camry")
car.start_engine # Output: Igniting engine for Toyota Camry
                 #         Engine started

# Try to call private method from outside class
car.ignite_engine # Output: NoMethodError: private method `ignite_engine' called for #<Car:0xXXXXXX>
```

In this example, the `ignite_engine` method is defined as a private method using the keyword `private`. This method is only called from within the `start_engine` method which is defined as a public method.

When we create a new instance of the Car class and call the `start_engine` method, the private method `ignite_engine` is called via the `start_engine` method. 

However, when we try to call the private method `ignite_engine` from outside the class using the `car.ignite_engine` syntax, we get a `NoMethodError` because private methods can only be called from within the class in which they are defined.