In Lua, you can import a module or file using the `require` function. 

For example, let's say we have a file named `mymodule.lua` with the following code:

```
local mymodule = {}

function mymodule.say_hello()
  print("Hello from my module!")
end

return mymodule
```

Now, let's say we want to use the `say_hello` function in another file. We can do that by importing the module with `require`. 

In a different Lua file, we can import `mymodule` like this:

```
local mymodule = require("mymodule")

mymodule.say_hello() -- this will output "Hello from my module!"
```

Here, we are assigning the value returned by `require("mymodule")` to a variable called `mymodule`, which now holds a reference to our `mymodule.lua` file. 

We can then call the `say_hello` function from the `mymodule` variable and it will print "Hello from my module!" to the console.