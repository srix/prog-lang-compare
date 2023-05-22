In Lua, the type of an object can be determined using the `type()` function. This function takes an argument and returns a string representation of the data type of the argument. Below are some examples:

```
-- Example 1: Type of a string
str = "Hello World"
print(type(str))  -- Output: string
 
-- Example 2: Type of a number
num = 42
print(type(num))  -- Output: number
 
-- Example 3: Type of a table
tbl = {1, 2, 3}
print(type(tbl))  -- Output: table
 
-- Example 4: Type of a function
function foo()
  return 1
end
print(type(foo))  -- Output: function
 
-- Example 5: Type of a nil value
nilval = nil
print(type(nilval))  -- Output: nil
```

In the above examples, we have initialized variables with different data types and used the `type()` function to get their respective data types. The output of each example shows the string representation of the data type of the argument passed to the `type()` function.