Block binding in Lua is a way to declare a local variable that can only be accessed within a specific scope or block. This means that the variable can’t be accessed or modified outside the braces in which it is declared. 

To declare a local variable using block binding syntax in Lua, you need to use the keyword 'local' followed by the variable name and assignment operator (if you want to initialize the variable at the same time). You can then use the variable within the specific block or scope.

Here is an example of using block binding in Lua:

```
-- global variable
var = 10

-- block binding example
do
  -- declaring a local variable with block binding syntax
  local var = 20
  print(var) -- outputs 20
end

-- the global variable is unchanged
print(var) -- outputs 10
```

In the above example, we have a global variable 'var' with a value of '10', and we declare a local variable with the same name inside the block. The local variable is only accessible within the block, so when we print it inside the same block, we get a value of '20'. Outside the block, we print the global variable 'var', which is still '10', indicating that the block binding variable has no effect on the global scope. 

Another example of block binding in Lua can be demonstrated with an if-statement:

```
-- global variable
x = 5

-- block binding with if-statement
if true then
  -- declaring a local variable with block binding syntax
  local x = 10
  print(x) -- outputs 10
end

-- the global variable is unchanged
print(x) -- outputs 5
```

In this example, we use block binding to declare a local variable 'x' inside an if-statement. The local variable is only accessible within the if-statement. When we print the value of the variable inside the if-statement, we get '10', but outside the if-statement, we print the global variable 'x', which also has a value of '5'. 

In summary, block binding in Lua is a way to create local variables within a specific block or scope, preventing them from being accessed or modified outside of it. This is useful for managing variable scope in code and can prevent issues with variable naming and access.