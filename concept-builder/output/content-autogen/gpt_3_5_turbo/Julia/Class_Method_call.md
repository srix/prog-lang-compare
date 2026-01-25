In Julia programming language, calling a method in a class is similar to calling any other function. Here is an example:

Let's consider a simple class called `Rectangle` which has properties `length` and `width` and a method `area` that calculates the area of the rectangle.

```julia
# Define the Rectangle class.
struct Rectangle
    length::Float64
    width::Float64
end

# Define the area method for Rectangle class.
function area(rect::Rectangle)
    return rect.length * rect.width
end
```

To call the `area` method for a specific `Rectangle` instance, we can create an instance of the class and pass it to the method like this:

```julia
# Create a new Rectangle instance.
rect = Rectangle(3.0, 4.0)

# Call the area method for the rectangle instance.
result = area(rect)

# Print the result.
println("The area of the rectangle is $result.")
```

This will output:

```
The area of the rectangle is 12.0.
```

In this example, we have created an instance of the `Rectangle` class, passed it to the `area` method, and stored the result in the `result` variable. Finally, we printed the result to the console.