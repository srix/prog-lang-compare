In Lua, you can check if a class has a method using the `type` and `rawget` functions. Here's an example:

```
-- Define a class
MyClass = {}

-- Define a method for the class
function MyClass:sayHello()
  print("Hello from MyClass")
end

-- Check if the class has a method named "sayHello"
if type(MyClass.sayHello) == "function" then
  print("MyClass has a sayHello method")
else
  print("MyClass does not have a sayHello method")
end

-- Check if the class has a method named "sayGoodbye"
if type(MyClass.sayGoodbye) == "function" then
  print("MyClass has a sayGoodbye method")
else
  print("MyClass does not have a sayGoodbye method")
end
```

In the example above, the `type` function is used to check if the `sayHello` and `sayGoodbye` methods are functions. If `sayHello` is a function, then the class has that method. If `sayGoodbye` is not a function, then the class does not have that method.

Another way to check if a class has a method in Lua is to use `rawget` to directly access the class's methods table and see if the method is listed. Here's an example:

```
-- Define a class
MyClass = {}

-- Define a method for the class
function MyClass:sayHello()
  print("Hello from MyClass")
end

-- Check if the class has a method named "sayHello"
if rawget(MyClass, "sayHello") ~= nil then
  print("MyClass has a sayHello method")
else
  print("MyClass does not have a sayHello method")
end

-- Check if the class has a method named "sayGoodbye"
if rawget(MyClass, "sayGoodbye") ~= nil then
  print("MyClass has a sayGoodbye method")
else
  print("MyClass does not have a sayGoodbye method")
end
```

In this example, the `rawget` function is used to access the methods table of the `MyClass` class and check if the methods `sayHello` and `sayGoodbye` are listed. If `sayHello` is listed, then the class has that method. If `sayGoodbye` is not listed, then the class does not have that method.