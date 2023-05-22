In MATLAB, you can use a switch statement to test a variable against multiple values. A switch statement is very useful to test a variable against different conditions, and to take a certain action based on which condition is true.

Here's how to use a switch statement as an if-else-if statement in MATLAB:

```
% Example 1: Using switch statement as else if statement
x = 3;
switch x
    case 1
        disp('x is equal to 1');
    case 2
        disp('x is equal to 2');
    case 3
        disp('x is equal to 3');
    otherwise
        disp('x is not equal to 1, 2, or 3');
end
```

In this example, we have assigned the value 3 to a variable x. We then use a switch statement to test the value of x. If x is equal to 1, then MATLAB will execute the first case statement and display 'x is equal to 1'. If x is equal to 2, then MATLAB will execute the second case statement and display 'x is equal to 2'. If x is equal to 3, then MATLAB will execute the third case statement and display 'x is equal to 3'. If x is not equal to any of these values, then MATLAB will execute the otherwise statement and display 'x is not equal to 1, 2, or 3'.

Here's another example:

```
% Example 2: Using switch statement as else if statement
grade = 'A';
switch grade
    case 'A'
        disp('Excellent!');
    case 'B'
        disp('Good job!');
    case 'C'
        disp('Fair.');
    case 'D'
        disp('Poor.');
    case 'F'
        disp('Fail.');
    otherwise
        disp('Invalid grade.');
end
```

In this example, we have assigned the letter 'A' to a variable called grade. We then use a switch statement to test the value of grade. If grade is equal to 'A', then MATLAB will execute the first case statement and display 'Excellent!'. If grade is equal to 'B', then MATLAB will execute the second case statement and display 'Good job!'. If grade is equal to 'C', then MATLAB will execute the third case statement and display 'Fair.'. If grade is equal to 'D', then MATLAB will execute the fourth case statement and display 'Poor.'. If grade is equal to 'F', then MATLAB will execute the fifth case statement and display 'Fail.'. If grade is not equal to any of these values, then MATLAB will execute the otherwise statement and display 'Invalid grade.'.