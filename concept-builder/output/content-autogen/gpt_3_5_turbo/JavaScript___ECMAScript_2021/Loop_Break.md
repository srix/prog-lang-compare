In JavaScript, the break statement is used to break out of a loop or switch statement. When a break statement is executed in a loop, the loop stops executing and control is passed to the statement immediately after the loop.

Here is an example of how to use the break statement in a for loop:

```
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

In this example, the for loop will print values from 1 to 4 because once the value of i is equal to 5, the break statement is executed and the loop is terminated.

Here is an example of how to use the break statement in a switch statement:

```
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is some other day");
}
```

In this example, the switch statement checks the value of the day variable and prints a message based on the value. If the value of day is "Tuesday", the console will log "Today is Tuesday" and then the break statement will be executed, which causes control to pass to the statement immediately after the switch statement. If the break statement wasn't included, the switch statement would continue to execute and the "default" case would be printed.