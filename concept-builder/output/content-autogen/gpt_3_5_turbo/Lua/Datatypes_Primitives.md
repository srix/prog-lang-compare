In Lua, primitive types are data types that are not objects and don’t have built-in methods. The six primitive types in Lua are:

1. nil: This represents the absence of a value and is often used to indicate that a variable does not have a value assigned to it.

```lua
local x = nil
print(x) -- prints "nil"
```

2. boolean: This represents a logical value that can be either true or false.

```lua
local x = true
local y = false
```

3. number: This represents a numeric value which can be integer or floating-point.

```lua
local x = 10
local y = 3.14
```

4. string: This represents a sequence of characters enclosed in quotation marks.

```lua
local name = "John"
local message = "Welcome to Lua programming"
```

5. function: This represents a block of code that can be called from other parts of the program.

```lua
function addNumbers(a, b)
  return a + b
end
print(addNumbers(10, 20)) -- prints 30
```

6. userdata: This represents an arbitrary block of data stored in Lua’s memory, often used to interface with libraries written in other languages.

```lua
local ud = io.open("myfile.txt", "r")
print(ud:read("*line")) -- prints the first line of the file
```

Note that Lua also has a seventh type called tables, which are not considered primitive types as they are objects with built-in methods for accessing and manipulating data.