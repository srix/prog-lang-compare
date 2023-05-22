In JavaScript, if/else is a conditional statement used to execute a block of code based on certain conditions. Here is how to use it in ECMAScript 2021 with examples:

1. Basic if/else statement:

```
if (condition) {
   statement1;
} else {
   statement2;
}
```

The `condition` is an expression that evaluates to `true` or `false`. If the condition is `true`, `statement1` is executed. If the condition is `false`, `statement2` is executed. Here's an example:

```
let age = 18;
if (age >= 18) {
   console.log("You are an adult");
} else {
   console.log("You are not yet an adult");
}
```

Output: "You are an adult"

2. Multiple if statements:

```
if (condition1) {
   statement1;
} else if (condition2) {
   statement2;
} else {
   statement3;
}
```

Here, we have multiple conditions to check. If `condition1` is `true`, `statement1` is executed. If `condition1` is `false` and `condition2` is `true`, `statement2` is executed. If both `condition1` and `condition2` are `false`, `statement3` is executed. Here's an example:

```
let grade = 80;
if (grade >= 90) {
   console.log("A grade");
} else if (grade >= 80) {
   console.log("B grade");
} else if (grade >= 70) {
   console.log("C grade");
} else {
   console.log("Fail");
}
```

Output: "B grade"

3. Nested if statements:

```
if (condition1) {
   statement1;
   if (condition2) {
      statement2;
   }
} else {
   statement3;
}
```

Here, we have a condition within another condition. If `condition1` is `true`, `statement1` is executed and then `condition2` is checked. If both `condition1` and `condition2` are `true`, `statement2` is executed. If `condition1` is `false`, `statement3` is executed. Here's an example:

```
let x = 10, y = 20;
if (x > y) {
   console.log("x is greater than y");
   if (x - y > 5) {
      console.log("The difference is greater than 5");
   }
} else {
   console.log("y is greater than x");
}
```

Output: "y is greater than x" 

These are the basic syntax and types of if/else statements in JavaScript ECMAScript 2021.