In Lua, we can define functions or methods that accept multiple arguments. This allows us to write more generic and flexible code that can handle different scenarios and inputs. 

To create a function or method with multiple arguments, we simply list the arguments separated by commas in the function definition. For example, the following function takes two numbers as arguments and returns their sum:

```lua
function sum(a, b)
  return a + b
end
```

We can call this function with different arguments:

```lua
print(sum(2, 3)) -- prints 5
print(sum(10, 20)) -- prints 30
```

Lua also supports variable number of arguments, using the `...` notation. This allows us to pass any number of arguments to a function, which can be useful in some cases. For example, the following function takes any number of arguments and returns their sum:

```lua
function vararg_sum(...)
  local result = 0
  for i, v in ipairs({...}) do
    result = result + v
  end
  return result
end
```

We can call this function with any number of arguments:

```lua
print(vararg_sum(2, 3)) -- prints 5
print(vararg_sum(10, 20, 30)) -- prints 60
print(vararg_sum(1, 2, 3, 4, 5)) -- prints 15
```

Note that we use the `ipairs` function to iterate over the list of arguments passed as `...`.