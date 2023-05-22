In MATLAB, you can assign a value to a variable if it does not already exist using the `exist` function to check if the variable exists, and an `if` statement to assign a value if it does not exist. Here's an example:

```
% Check if the variable x exists
if ~exist('x', 'var')
    % Assign a value to x if it does not exist
    x = 10;
end
```

In this example, we first use the `exist` function to check if the variable `x` exists. The first argument to `exist` is the name of the variable, and the second argument is the string `'var'`, which tells `exist` to check if it is a variable.

The `exist` function returns `1` if the variable exists, and `0` if it does not exist. We use the logical NOT operator (`~`) to negate the result, so that the `if` statement will be true if the variable does not exist.

If the `if` statement is true, we assign the value `10` to the variable `x`. If the variable already exists, the `if` statement will be false, and the code inside the `if` block will not be executed.

Here's another example that uses the same approach to assign a default value to a function argument if it is not provided:

```
function y = myfunc(x)
    % Check if the argument x exists
    if ~exist('x', 'var')
        % Assign a default value to x if it does not exist
        x = 1;
    end
    
    % Compute the function value
    y = x + 2;
end
```

In this example, we define a function `myfunc` that takes one argument `x`. Inside the function, we check if `x` exists using the same approach as before. If `x` does not exist, we assign a default value of `1` to `x`.

We then compute `y` by adding `2` to the value of `x`, and return the result. If the caller does not provide an argument for `x`, the default value of `1` will be used.