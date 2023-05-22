In MATLAB, 'if' is a conditional statement used to execute a block of code only if the condition is true. Here's how to use 'if' in MATLAB:

Example 1:

Suppose you want to decide whether a number is positive or negative in MATLAB. We can use the 'if' statement as follows:

```
x = -5;           % x is a negative number
if x >= 0         % if x is greater than or equal to 0
    disp('x is positive');     % this will not be executed as x is negative
end
```
In the above example, as x is a negative number, the condition in if is not satisfied and the code inside the 'if' block will not be executed.

Example 2:

Suppose you want to check if a number is odd or even in MATLAB. We can use the 'if' statement along with 'mod' as follows:

```
x = 5;           % x is an odd number
if mod(x,2) == 0  %if the remainder of x/2 is 0, this means x is even
    disp('x is even'); 
else             % if the remainder of x/2 is not 0, this means x is odd
    disp('x is odd');
end
```
In the above example, as x is an odd number, the condition in 'if' is not satisfied, and the code inside the 'else' block will execute. The output will be 'x is odd'.

You can use the 'if' statement with many other functions and logical operators in MATLAB to perform different tasks.