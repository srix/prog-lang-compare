In JavaScript, `not` is an operator that can be used to negate a boolean value, meaning it will invert true to false or false to true. 

The syntax for using the `not` operator is to place an exclamation point before the expression you want to negate. 

Here are a few examples:

1. Negating a boolean value:

```javascript
let a = true;
let b = !a; // b is now false
```

2. Checking if a variable is not equal to a certain value:

```javascript
let age = 18;
if (age !== 21) {
  console.log("You are not old enough to drink");
}
// Output: You are not old enough to drink
```

3. Evaluating if a value is not truthy:

In JavaScript, the values `null`, `undefined`, `0`, `false`, `NaN`, and `''`(empty string) are considered falsey.

```javascript
let value = null;
if (!value) {
  console.log("The value is not truthy");
}
// Output: The value is not truthy
```

By using the `not` operator, you can easily flip boolean values, check for inequality, and check for falsey values.