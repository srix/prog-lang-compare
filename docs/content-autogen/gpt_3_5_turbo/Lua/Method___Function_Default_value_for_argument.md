In Lua, you can use default values for the arguments in a function. This means that if no value is passed for a certain argument, it will be assigned a default value specified in the function definition. To set a default value for an argument, you can use the syntax `arg_name = default_value` in the function definition.

Here is an example of a function that calculates the area of a rectangle:

```
function calculate_area(length, width)
  width = width or 1  -- set default width to 1 if no value is passed
  return length * width
end
```

In this example, if no value is passed for `width`, it will be assigned a default value of 1. The function can be called with one or two arguments:

```
calculate_area(3, 4)  -- returns 12
calculate_area(3)  -- returns 3 (width will be assigned the default value of 1)
```

Another way to use default value for an argument is by using the `if` statement. Here is an example:

```
function greet(name)
  if not name then
    name = "stranger"
  end
  print("Hello, " .. name .. "!")
end
```

In this example, if no value is passed for `name`, it will be assigned a default value of "stranger". The function can be called with one or no arguments:

```
greet("John")  -- prints "Hello, John!"
greet()  -- prints "Hello, stranger!"
```

Both methods of using default values for arguments in Lua are useful depending on the specific requirements of the function.