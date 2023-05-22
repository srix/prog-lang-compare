The "for" loop in Lua can help you execute a block of code repeatedly for a specific number of times or over a range of values. There are two main syntaxes for using the "for" loop in Lua:

1. Numeric "for" loop:

The numeric "for" loop is used to execute a block of code for a specific number of times. The syntax for a numeric "for" loop is as follows:

```lua
for variable = start, finish, step do
   -- block of code to be executed
end
```
where "variable" is the loop control variable, "start" is the initial value of the variable, "finish" is the final value of the variable, and "step" is the increment or decrement for the variable at each iteration. Here's an example:

```lua
for i = 1, 10, 1 do
   print(i)
end
```

This code will print the numbers from 1 to 10, with an increment of 1 at each iteration.

2. Generic "for" loop:

The generic "for" loop is used to execute a block of code over a range of values. The syntax for a generic "for" loop is as follows:

```lua
for index, value in ipairs(table) do
   -- block of code to be executed
end
```

Here, "index" is the current index of the value being processed, "value" is the value being processed, and "table" is the table to be iterated over. Here's an example:

```lua
fruits = {"apple", "banana", "orange"}

for index, value in ipairs(fruits) do
   print(index, value)
end
```

This code will print the index and value of each element in the "fruits" table.