In TypeScript, the `break` statement is used to exit a loop or switch statement before its natural end. When `break` is encountered, the control is transferred to the statement immediately following the loop or switch statement.

Here are some examples of how to use `break` in TypeScript:

1. Using break in a for loop:

```
for (let i=1; i<=10; i++) {
   if (i === 6) {
      break;
   }
   console.log(i);
}
```
Output:
```
1 2 3 4 5
```

Explanation: Here, the `for` loop runs from 1 to 10. However, when the value of `i` is equal to 6, the `break` statement is executed, causing the loop to exit before it reaches the end.

2. Using break in a while loop:

```
let i = 1;
while (i <= 10) {
   if (i === 6) {
      break;
   }
   console.log(i);
   i++;
}
```
Output:
```
1 2 3 4 5
```

Explanation: This code is similar to the previous example, but it uses a `while` loop instead of a `for` loop. The `break` statement works in the same way, causing the loop to exit when `i` is equal to 6.

3. Using break in a switch statement:

```
let day = "Wednesday";
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
      console.log("Unknown day");
}
```
Output:
```
Today is Wednesday
```

Explanation: This code uses a `switch` statement to check the value of the `day` variable. When `day` is equal to "Wednesday", the corresponding case is executed, followed by the `break` statement. This exits the switch statement and prevents the code from executing the following cases.