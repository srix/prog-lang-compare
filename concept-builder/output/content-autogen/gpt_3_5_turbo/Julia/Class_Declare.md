To declare a class in Julia, you use the `struct` keyword followed by the name of the class and the properties of the class that you want to define. 

For example, let's declare a simple `Person` class with `name` and `age` properties:

```julia
struct Person 
    name::String 
    age::Int 
end
```

This defines a class called `Person`, with properties `name` of type `String` and `age` of type `Int`. 

You can also add methods to your class for behavior. Here is an example of adding a method to the `Person` class:

```julia
struct Person 
    name::String 
    age::Int 
end
 
function introduce(p::Person)
    println("Hi, my name is $(p.name) and I am $(p.age) years old.")
end
```

This `introduce` function prints out the name and age of the person.

Now, let's create an instance or object of the `Person` class:

```julia
p = Person("John", 27)
```

This creates a new instance of the `Person` class with the name `John` and age `27`.

Finally, we can use the method we defined earlier to introduce the person:

```julia
introduce(p)
```

This prints out `"Hi, my name is John and I am 27 years old."`