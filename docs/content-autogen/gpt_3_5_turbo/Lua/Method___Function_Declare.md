In Lua, we can declare a function or method using the `function` keyword followed by the name of the function and its parameter list, if any. Here are a few examples:

1. A simple function that takes no parameters and returns nothing:

```
function greet()
  print("Hello, world!")
end
```

2. A function that takes two parameters and returns their sum:

```
function add(a, b)
  return a + b
end
```

3. A method of an object that takes one parameter and sets its value:

```
local person = {}
function person:setName(name)
  self.name = name
end
```

Note that in Lua, we can also create anonymous functions using the `function` keyword and assign them to variables:

```
local double = function(x)
  return x * 2
end
```

Here, the `double` variable holds an anonymous function that takes a number as its parameter and returns its double. We can call this function like any regular function:

```
print(double(5)) -- Output: 10
```