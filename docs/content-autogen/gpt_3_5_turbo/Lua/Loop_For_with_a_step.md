In Lua, `for` is a loop that repeats a block of code for a specified number of times. The basic syntax of the `for` loop with a step in Lua is:

```
for variable = start, stop, step do
  -- code to be executed
end
```

Here's what each component means:

- `variable` is the loop variable which takes on values between `start` and `stop` in increments of `step`.
- `start` is the initial value of the loop variable.
- `stop` is the final value of the loop variable. The loop will terminate when the `variable` exceeds this value.
- `step` is the increment by which the loop variable increases each time the loop runs. This can be any positive or negative number.

Here's an example of using a `for` loop with a step in Lua to print even numbers between 2 and 10:

```
for i = 2, 10, 2 do
  print(i)
end
```

This code will output:

```
2
4
6
8
10
```

In this example, `i` starts at 2, increments by 2 until it reaches 10, and the loop terminates. Inside the loop, the `print` function is used to output the current value of `i`.

You can also use negative values of `step` to count down instead of up. For example, here's how to print numbers in reverse order from 10 to 1 using a `for` loop with a step of -1:

```
for i = 10, 1, -1 do
  print(i)
end
```

This code will output:

```
10
9
8
7
6
5
4
3
2
1
```

In this example, `i` starts at 10, decrements by 1 until it reaches 1, and the loop terminates.