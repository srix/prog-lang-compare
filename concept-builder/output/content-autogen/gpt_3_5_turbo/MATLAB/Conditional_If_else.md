In MATLAB, if/else statements are used to execute different blocks of code based on whether a given condition is true or false. The basic syntax for an if/else statement in MATLAB is:


```
if condition
    % Code to execute if condition is true
else
    % Code to execute if condition is false
end
```

Here's an example that uses if/else statements to check whether a given number is positive or negative:

```
x = -5;

if x > 0
    disp('x is positive');
else
    disp('x is negative');
end
```

In this example, MATLAB checks whether x is greater than 0. If it is, the program displays "x is positive". If it's not, the program displays "x is negative".

You can also use if/else statements to check for multiple conditions using the elseif keyword. Here's an example that checks whether a given number is positive, negative, or zero:

```
x = 0;

if x > 0
    disp('x is positive');
elseif x < 0
    disp('x is negative');
else
    disp('x is zero');
end
```

In this example, MATLAB first checks whether x is greater than 0. If it is, the program displays "x is positive". If x is not greater than 0, the program checks whether it's less than 0. If it is, the program displays "x is negative". If x is neither greater than nor less than 0, the program displays "x is zero".