In MATLAB, a default value for an argument in a function or method can be defined when the function is declared. This default value is used when the argument is not explicitly specified by the caller of the function.

Here is an example of setting a default value for an argument:

```matlab
function output = myFunction(input, defaultValue)
    if nargin < 2
        defaultValue = 42; % default value
    end

    % rest of the function code
end
```

In this example, the `myFunction` function has two input arguments: `input` and `defaultValue`. The `nargin` keyword is used to determine the number of input arguments passed to the function. If `nargin` is less than 2 (meaning the `defaultValue` argument was not passed), then it is set equal to the default value of 42.

Here is an example usage of this function:

```matlab
>> myFunction(10)
ans =
    42
```

In this case, we only passed one argument to `myFunction`, so the default value of 42 was used for the `defaultValue` argument.

Alternatively, you can use the `isempty` function to check whether the argument is empty or not, and decide to use the default value if it is empty:

```matlab
function output = myFunction(input, defaultValue)
    if ~exist('defaultValue', 'var') || isempty(defaultValue)
        defaultValue = 42; % default value
    end

    % rest of the function code
end
```

This version of the function will use the default value if the `defaultValue` argument is either not specified or empty.

Here is an example usage of this function:

```matlab
>> myFunction(10, [])
ans =
    42
```

In this case, we passed a second argument that is empty, so the default value of 42 was used for the `defaultValue` argument.