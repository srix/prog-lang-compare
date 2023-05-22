In Lua, you can check if a value exists by using the "not" operator and the "or" operator. Here is an example of how to assign a value if it does not exist:

```lua
-- Create a table
myTable = {}

-- Assign a value if it does not exist
myTable["key"] = myTable["key"] or "default"

-- Print the value
print(myTable["key"]) -- Output: default

-- Now let's assign a value to the key
myTable["key"] = "new value"

-- Assign a value if it does not exist (again)
myTable["key"] = myTable["key"] or "default"

-- Print the value (again)
print(myTable["key"]) -- Output: new value
```

In this example, we created an empty table called "myTable". We then assigned a value to the "key" key using the "or" operator. If the key did not exist (which it did not, since the table was empty), the "or" operator evaluates to the default value, which is "default". We then printed the value of the "key" key, which returned "default".

Next, we assigned a new value to the "key" key. We then used the same "or" operator technique to assign the value to the "key" key again. This time, the "or" operator evaluated to the new value that we assigned earlier. We then printed the value of the "key" key, which returned the new value.