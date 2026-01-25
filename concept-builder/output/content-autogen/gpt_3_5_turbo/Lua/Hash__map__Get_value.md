In Lua, a hash is called a table. To get the value of a key in a table, you can use the square bracket notation with the key name inside.

Here's an example:

```lua
-- create a table
my_table = {name="John", age=30, city="New York"}

-- get the value of a key
print(my_table["age"]) -- output: 30
```

In this example, we create a table called `my_table` with three key-value pairs. To get the value of the `age` key, we use the square bracket notation with the key name inside. The output of the `print()` function will be `30`.

You can also use dot notation to get the value of a key:

```lua
-- create a table
my_table = {name="John", age=30, city="New York"}

-- get the value of a key
print(my_table.age) -- output: 30
```

In this example, we use dot notation to get the value of the `age` key. This will also output `30`.