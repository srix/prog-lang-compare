In Lua, try/catch/finally functionality can be achieved using the pcall() function. The pcall() function attempts to execute a function and if any errors occur during execution, it returns false and an error message. We can use this to implement try/catch/finally as follows:

```
-- try/catch/finally in Lua using pcall()

-- try block
local ok, result = pcall(function()
   -- code that may raise errors goes here
end)

-- catch block
if not ok then
   print("Error:", result)
end

-- finally block
-- code here will always execute, regardless of whether the try block raised an exception or not
```

Here's an example that demonstrates the usage of try/catch/finally:

```
-- try/catch/finally example

function divide(a, b)
   if b == 0 then
      error("cannot divide by zero")
   end
   return a / b
end

-- try block
local ok, result = pcall(function()
  local result = divide(10, 0)
  print("Result:", result)
end)

-- catch block
if not ok then
  print("Error:", result)
end

-- finally block
print("Done.")
```

In the above example, the divide() function is likely to throw an exception if the second argument is zero. We use pcall() to execute the divide() function and catch any exceptions raised. In the catch block, we print the error message. Finally, we print "Done." to indicate that execution has completed successfully.