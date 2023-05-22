In Julia, we can use inheritance to create a new class by inheriting properties and methods from an existing class. The new class is called the derived or child class, and the existing class is called the base or parent class.

To implement inheritance in Julia, we use the `type` keyword to define a new class that inherits from the base class. We then use the `super` keyword to access the properties or methods of the parent class in the child class. 

Here's an example:

```julia
# Define the base class
abstract type Shape end

# Define the child class
struct Rectangle <: Shape
    width::Float64
    height::Float64
end

# Define a method in the base class
circumference(s::Shape) = error("Circumference method not implemented for ${typeof(s)}")

# Inherit and override method implementation in the child class
circumference(rectangle::Rectangle) = 2 * (rectangle.width + rectangle.height)
```

In this example, we defined a base class `Shape` and a child class `Rectangle` that inherits from `Shape`. The `Rectangle` class has its own properties `width` and `height`, and overrides the `circumference` method that was defined in the parent class. 

We can create instances of the child class, which inherits from the parent class:

```julia
r = Rectangle(2, 3)
circumference(r) # returns 10.0
```

Note that `Rectangle` is a subtype of `Shape`, so we can pass a `Rectangle` object to a function that accepts a `Shape` object.

```julia
get_circumference(s::Shape) = circumference(s)

get_circumference(r) # returns 10.0
```

Inheritance can be a powerful tool for organizing and extending code in Julia.