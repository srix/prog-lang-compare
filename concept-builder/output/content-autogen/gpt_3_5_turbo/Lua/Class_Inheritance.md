Inheritance is a mechanism where a class can inherit properties and methods from another class. In Lua, we can implement inheritance using the concept of metatables. The metatable for a class can be set to the metatable of its parent class, which allows the child class to inherit the parent class' properties and methods. Here is an example of how to use inheritance in Lua:

```lua
-- define a parent class called 'Animal'
Animal = {name = "", sound = ""}
function Animal:new(name, sound)
    local obj = {}
    setmetatable(obj, self)
    self.__index = self
    self.name = name
    self.sound = sound
    return obj
end
function Animal:speak()
    print(self.name .. " says " .. self.sound)
end

-- define a child class called 'Dog' that inherits from 'Animal'
Dog = Animal:new()
function Dog:new(name, sound)
    local obj = {}
    setmetatable(obj, self)
    self.__index = self
    self.name = name
    self.sound = sound or "woof"
    return obj
end

-- create an instance of the 'Dog' class and call the 'speak' method
myDog = Dog:new("Buddy")
myDog:speak()
```

In this example, the 'Animal' class has a 'new' method that sets the metatable to 'Animal' and returns a new instance of the class. It also has a 'speak' method that prints out the animal's name and sound.

The 'Dog' class is defined as a child class of 'Animal' by setting its metatable to 'Animal' using the 'new' method. The 'Dog' class overrides the 'sound' property with a default value of 'woof' if it is not passed in the constructor.

An instance of the 'Dog' class is created with the name "Buddy" and the default 'woof' sound. When we call the 'speak' method on the instance, it calls the 'speak' method of its parent class 'Animal' and prints out "Buddy says woof" to the console.