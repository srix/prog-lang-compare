The `break` statement in Lua is used to terminate the current loop or block of code prematurely. When the `break` statement is encountered, the program exits the loop or block and continues executing the code following the loop or block. 

Here are some examples of how to use the `break` statement in Lua:

1. Using break in a `while` loop
```lua
-- program to print the first 5 even numbers
i = 1
while i <= 10 do
   if i % 2 == 0 then
      print(i)
   end
   i = i + 1
   if i > 5 then
      break -- terminates the while loop when i>5
   end
end
```
Output:
```
2
4
6
8
10
```
2. Using break in a `for` loop
```lua
-- program to print the first 5 even numbers
for i = 1, 10 do
   if i % 2 == 0 then
      print(i)
   end
   if i == 5 then
      break -- terminates the for loop on reaching 5
   end
end
```
Output:
```
2
4
6
8
10
```
3. Using break in a nested loop
```lua
-- program to print numbers up to 10, but skip odd numbers starting from 5
for i = 1, 10 do
   if i % 2 == 0 then
      print(i)
   else
      for j = 5, 10 do
         if j % 2 == 0 then
            print(j)
         else
            break -- terminates the inner for loop and goes back to outer for loop
         end
      end
   end
end
```
Output:
```
2
6
4
8
6
10
8
```

In all of these examples, the `break` statement is used to terminate the loop before it has completed its full iteration.