In Lua, we can add an element to a hash by assigning a value to a specific key. Here is an example:

```lua
-- creating an empty hash
local myHash = {}

-- adding elements to the hash
myHash["name"] = "John"
myHash["age"] = 30

-- alternate way to add elements
myHash.phoneNumber = "555-1234"

-- printing the hash
for key, value in pairs(myHash) do
    print(key .. ": " .. value)
end
```

In this example, we first create an empty hash (`myHash`) using curly braces `{}`. We then add elements to the hash using square brackets `[]`, where the string inside the brackets represents the key and the value on the right side of the assignment represents the corresponding value. 

Then, we use an alternate way to add elements to the hash by using dot notation `.` and directly assigning the value to the key.

Finally, we print the hash using a `for` loop and the `pairs()` function, which allows us to iterate over all the elements of the hash.

When we run this program, we will see the following output: 

```
name: John
phoneNumber: 555-1234
age: 30
```

As we can see, the elements have been added to the hash and can be accessed using their corresponding keys.