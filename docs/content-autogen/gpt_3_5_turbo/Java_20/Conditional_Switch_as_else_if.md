In Java, the switch statement can be used as an alternative to multiple 'else if' statements. The syntax of the switch statement is as follows:

```
switch(expression) {
   case value1 :
      // code to be executed if expression is equal to value1
      break;
   case value2 :
      // code to be executed if expression is equal to value2
      break;
   case value3 :
      // code to be executed if expression is equal to value3
      break;
   .
   .
   .
   default :
      // code to be executed if expression doesn't match any case
}
```

Here's an example that uses switch statement to replicate else-if ladder:

```
int day = 3;
String dayString;

switch (day) {
    case 1:
        dayString = "Monday";
        break;
    case 2:
        dayString = "Tuesday";
        break;
    case 3:
        dayString = "Wednesday";
        break;
    case 4:
        dayString = "Thursday";
        break;
    case 5:
        dayString = "Friday";
        break;
    case 6:
        dayString = "Saturday";
        break;
    case 7:
        dayString = "Sunday";
        break;
    default:
        dayString = "Invalid day";
        break;
}

System.out.println(dayString);
```

In the above example, we have a variable `day` which is assigned a value of 3. The switch statement then evaluates the `day` variable and executes the corresponding code block based on its value. Since the value of `day` is 3, the code block for `case 3` will be executed and the output will be "Wednesday".

Here's another example, this time using switch to check the grade of a student:

```
char grade = 'B';
String message;

switch (grade) {
    case 'A':
        message = "Excellent!";
        break;
    case 'B':
        message = "Good job!";
        break;
    case 'C':
        message = "You can do better";
        break;
    case 'D':
        message = "You need improvement";
        break;
    case 'F':
        message = "Fail";
        break;
    default:
        message = "Invalid grade";
        break;
}

System.out.println(message);
```

In the above example, we have a variable `grade` which is assigned a value of 'B'. The switch statement then evaluates the `grade` variable and executes the corresponding code block based on its value. Since the value of `grade` is 'B', the code block for `case 'B'` will be executed and the output will be "Good job!".