In Ruby, you can define a struct using the `Struct` class. A struct is a lightweight way to define a new class with a fixed set of attributes. Here's an example:

```ruby
# Define a struct for a person's name and age
Person = Struct.new(:name, :age)

# Create a new person object
john = Person.new("John", 30)

# Access the person's attributes
puts john.name # Output: John
puts john.age  # Output: 30

# Update the person's attributes
john.name = "Johnny"
john.age = 31

# Access the updated attributes
puts john.name # Output: Johnny
puts john.age  # Output: 31
```

In this example, we define a `Person` struct with two attributes: `name` and `age`. We then create a new `john` object of `Person` struct with name `"John"` and age `30`. We can access these attributes using the dot notation. We update the attributes using the same syntax and can also access the updated attributes in the same way.

You can also use a block to define a struct and add more attributes to it:

```ruby
# Define a struct using a block and add more attributes
Car = Struct.new(:make, :model) do
  def description
    "#{make} #{model}"
  end
end

# Create a new car object
my_car = Car.new("Toyota", "Corolla")

# Access the attributes and the custom method
puts my_car.make       # Output: Toyota
puts my_car.model      # Output: Corolla
puts my_car.description # Output: Toyota Corolla
```

In this example, we define a `Car` struct with two attributes: `make` and `model`. We then use a block to add a custom method `description` that returns a string. We create a new `my_car` object of `Car` struct with make `"Toyota"` and model `"Corolla"`. We can access the attributes and the custom method using the dot notation.