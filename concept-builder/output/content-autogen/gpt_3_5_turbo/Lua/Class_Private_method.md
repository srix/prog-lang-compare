In Lua, private methods can be defined for a class, which can only be accessed within the class. To define a private method, we can use a naming convention by starting the method name with an underscore symbol.

Here's an example:

```
-- create a class
MyClass = {}

-- Define a private method
function MyClass:_privateMethod()
    print("This is a private method.")
end

-- Define a public method that can access the private method
function MyClass:publicMethod()
    print("This is a public method.")
    self:_privateMethod()
end

-- create an instance of class
local obj = MyClass:new()

-- call the public method
obj:publicMethod()  -- Output: This is a public method. This is a private method.

-- attempt to call the private method directly will raise an error
obj:_privateMethod()  -- Output: attempt to call field '_privateMethod' (a nil value)
```

In this example, we defined a `MyClass` with a private `_privateMethod()` method and a public `publicMethod()` method that can access the private method by calling it with the `self:_privateMethod()` syntax. When we create an instance of this class and call the `publicMethod()`, it successfully prints the message from the private method along with its own message.

However, attempting to call the private method directly from an instance will result in an error, as it is not accessible outside the class.