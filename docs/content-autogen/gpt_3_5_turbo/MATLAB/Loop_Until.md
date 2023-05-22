In MATLAB, the `until` keyword is used to create a loop that executes until the provided condition is true. Here is the basic syntax for using `until`:

```
while ~condition
    % code to be executed
end
```

In this structure, the loop will execute as long as `condition` is false. Once `condition` becomes true, the loop will exit.

Here is an example that uses `until` to output the numbers from 1 to 10:

```
n = 1;
until n > 10
    disp(n);
    n = n + 1;
end
```

In this example, we use the `disp` function to output the value of `n` to the console, then increment `n` by 1 and repeat until `n` is greater than 10.

Another example that uses `until` to perform a computation until a condition is met:

```
x = 1;
y = 0;
until y > 100
    y = y + x;
    x = x + 1;
end
disp(x);
```

In this example, we initialize `x` to 1 and `y` to 0, then perform a computation to increment both variables until `y` is greater than 100. We then output the value of `x`.