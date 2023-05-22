In JavaScript - ECMAScript 2021, there are several ways to check if a string is a number. Here are a few examples:

Method 1: Using the Number() function

The Number() function in JavaScript converts a string to a number. If the string contains a valid number, the function returns the number, otherwise it returns NaN (Not a Number). We can use the isNaN() function to check if the result of Number() is NaN or not.

```javascript
let str1 = "123";
let str2 = "abc";

let num1 = Number(str1);
let num2 = Number(str2);

console.log(typeof num1); // number
console.log(num1); // 123

console.log(typeof num2); // number
console.log(num2); // NaN

console.log(isNaN(num1)); // false
console.log(isNaN(num2)); // true
```

Method 2: Using the typeof and parseFloat() functions

The typeof operator in JavaScript returns the data type of a variable. We can use it to check if a variable contains a number or not. The parseFloat() function in JavaScript is used to convert a string to a floating-point number. If the string contains a valid number, the function returns the number, otherwise it returns NaN. We can use the isNaN() function to check if the result of parseFloat() is NaN or not.

```javascript
let str1 = "123";
let str2 = "abc";

let num1 = parseFloat(str1);
let num2 = parseFloat(str2);

console.log(typeof num1); // number
console.log(num1); // 123

console.log(typeof num2); // number
console.log(num2); // NaN

console.log(isNaN(num1)); // false
console.log(isNaN(num2)); // true
```

Method 3: Using regular expressions

We can use regular expressions in JavaScript to check if a string is a number. The regular expression \d+ matches one or more digits. The regular expression /^\d+$/ matches a string that contains only digits. We can use the test() function of a regular expression to check if a string matches the regular expression or not.

```javascript
let str1 = "123";
let str2 = "abc";

let regex = /^\d+$/;

console.log(regex.test(str1)); // true
console.log(regex.test(str2)); // false
```

All these methods can help you determine whether a string is a number, and you can choose the one that best fits your needs and coding style.