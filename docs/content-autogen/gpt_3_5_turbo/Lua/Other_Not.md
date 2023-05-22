In Lua, the keyword "not" is a logical operator that returns the opposite boolean value of a given expression. It is often used in conditional statements and loops.

Here's an example:

```
-- Using not in conditional statements
local x = 10
if not(x == 20) then
  print("x doesn't equal 20")
end

-- Using not in loops
local i = 1
while not(i > 10) do
  print(i)
  i = i + 1
end
```

In the first example, the `if` statement checks whether `x` is equal to 20. Since it's not, the `not` operator returns `true`, and the code inside the block is executed, printing "x doesn't equal 20" to the console.

In the second example, the `while` loop iterates as long as `i` is not greater than 10. Once `i` becomes greater than 10, the `not` operator returns `false`, and the loop terminates.