In Julia, we use constructors to create new objects of a class. Constructors are special functions that are called when we create an object. They are called by the `new()` keyword, followed by the name of the class we want to create. 

Here's an example of how to create a simple constructor in Julia:

```
# Create a new class named Person
struct Person
    name::String
    age::Int
    gender::String

    # Define a constructor for Person
    function Person(nm::String, ag::Int, gen::String)
        new(nm, ag, gen)
    end
end
```

In the above example, we are defining a new class called `Person`. The class has three fields, `name`, `age`, and `gender`, which are specified along with their data types. 

Next, we define a constructor function for the `Person` class using the `function` keyword. The constructor function takes in arguments for `name`, `age`, and `gender` and uses the `new()` function to create a new `Person` object with these values. 

We can now create new `Person` objects using this constructor, as follows:

```
# Create new Person objects using the constructor
person1 = Person("John Doe", 30, "Male")
person2 = Person("Jane Doe", 28, "Female")
```

In the example above, `person1` and `person2` are new objects of the `Person` class created using the constructor function. We pass in the values for `name`, `age`, and `gender` as arguments to the constructor. 

We can then access the fields of these objects using the dot notation, like this:

```
# Access fields of the Person objects
println(person1.name)
println(person2.gender)
``` 

In this way, constructors in Julia allow us to create new objects of a class with specific values for their fields.