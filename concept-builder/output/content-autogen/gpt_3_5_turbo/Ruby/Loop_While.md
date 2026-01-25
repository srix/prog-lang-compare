The `while` loop in Ruby is a control flow statement that continuously executes a block of code as long as a certain condition is true. 

The basic syntax for using a while loop in Ruby is:

```
while condition do
  # Code to be executed
end
```

Here's an example of a while loop that prints numbers 1 to 5: 

```
count = 1
while count <= 5 do
  puts count
  count += 1
end
```
Output:
```
1
2
3
4
5
```

In this example, the condition `count <= 5` is checked at the beginning of each iteration of the loop. If the condition is `true`, the code inside the loop is executed, which in this case is printing the value of the `count` variable and incrementing it. Once `count` reaches `6`, the condition is evaluated as `false` and the loop ends.

You can also use a `while` loop to iterate over an array. Here's an example:

```
numbers = [1, 2, 3, 4, 5]
i = 0

while i < numbers.length do
  puts numbers[i]
  i += 1
end
```

Output:
```
1
2
3
4
5
```

In this example, the loop continues as long as `i` is less than the length of the `numbers` array. The `i` variable is used as an index to access each element of the array inside the loop. The loop ends when `i` is equal to the length of the array.