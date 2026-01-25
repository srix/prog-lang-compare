Destructuring assignment is a feature in Lua that allows you to extract values from tables or other sequences and assign them to multiple variables in a single statement. Here are some examples:

1. Destructuring a table:

```lua
-- create a table
local person = { name = "John Doe", age = 30, city = "New York" }

-- extract values using destructuring assignment
local { name, age, city } = person

-- print the extracted values
print(name) -- output: John Doe
print(age) -- output: 30
print(city) -- output: New York
```

2. Destructuring a function return:

```lua
-- define a function that returns two values
function getMinMax(numbers)
  table.sort(numbers)
  return numbers[1], numbers[#numbers]
end

-- extract the returned values using destructuring assignment
local min, max = getMinMax({ 3, 1, 4, 1, 5, 9, 2, 6, 5 })

-- print the extracted values
print(min) -- output: 1
print(max) -- output: 9
```

3. Destructuring a string:

```lua
-- create a string
local s = "Lua is a powerful programming language"

-- extract values using destructuring assignment
local _, _, firstWord, _, secondWord = string.find(s, "(%a+)%s+(%a+)")

-- print the extracted values
print(firstWord) -- output: is
print(secondWord) -- output: a
```

In each of these examples, destructuring assignment provides a convenient and concise way to extract values from a sequence or function return and assign them to variables.