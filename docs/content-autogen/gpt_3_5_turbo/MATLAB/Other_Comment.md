Commenting in MATLAB is a crucial skill that helps others understand your code. MATLAB comments are marked by a percent sign (%) at the beginning of the line. There are two types of comments in MATLAB: single-line comments and multiline comments.

Single-line comments are comments that occupy a single line, usually for clarification of what the code on that line is doing. Here is an example of how to use single-line comments:

```
% This is a single-line comment in MATLAB
x = 5;  % This line sets the value of x to 5
```

Multiline comments are used to describe larger sections of code, usually involving more complex or lengthy explanations. Here is an example of how to use multiline comments:

```
%{
This is a multiline comment in MATLAB
It can span multiple lines, and is useful when you need
to explain more complex code sections.

Below is an example of how to use transpose operator in MATLAB:
%}

A = [1, 2, 3; 4, 5, 6; 7, 8, 9];   % Create a matrix A
B = A.';   % Transpose matrix A
```

The multiline comments start with `%{` and end with `%}`. Note that you can comment out multiple lines of code using this method.

A good commenting practice is to include what the code does, any assumptions made when writing the code, and any limitations and possible edge cases that may arise. This helps others better understand your code and can make it easier to maintain in the long run.