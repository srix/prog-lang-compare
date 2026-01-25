In MATLAB, the `try` statement is used to detect exceptions that occur during the execution of a program. If an exception occurs, the control is transferred to the `catch` statements that follow the `try` statement. Here is a general syntax for using try/catch/finally with messages in MATLAB:

```
try
    % Code that may produce an exception
catch exception
   % Handle the exception
   disp(['Error: ' exception.message]);
finally
   % Clean up code that executes whether or not an exception occurs
end
```

Here, the `try` block contains the code that may throw an exception. If an exception occurs, the control is transferred to the `catch` block where the exception is handled. The `finally` block contains the cleanup code that should execute regardless of whether or not an exception occurs.

In the example below, we will create a script called `divide_numbers.m` that divides two numbers entered by the user. If the denominator is zero, a custom error message will be displayed.

```
numerator = input('Enter the numerator: ');
denominator = input('Enter the denominator: ');

try
    result = numerator/denominator;
catch exception
    disp(['Error: ' exception.message]);
finally 
    disp('Execution complete');
end
```

If the user enters a denominator of zero, the program will raise an exception with the message "Divide by zero." The `catch` block will handle the exception and display a custom error message. The `finally` block will always execute and display a message indicating that the execution is complete.

Output:
```
Enter the numerator: 10
Enter the denominator: 0
Error: Divide by zero.
Execution complete
```