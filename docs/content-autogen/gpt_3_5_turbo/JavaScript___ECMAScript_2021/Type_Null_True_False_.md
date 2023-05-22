In JavaScript, there are different ways to check whether a value is null, true or false. Here are some examples using the latest ECMAScript 2021 syntax:

1. Using the triple equal operator (===): The triple equal operator is strict, which means it checks both the value and the data type. To check if a variable is null, true or false, you can use the following syntax:

```
let variable = null; // or true/false
if (variable === null) {
  console.log("The variable is null.");
} else if (variable === true) {
  console.log("The variable is true.");
} else if (variable === false) {
  console.log("The variable is false.");
} else {
  console.log("The variable is undefined or has a different data type.");
}
```

2. Using the double equal operator (==): The double equal operator is not strict, which means it checks only the value. However, it may result in unexpected behavior, especially when checking null values. It is recommended to use the triple equal operator instead. Here is an example:

```
let variable = null; // or true/false
if (variable == null) {
  console.log("The variable is null or undefined.");
} else if (variable == true) {
  console.log("The variable is true.");
} else if (variable == false) {
  console.log("The variable is false.");
} else {
  console.log("The variable has a different data type.");
}
```

3. Using the nullish coalescing operator (??): The nullish coalescing operator checks if a value is null or undefined. It returns the right-hand side value if the left-hand side is null or undefined. If the left-hand side is not null or undefined, it returns the left-hand side value. Here is an example:

```
let variable = null; // or true/false
const result = variable ?? "The variable is null or undefined.";
console.log(result);
```

This will output "The variable is null or undefined." if the variable is null, and the variable value if it is true or false.