The `if` statement in Lua is used to evaluate a condition and execute a block of code if the condition is `true`. Here are some examples:

Example 1:
```
local x = 10
if x > 5 then
  print("x is greater than 5")
end
```
Output: `x is greater than 5`

Explanation: In this example, we assigned a value of 10 to the variable `x` and used the `if` statement to check if `x` is greater than 5. Since the condition is true, the code inside the `if` block is executed and the message "x is greater than 5" is printed.

Example 2:
```
local y = 7
if y < 5 then
  print("y is less than 5")
else
  print("y is greater than or equal to 5")
end
```
Output: `y is greater than or equal to 5`

Explanation: In this example, we assigned a value of 7 to the variable `y` and used the `if` statement to check if `y` is less than 5. Since the condition is false, the code inside the `else` block is executed and the message "y is greater than or equal to 5" is printed.

Example 3:
```
local z = 0
if z > 0 then
  print("z is positive")
elseif z < 0 then
  print("z is negative")
else
  print("z is zero")
end
```
Output: `z is zero`

Explanation: In this example, we assigned a value of 0 to the variable `z` and used the `if` statement to check if `z` is greater than 0. Since the condition is false, the code inside the `elseif` block is executed and the condition `z < 0` is checked. Since this condition is also false, the code inside the `else` block is executed and the message "z is zero" is printed.

Note: It's important to ensure that the condition inside the `if` statement evaluates to a `boolean` value (`true` or `false`). If the condition evaluates to any other value (such as a number or string), Lua treats it as `true` unless it's `false` or `nil`.