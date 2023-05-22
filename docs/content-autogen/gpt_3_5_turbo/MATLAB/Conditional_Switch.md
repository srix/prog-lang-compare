Switch is a control flow statement in MATLAB that allows you to branch your code into different cases depending on the value of a expression. The syntax of a switch statement is:

```
switch expression
    case caseExpression1
        statement(s)
    case caseExpression2
        statement(s)
    ...
    otherwise
        statement(s)
end
```

Here, `expression` is the value that you want to test against the different cases. Each `case` specifies a value or values to match against the `expression`. If the `expression` matches a `caseExpression`, then the statements under that `case` are executed. If none of the `case` expressions match the `expression`, then the statements under the `otherwise` block are executed.

Here's an example of using a switch statement in MATLAB:

```
% Example 1: Convert letter grades to number grades
grade = 'B';
switch grade
    case 'A'
        score = 90;
    case 'B'
        score = 80;
    case 'C'
        score = 70;
    case 'D'
        score = 60;
    otherwise
        score = 50;
end
disp(['The score for grade ' grade ' is ' num2str(score)]);
```

In this example, we have a variable `grade` that represents a letter grade. We want to convert this grade to a number between 50 and 90. We use a switch statement to test against the different letter grades and assign the corresponding score to the variable `score`. Once the score is calculated, we use the `disp` function to display the result.

Here's another example:

```
% Example 2: Perform different operations based on user input
prompt = 'Enter a number between 1 and 5: ';
num = input(prompt);
switch num
    case 1
        disp('You entered the number 1');
    case 2
        disp('You entered the number 2');
    case 3
        disp('You entered the number 3');
    case 4
        disp('You entered the number 4');
    case 5
        disp('You entered the number 5');
    otherwise
        disp('You did not enter a valid number');
end
```

In this example, we prompt the user to enter a number between 1 and 5. We use a switch statement to check which number the user entered, and then execute a different statement depending on the number. If the user enters a number outside the range of 1 to 5, we use the `otherwise` block to display an error message.