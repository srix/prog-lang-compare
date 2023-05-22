To get the square root of a number in JavaScript ECMAScript 2021, you can use the Math.sqrt() method. This method takes a single argument, which is the number you want to find the square root of. 

Here are some examples:

Example 1: 

```
// Find the square root of 9.

const num = 9;

const squareRoot = Math.sqrt(num);

console.log(squareRoot); // Output: 3

```

Example 2: 

```
// Find the square root of 25.

const num = 25;

const squareRoot = Math.sqrt(num);

console.log(squareRoot); // Output: 5

```

Example 3: 

```
// Find the square root of a variable.

let num = 16;

const squareRoot = Math.sqrt(num);

console.log(squareRoot); // Output: 4

// Change the value of the variable.

num = 36;

console.log(Math.sqrt(num)); // Output: 6

```

Note that the Math.sqrt() method only works with positive numbers. If you pass a negative number to this method, it will return NaN (Not a Number).