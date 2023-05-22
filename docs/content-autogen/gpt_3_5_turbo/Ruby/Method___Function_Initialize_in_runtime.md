In Ruby, you can initialize a method or function at runtime using the `define_method` method. This method allows you to create a method with a dynamic name and implementation. Here's an example: 

```ruby
class Car
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end

  # defining a method at runtime using define_method
  define_method(:print_car_info) do
    puts "#{@make} #{@model} #{@year}"
  end
end

my_car = Car.new("Toyota", "Camry", 2020)
my_car.print_car_info # output: Toyota Camry 2020
```

In this example, we define a `Car` class with an `initialize` method that sets instance variables. Then, at runtime, we define a new method dynamically using `define_method`. This method, `print_car_info`, simply prints out the make, model, and year of the car object. We can then call this dynamically defined method on `my_car`. 

This approach can be useful when you need to define methods that are generated at runtime based on some conditions or data.