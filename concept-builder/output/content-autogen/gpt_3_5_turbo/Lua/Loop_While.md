The `while` loop in Lua is used to repeat a set of statements while a certain condition is true. The basic syntax of a `while` loop in Lua is:

```
while condition do
  -- statements to be executed
end
```

The `condition` is evaluated at the beginning of each iteration. If the condition is `true`, the statements within the loop are executed. After the execution of all the statements, the condition is evaluated again, and this process continues until the condition becomes `false`.

Here is an example of using the `while` loop in Lua to print the numbers from 1 to 10:

```
local i = 1     -- initialization
while i <= 10 do  -- condition
  print(i)        -- statements to be executed
  i = i + 1       -- update of the counter variable
end
```

This will output:

```
1
2
3
4
5
6
7
8
9
10
``` 

In this example, the `while` loop is executed as long as the value of `i` is less than or equal to 10. Inside the loop, the value of `i` is incremented by 1 at the end of each iteration using the expression `i = i + 1`.

Another example of using the `while` loop in Lua is to keep prompting the user for input until a valid value is entered:

```
local valid_input = false     -- initialization
while not valid_input do      -- condition
  print("Enter a number: ")
  local input = io.read()    -- read user input
  if tonumber(input) then    -- check if input is a number
    valid_input = true       -- set flag if input is valid
    print("Input accepted: " .. input)
  else
    print("Invalid input. Please try again.")
  end
end
```

This will keep prompting the user to enter a number until a valid number is entered. Once a valid number is entered, the loop will exit and the program will continue.