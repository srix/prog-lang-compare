In ECMAScript 2021 (also known as ES12), we can use the `Math.max()` and `Math.min()` methods to get the maximum and minimum values between two or more numbers. Here are examples that illustrate their usage:

To get the maximum value between two numbers in JavaScript ES12, we can use the `Math.max()` method. The syntax for this method is as follows:

```javascript
Math.max(number1, number2)
```

Here's an example:

```javascript
const num1 = 5;
const num2 = 8;

const maxNum = Math.max(num1, num2);

console.log(maxNum); // Output: 8
```

To get the minimum value between two numbers in JavaScript ES12, we can use the `Math.min()` method. The syntax for this method is as follows:

```javascript
Math.min(number1, number2)
```

Here's an example:

```javascript
const num1 = 5;
const num2 = 8;

const minNum = Math.min(num1, num2);

console.log(minNum); // Output: 5
```

We can also use these methods to get the maximum/minimum values among multiple numbers, simply by calling the method with multiple arguments. Here's an example:

```javascript
const num1 = 5;
const num2 = 8;
const num3 = 2;
const num4 = 10;

const maxNum = Math.max(num1, num2, num3, num4);
const minNum = Math.min(num1, num2, num3, num4);

console.log(maxNum); // Output: 10
console.log(minNum); // Output: 2
```