In Lua, instance variables are commonly referred to as table fields. To access an instance variable within a private method in Lua, you can use the `self` parameter which represents the instance of the class you are working on.

Here is an example:

```
-- Define a class
Person = {}

-- Define private field, full name
local function getFullName(self)
  return self.firstName .. " " .. self.lastName
end

-- Define a public method
function Person:new(firstName, lastName)
  local person = {}
  setmetatable(person, self)
  self.__index = self
  person.firstName = firstName
  person.lastName = lastName
  person.getFullName = getFullName
  return person
end

-- Create a new person object
local myPerson = Person:new("John", "Doe")

-- Call the getFullName method
print(myPerson:getFullName())
```

In the above example, the `getFullName` method is defined as a private method using the `local` keyword. Within this function, the `self` parameter is used to access the `firstName` and `lastName` instance variables of the `Person` class.

The `new` method is a public method that creates a new instance of the `Person` class and initializes the `firstName` and `lastName` instance variables. The `getFullName` function is then added to the instance as a field.

Finally, the `getFullName` method is called on the `myPerson` object using the `:` syntax, which passes `myPerson` as the first parameter to the method. This allows `getFullName` to access the instance variables of `myPerson` through the `self` parameter.