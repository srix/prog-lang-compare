In Lua, you can check if a hash table (also known as a dictionary or table) includes a key using the `table` library and the `pairs` function. Here's an example:

```lua
-- create a hash table
my_table = {name = "John", age = 30, city = "New York"}

-- check if the table includes a key
if my_table["name"] ~= nil then
  print("Name exists in the table!")
end
```

In the example above, we create a hash table called `my_table` with three key-value pairs representing someone's name, age, and city. We use the "name" key to check if it exists in the table by using the `if` statement and `~= nil` to test if it is not `nil`. If the key is present, the code will print the corresponding message to the console.

Alternatively, you can also use the `pairs` function in the `table` library to iterate through all of the keys in the table. Here's how that looks:

```lua
-- create a hash table
my_table = {name = "John", age = 30, city = "New York"}

-- iterate through the keys and check if "age" exists
for key, value in pairs(my_table) do
  if key == "age" then
    print("Age exists in the table!")
  end
end
```

In this example, we loop through the keys using the `pairs` function and check if the "age" key exists by using the `if` statement and checking if the `key` variable is equal to "age". If the key is present, the code will print the corresponding message to the console.