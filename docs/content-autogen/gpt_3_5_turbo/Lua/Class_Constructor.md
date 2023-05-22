In Lua, a constructor is a special kind of function that creates and initializes a new object of a certain type. It is usually called when the object is created, and its purpose is to set its initial values.

Here's an example of a simple constructor for a "Person" class:

```
Person = {}

function Person:new(name, age)
    local person = {}
    setmetatable(person, self)
    self.__index = self
    person.name = name
    person.age = age
    return person
end
```

In this example, the Person class is defined as a table. The new() function is defined as a method of the Person table. It takes two parameters: name and age. These parameters are used to create a new "person" object.

The new() function creates a new table, and sets that table's metatable to the Person table. The metatable allows the new table to inherit its properties from the Person table. The self.__index line sets up the inheritance.

The function then sets the name and age properties of the new table based on the parameters that were passed in. Finally, it returns the new table.

To create a new person object, you simply call the new() method and pass in the required parameters:

```
local john = Person:new("John", 35)
```

This creates a new person object named "John" with an age of 35. The object is stored in the "john" variable.

You can now access the object's properties like this:

```
print(john.name) -- Output: "John"
print(john.age) -- Output: 35
```

This is just a basic example, but you can use constructors in Lua for more complex classes as well. The important thing is to make sure that the constructor sets up the object's initial state correctly.