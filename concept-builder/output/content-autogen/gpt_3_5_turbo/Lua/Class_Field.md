In Lua, a class is a table that contains data and methods. To define a class in Lua, you can use a regular table and define its methods as key-value pairs. Here is an example of a simple class in Lua:

```lua
-- define class
Person = { name = "John", age = 30 }

-- define method
function Person:sayName()
  print("My name is " .. self.name)
end

-- create object
local person1 = Person

-- call method
person1:sayName()
```

In this example, we defined a class called `Person` with two fields: `name` and `age`. We also defined a method called `sayName` that prints the name of the person. To create an object of the class, we simply assign the class to a variable `person1`. Finally, we call the `sayName` method on the `person1` object to print its name.

You can also modify the fields of an object at runtime by simply assigning new values to them. For example:

```lua
-- create object
local person2 = Person

-- change name
person2.name = "Alice"

-- call method
person2:sayName()
```

In this example, we created a new object `person2` based on the `Person` class, and then changed its `name` field to "Alice". When we call the `sayName` method on `person2`, it will print "My name is Alice" instead of "My name is John".

Overall, the use of fields in classes in Lua is relatively simple and flexible. You can define fields and methods for your classes, and modify them at runtime as needed.