In Lua, `until` is a loop control structure that is complementary to the `while` loop. The syntax for the `until` loop is:

```
repeat
    -- statements to execute
until condition
```

The `repeat` block is executed once before the condition is checked. If the condition is false, the `repeat` block is executed again until the condition becomes true. Here are some examples:

Example 1: Print numbers from 1 to 10 using the `until` loop.

```lua
i = 1
repeat
   print(i)
   i = i + 1
until i > 10
```

Output:

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

Example 2: Calculate the sum of numbers from 1 to 5 using the `until` loop.

```lua
i = 1
sum = 0
repeat
   sum = sum + i
   i = i + 1
until i > 5
print(sum)
```

Output:

```
15
```

Example 3: Ask the user to enter a number until a valid number is entered using the `until` loop.

```lua
repeat
   print("Enter a number:")
   num = tonumber(io.read())
until num ~= nil
print("You entered " .. num)
```

Output:

```
Enter a number:
hello
Enter a number:
world
Enter a number:
123
You entered 123
```