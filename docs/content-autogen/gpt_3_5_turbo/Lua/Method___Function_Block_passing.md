Block passing in Lua refers to the ability to pass multiple arguments as a single table to a function. This can be very useful for organizing and simplifying code, as it can make function calls shorter and more readable.

To use block passing in Lua, you simply create a table with the arguments you want to pass, and then pass that table to the function. Here is an example:

```
function myFunction(args)
   print(args[1])
   print(args[2])
   print(args[3])
end

myFunction({"arg1", "arg2", "arg3"})
```

In this example, we define a function called `myFunction`, which takes a single argument called `args`. When we call the function, we pass a table with three strings as the argument.

The function then prints each of these strings using array-style indexing. The output of running this code would be:

```
arg1
arg2
arg3
```

As you can see, block passing allows us to pass multiple arguments to a function in a more organized and readable way.