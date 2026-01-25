In Lua, a static method can be defined inside a class using the 'function' keyword without the use of the self parameter. Here's an example:

```
-- define a class named MyClass
MyClass = {}

-- define a static method named add, which takes two numbers as input and returns their sum
function MyClass.add(num1, num2)
   return num1 + num2
end

-- calling the static method
print(MyClass.add(5, 10)) -- prints 15
```

In the above example, we defined a class named 'MyClass', and a static method 'add' inside the class which returns the sum of two input numbers. To access the static method, we didn't need to create an object of the class. We simply called the static method using the class name followed by the dot operator and the method name.