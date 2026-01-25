In Lua, you can call a method in a class by using the colon operator, which is a syntactic sugar for passing the object as the first argument to the method. Here's an example:

```lua
-- Define a class
Person = {
    name = "",
    age = 0
}

function Person:new(name, age)
    local obj = {}
    setmetatable(obj, self)
    self.__index = self
    obj.name = name or ""
    obj.age = age or 0
    return obj
end

function Person:sayHi()
    print("Hi, my name is " .. self.name .. " and I am " .. self.age .. " years old.")
end

-- Create an instance of the class
local bob = Person:new("Bob", 30)

-- Call the sayHi method
bob:sayHi() -- Output: Hi, my name is Bob and I am 30 years old.
```

As you can see, we defined a `Person` class with a `new` constructor method and a `sayHi` instance method. To call the `sayHi` method on an instance of the `Person` class, we use the colon operator (`:`) followed by the name of the method. This automatically passes the `bob` object as the first argument to the method, so inside the method we can access its properties by using `self`.