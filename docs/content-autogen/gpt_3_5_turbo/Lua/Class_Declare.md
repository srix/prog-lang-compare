In Lua, you can declare a class using the following syntax:

```
-- Create a new class
ClassName = {}

-- Create a constructor function for the class
function ClassName:new()
  local object = {}
  setmetatable(object, self)
  self.__index = self
  return object
end

-- Define methods for the class
function ClassName:sayHello()
  print("Hello from the class!")
end
```
This creates an empty class called `ClassName`. The `new` function is the constructor for the class which returns a new object instance of the class. The `__index` field ensures that the object inherits methods defined in the class table.

Here's an example of how you can create an instance of the class and call its method:

```
-- Create an object instance
local myObject = ClassName:new()

-- Call a method on the object instance
myObject:sayHello()
```

This will output:

```
Hello from the class!
```