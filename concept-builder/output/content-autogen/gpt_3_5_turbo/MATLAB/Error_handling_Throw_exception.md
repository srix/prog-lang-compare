In MATLAB, you can throw an exception using the `error` function. The `error` function takes a string argument that describes the error message. 

Here's an example:

```matlab
function result = divide(a, b)
% This function divides two numbers a and b
% and throws an exception if b is zero

if b == 0
    error('Cannot divide by zero');
else
    result = a / b;
end
```

In this example, the `divide` function checks if `b` is zero. If `b` is zero, it throws an exception using the `error` function. The error message is "Cannot divide by zero". If `b` is not zero, the function proceeds to perform the division and returns the result.

You can also add additional arguments to the `error` function to specify the error identifier and to include information about the error location. For example:

```matlab
function result = divide(a, b)
% This function divides two numbers a and b
% and throws an exception if b is zero

if b == 0
    error('divide:divByZero', 'Cannot divide by zero');
else
    result = a / b;
end
```

In this example, the `error` function takes two arguments. The first argument is the error identifier (`divide:divByZero`). The second argument is the error message ("Cannot divide by zero"). The error identifier can be used to catch a specific exception using a `try`-`catch` block. For example:

```matlab
try
    result = divide(1, 0);
catch ME
    if strcmp(ME.identifier, 'divide:divByZero')
        fprintf('Error: %s\n', ME.message);
    else
        rethrow(ME);
    end
end
```

In this example, the `try`-`catch` block calls the `divide` function with arguments 1 and 0. Since 0 is not a valid argument, the `divide` function throws an exception. The `catch` block catches the exception and checks if the error identifier matches `divide:divByZero`. If it does, the code prints an error message. If the error identifier does not match, the code rethrows the exception. 

I hope this helps!