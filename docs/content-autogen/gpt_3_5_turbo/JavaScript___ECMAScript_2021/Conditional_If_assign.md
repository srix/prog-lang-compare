In JavaScript, the `if` statement is a conditional statement that executes a block of code if a condition is true. The `if` statement can be combined with the assignment operator to create an `if assign` statement that assigns a value to a variable depending on a certain condition.

Here's the syntax of the `if assign` statement:

```
(condition) ? variable = valueIfTrue : variable = valueIfFalse;
```

This statement assigns `valueIfTrue` to `variable` if `condition` evaluates to `true`. If `condition` evaluates to `false`, it assigns `valueIfFalse` to `variable`.

Here's an example of using `if assign` in JavaScript:

```javascript
let age = 25;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult); // "Yes"
```

In this example, the `if assign` statement checks if `age` is greater than or equal to `18`. Since `age` is `25`, the condition is `true`. Therefore, `isAdult` is assigned the value `"Yes"`. If `age` was less than `18`, `isAdult` would be assigned the value `"No"`.

Another example of using `if assign` in JavaScript is to handle invalid user inputs:

```javascript
let userInput = "abc";
let number = (!isNaN(userInput)) ? parseInt(userInput) : 0;
console.log(number); // 0
```

In this example, the `if assign` statement checks if `userInput` is a number by using the `isNaN()` function. If `userInput` is a number, it is assigned to the `number` variable after being converted to an integer using the `parseInt()` function. If `userInput` is not a number, `number` is assigned the value `0`.

Overall, the `if assign` statement is a useful tool for assigning values to variables based on certain conditions.