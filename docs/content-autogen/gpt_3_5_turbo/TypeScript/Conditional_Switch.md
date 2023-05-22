In TypeScript, switch statements are used to execute different blocks of code based on the value of a particular variable. The syntax for a switch statement is as follows:

```typescript
switch(variable) {
  case value1:
    // code to be executed when variable === value1
    break;
  case value2:
    // code to be executed when variable === value2
    break;
  .
  .
  .
  default:
    // code to be executed when none of the cases match
}
```

Here's an example of a switch statement in TypeScript:

```typescript
let day: number = 2;
let dayName: string;

switch(day) {
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
}

console.log(dayName); // Output: Tuesday
```

In this example, the switch statement takes a variable `day` as its argument and compares its value to each case in turn, executing the code associated with the first matching case and breaking out of the switch statement using the `break` keyword.

If none of the cases match, the `default` block of code is executed instead. In this example, if the value of day was 8, the `default` block of code would be executed, setting the value of `dayName` to "Invalid day".