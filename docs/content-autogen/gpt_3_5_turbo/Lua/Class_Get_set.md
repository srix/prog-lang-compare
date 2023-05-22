In Lua, you can create classes by using tables and metatables. The get/set method is a commonly used way to access and modify class properties in Lua. 

Here is an example:

```lua
-- create a class
Person = {}

-- create a constructor to instantiate the object
function Person:new(name, age)
   local obj = {}
   setmetatable(obj, self)
   self.__index = self
   obj.name = name
   obj.age = age
   return obj
end

-- create accessor methods for name and age properties
function Person:get_name()
   return self.name
end

function Person:set_name(new_name)
   self.name = new_name
end

function Person:get_age()
   return self.age
end

function Person:set_age(new_age)
   self.age = new_age
end

-- create an instance of Person
local person1 = Person:new("John", 30)

-- access the name and age properties using get methods
print(person1:get_name())
print(person1:get_age())

-- change the name and age properties using set methods
person1:set_name("Maria")
person1:set_age(25)

-- access the updated properties using get methods
print(person1:get_name())
print(person1:get_age())
```

In this example, we create a class `Person` with a constructor that initializes its `name` and `age` properties, and we also create `get` and `set` methods to access and modify these properties. 

To create an instance of `Person`, we call `Person:new` and pass the name and age parameters. 

To access the properties, we use the `get` methods `get_name` and `get_age`, and to modify the properties, we use the `set` methods `set_name` and `set_age`. 

Finally, we call the `get` methods again to verify that the properties were successfully modified.