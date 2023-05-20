In Python 3.10, the `for` loop syntax has been extended to include a new keyword `step`. The `step` keyword allows you to specify the increment or decrement value for the loop variable. Here is an example:

```
# Loop from 0 to 10 in steps of 2
for i in range(0, 11, 2):
    print(i)
```

In this example, the `range()` function returns a sequence of numbers starting from 0, ending at 10 (excluding 11), and incrementing by 2. The loop variable `i` takes on each value in this sequence, which is then printed to the console.

You can also use `step` with negative values to create a decrementing sequence. Here's an example:

```
# Loop from 10 to 0 in steps of -2
for i in range(10, -1, -2):
    print(i)
```

In this example, the `range()` function starts at 10 and decrements by 2 until reaching -1 (excluding -2). The loop variable `i` takes on each value in this sequence, which is printed to the console.

It's important to note that the `end` parameter of the `range()` function is always exclusive, so the range in the examples above stops **before** reaching the specified value.