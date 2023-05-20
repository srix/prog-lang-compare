In Java, the switch statement is used to execute one block of code from multiple conditions. Here is an example:

```
int day = 4;
String dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
    break;
}

System.out.println(dayName);
```

In this example, we declare an integer variable called "day" and assign it the value of 4. Then we use a switch statement to evaluate the value of "day" and assign the matching day name to a String variable "dayName". The "default" case is used if none of the cases match the value of "day". Finally, we print out "dayName" to the console, which will output "Thursday" in this case.