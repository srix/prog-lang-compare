In MATLAB, the "if" statement allows the program to execute certain commands and operations if a particular condition is met. The "if" statement is an essential component of many programs, as it allows for the creation of decision-making processes within the code.

The "if" statement in MATLAB is written as follows:

```
if condition 
    statement 1 
    statement 2 
    ... 
end
```

The condition is a logical statement that is either true or false, and decides whether or not the statements within the "if" block are executed. If the condition is true, MATLAB executes the statements under it. If the condition is false, MATLAB moves onto the next line of code after the "end" statement.

Here's an example of using if statement in MATLAB:

```
%Example 1: If-else statement 
a = 5; %Assigning value of 5 to variable a
b = 10; % Assigning value of 10 to variable b
if a > b %Checking if value of a is greater than b
    disp('a is greater than b') %Displays the message if the condition is true
else
    disp('b is greater than a') %Displays the message otherwise
end
 
%Example 2: Nested If statement
x=15; %Assigning value of 15 to variable x
if x<20 % checking if value x is less than 20
   if x>10 % checking if value x is greater than 10
      disp('x is between 10 and 20') %Displays the message if both the conditions are true
   end
end

% Example 3: if-else-if Statement
score = 80; %Assigning score value 80 to variable score 
if score >= 90
    disp('Grade = A')
elseif score >= 80
    disp('Grade = B')
elseif score >= 70
    disp('Grade = C')
elseif score >= 60
    disp('Grade = D')
else
    disp('Grade = F')
end
```

In the above examples, the first example uses an "if-else" statement to check if variable "a" is greater than "b". The second example uses a nested "if" statement to check whether the variable "x" is between 10 and 20. The third example uses an "if-else-if" statement to check the grade based on the score in the variable "score".