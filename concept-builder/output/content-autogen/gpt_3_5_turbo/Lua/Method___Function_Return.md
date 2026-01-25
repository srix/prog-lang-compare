In Lua, a function or method can return a value using the `return` keyword followed by the value to be returned. Here's an example of a function in Lua that returns a string value:

```
function greet(name)
    return "Hello, " .. name .. "!"
end
```

In the above example, `greet` is a function that takes a `name` parameter and returns a greeting string. The `return` keyword followed by the greeting string concatenation is the value that will be returned when the function is called.

To use this function, we can simply call it and pass in a name argument:

```
print(greet("John")) -- Would print "Hello, John!"
```

In this example, `greet("John")` is a function call that passes in the argument "John" for the `name` parameter. `print` is then called with the returned value of the `greet` function as its argument, resulting in "Hello, John!" being printed to the console.