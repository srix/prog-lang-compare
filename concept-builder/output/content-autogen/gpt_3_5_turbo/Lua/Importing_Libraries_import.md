In Lua, libraries can be imported using the `require()` function followed by the name of the library. Below are some examples of how to import libraries in Lua:

```lua
-- importing the math library
local math = require("math")

-- using the function from the math library
print(math.sqrt(16)) -- output: 4

-- importing the string library
local string = require("string")

-- using a function from the string library
print(string.upper("hello world")) -- output: HELLO WORLD
```

In the above examples, we import the `math` and `string` libraries using `require()`. We then use functions from each library: `math.sqrt()` to find the square root of a number and `string.upper()` to convert a string to uppercase.