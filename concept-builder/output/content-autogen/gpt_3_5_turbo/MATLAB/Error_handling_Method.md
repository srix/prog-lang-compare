In MATLAB, try/catch/finally statements are used to handle runtime errors in code. These statements provide a mechanism for dealing with unexpected errors that may occur during the execution of a MATLAB program. 

The syntax for try/catch/finally in MATLAB is as follows:

```
try
   % code that might throw an error
catch exception
   % code to handle the error
finally
   % code that will be executed regardless of whether an error occurred or not
end
```

Here is an example of how to use this syntax:

```
function divideNumbers(num1, num2)
try
   result = num1 / num2;
catch exception
   fprintf('An error occurred: %s',exception.message);
end
finally
   fprintf('Statement executed regardless of whether an error occurred or not.');
end
```

In this example, the function `divideNumbers` takes two arguments `num1` and `num2`. The code attempts to divide `num1` by `num2` and store the result in a variable called `result`.

If an error occurs during the execution of the code (for example, if `num2` is zero), then the `catch` block will execute and the error message will be displayed using `fprintf()` function. 

The `finally` block will execute regardless of whether an error occurred or not. 

Here's another example of using `try/catch/finally` statements in MATLAB:

```
try
   % code that might throw an error
   x = 2 + "3";
catch exception
   % code to handle the error
   fprintf('An error occurred: %s',exception.message);
end
finally
   % code that will be executed regardless of whether an error occurred or not
   fprintf('Statement executed regardless of whether an error occurred or not.');
end
```

In this example, the code attempts to add `2` with `"3"` (which is a string). This will throw an error because you can't add an integer and a string. The error message will be displayed using `fprintf()` function in the `catch` block. 

Like the previous example, the `finally` block will execute regardless of whether an error occurred or not.