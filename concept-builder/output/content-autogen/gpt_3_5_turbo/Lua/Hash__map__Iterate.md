In Lua, you can iterate over a hash (table) in several ways. Here are three examples to do so:

Example 1: Using a `for` loop with `pairs()` function
```
-- define a hash
local fruits = {
  apple = 10,
  banana = 20,
  mango = 30
}

-- iterate over the hash with a for loop
for fruit, value in pairs(fruits) do
  print(fruit, value)
end
```
Output:
```
apple  10
mango  30
banana 20
```

Example 2: Using a `for` loop with `ipairs()` function
```
-- define a hash
local fruits = {
  "apple",
  "banana",
  "mango"
}

-- iterate over the hash with a for loop
for index, fruit in ipairs(fruits) do
  print(index, fruit)
end
```
Output:
```
1   apple
2   banana
3   mango
```

Example 3: Using a table's `next()` function
```
-- define a hash
local fruits = {
  apple = 10,
  banana = 20,
  mango = 30
}

-- iterate over the hash with a while loop and table's next() function
local k, v = nil, nil
while true do
  k, v = next(fruits, k)
  if k == nil then
    break
  end
  print(k, v)
end
```
Output:
```
apple  10
mango  30
banana 20
```