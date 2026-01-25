In Lua, you can create a hash, or table, using curly braces `{}` and assigning key-value pairs to it. Here's an example:

```
-- create an empty hash
local myHash = {}

-- add key-value pairs to the hash
myHash["name"] = "John"
myHash["age"] = 30
myHash["gender"] = "male"

-- print the hash
for key, value in pairs(myHash) do
  print(key .. ": " .. value)
end
-- Output: 
-- name: John
-- age: 30
-- gender: male
```

You can also create a hash with initial values using the following syntax:

```
local myHash = {
  name = "Jane",
  age = 25,
  gender = "female"
}

-- print the hash
for key, value in pairs(myHash) do
  print(key .. ": " .. value)
end
-- Output: 
-- name: Jane
-- age: 25
-- gender: female
```

In Lua, you can use table data types to easily create associative arrays, key-value pairs, and other data structures.