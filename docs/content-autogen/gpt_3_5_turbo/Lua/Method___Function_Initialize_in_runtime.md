In Lua, you can define a function at runtime using the `loadstring()` function, which takes a string of code as input and returns a function. Here's an example:

```
-- define a string of Lua code as a variable
local code = "function add(a, b) return a + b end"

-- load the code and execute it to define the function
local addFunc = loadstring(code)()

-- use the function
print(addFunc(3, 4))  -- output: 7
```

In the example above, we define a string of code that defines a function `add()` that takes two arguments and returns their sum. We then use the `loadstring()` function to load the code as a function, and execute it to define `addFunc`. We can then use `addFunc` as a regular Lua function.

Another way to define a function at runtime is to use anonymous functions, like this:

```
-- define an anonymous function and assign it to a variable
local addFunc = function(a, b) return a + b end

-- use the function
print(addFunc(3, 4))  -- output: 7
```

In this example, we define a function `addFunc` as an anonymous function, by assigning a function that takes two arguments and returns their sum to a variable. We can then use `addFunc` just like any other Lua function.