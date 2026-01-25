In Haskell, inheritance is implemented through the concept of typeclasses. Typeclasses define a set of functions that must be implemented for a type to be considered a member of that class. 

To demonstrate inheritance in Haskell using typeclasses, let's consider an example. Suppose we want to define a hierarchy of shapes, starting with a basic Shape class and then deriving specific sub-classes such as Square and Circle. 

We can define the Shape class as follows:

```
class Shape a where
  area :: a -> Float

data Square = Square Float
data Circle = Circle Float

instance Shape Square where
  area (Square side) = side * side

instance Shape Circle where
  area (Circle radius) = pi * radius * radius
```

In this example, we define a `Shape` class which has only one function `area`. We then define `Square` and `Circle` as type constructors. To make `Square` and `Circle` members of `Shape` class, we define instances of the `Shape` class for them.

The `area` function is defined differently for each type. When `area` is called on a `Square` object, it returns the area of the square (which is the square of its side length). When `area` is called on a `Circle` object, it returns the area of the circle (which is pi times the square of its radius).

This example shows how inheritance is achieved through the use of typeclasses in Haskell. By defining instances of a class for different types, we can implement hierarchical relationships and reuse common functionality across multiple types.