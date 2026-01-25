In Lua, there is no built-in support for mixins like in other languages such as Ruby or JavaScript. However, it is possible to implement mixins in Lua using metatables and the concept of multiple inheritance. Here is an example:

```lua
-- Define a basic class
local Animal = {}
function Animal:new(name)
    local animal = {name = name}
    setmetatable(animal, self)
    self.__index = self
    return animal
end

-- Define a mixin with some behavior
local Swimmable = {
    swim = function(self)
        print(self.name .. " is swimming.")
    end
}

-- Create a new class that uses the mixin
local Dolphin = Animal:new("Dolphin")
setmetatable(Dolphin, {
    __index = function(_, key)
        if Swimmable[key] then
            return Swimmable[key]
        else
            return Animal[key]
        end
    end
})

-- Test the class
local dolphin = Dolphin:new()
dolphin:swim() -- prints "Dolphin is swimming."
```

In this example, we start by defining a basic `Animal` class with a `new` constructor that sets up a new instance of the object. We also define a `Swimmable` mixin that provides the `swim` behavior. 

Next, we create a new class `Dolphin` that inherits from `Animal`. This class uses a metatable to "redirect" method calls to the `Swimmable` mixin when appropriate. When we create a new instance of `Dolphin` and call the `swim` method, it correctly outputs that the dolphin is swimming.

This approach to mixins in Lua has some limitations, particularly around handling name conflicts between mixins and base classes. However, it can be a powerful tool for creating reusable behavior in Lua programs.