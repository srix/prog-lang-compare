In Lua, the function `table.maxn` is used to get the size of an array, but for a hash table, you can use another way. Here are the different methods to get the size of a hash in Lua:

### Method 1: Using the `#` operator

In Lua, the `#` operator returns the length of a table, which for a hash table, is the number of elements in the table. So, you can use the `#` operator to get the size of a hash table as follows:

```lua
-- create hash table
local hash = {a = 1, b = 2, c = 3}

-- get size of hash table
local size = #hash

-- print size of hash table
print(size) -- output: 0 (NOTE: this will output 0 because a hash table is not treated as an array in Lua)
```

### Method 2: Using the `table.getn` function

In Lua, the `table.getn` function returns the length of an array table, but this function can also be used to get the size of a hash table. However, note that `table.getn` has been deprecated since Lua 5.1, so it should not be used anymore.

```lua
-- create hash table
local hash = {a = 1, b = 2, c = 3}

-- get size of hash table
local size = table.getn(hash)

-- print size of hash table
print(size) -- output: 0
```

### Method 3: Using a loop to count the elements

Another way to get the size of a hash table in Lua is to loop through the table and count the elements. This method is not as efficient as the previous methods, but it works for a small hash table.

```lua
-- create hash table
local hash = {a = 1, b = 2, c = 3}

-- get size of hash table
local size = 0
for k, v in pairs(hash) do
  size = size + 1
end

-- print size of hash table
print(size) -- output: 3
```

In general, it is not recommended to rely on the size of a hash table in Lua because the hash table can automatically resize itself as needed.