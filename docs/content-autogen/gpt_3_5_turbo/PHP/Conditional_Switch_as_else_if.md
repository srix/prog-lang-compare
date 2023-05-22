In PHP, the switch statement can be used as an alternative to multiple else if statements. It works by evaluating an expression and executing the code block associated with the matching case label. Here is an example code:

```
$grade = 'B';

switch ($grade) {
  case 'A':
    echo "Excellent";
    break;
  case 'B':
    echo "Good";
    break;
  case 'C':
    echo "Fair";
    break;
  case 'D':
    echo "Poor";
    break;
  default:
    echo "Invalid grade";
}
```

In this example, the variable `$grade` is evaluated against each case label until a match is found. If the match is found, the corresponding code block is executed. If none of the cases match the expression, the default statement is executed.

Note that each case statement must end with a break; statement to prevent the execution of the following case statement. Also, the default statement is optional and can be omitted.