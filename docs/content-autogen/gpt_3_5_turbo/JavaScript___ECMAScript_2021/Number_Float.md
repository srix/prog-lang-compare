Float numbers in JavaScript are numerical values with decimal places, also known as floating-point numbers. Here's how to use them in ECMAScript 2021:

1. Declare a float variable using the `let` keyword:

```
let myFloat = 3.14;
```

2. You can also create a float variable using scientific notation:

```
let myFloat = 3.14e2;   // 314
```

3. Use math operators like addition, subtraction, multiplication and division with float numbers:

```
let num1 = 2.5;
let num2 = 1.2;

let sum = num1 + num2;      // 3.7
let difference = num1 - num2;   // 1.3
let product = num1 * num2;  // 3
let quotient = num1 / num2; // 2.083333333333333
```

4. You can also use `toFixed()` method to set the number of decimal places:

```
let num = 2.56789;
num.toFixed(2);   // "2.57"
num.toFixed(4);   // "2.5679"
```

5. Comparing two floats can sometimes be problematic because of rounding errors. You can use `Math.abs()` function with a small value to compare the difference between two numbers:

```
let a = 0.1 + 0.2;   // 0.30000000000000004
let b = 0.3;

if (Math.abs(a - b) < 0.0001) {
    console.log("a and b are approximately equal.");
} else {
    console.log("a and b are not equal.");
}
``` 

By following these steps, you can effectively use float numbers in JavaScript - ECMAScript 2021.