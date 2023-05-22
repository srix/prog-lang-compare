To get the square root of a number in TypeScript, we can use the Math.sqrt() method. Here is an example:

```
let num: number = 16;
let squareRoot: number = Math.sqrt(num);
console.log(squareRoot);
```

This will output `4`, which is the square root of `16`.

We can also use variables or user input to calculate the square root. For example:

```
let userInput: number = parseInt(prompt("Enter a number to find the square root:"));
let squareRoot: number = Math.sqrt(userInput);
console.log(squareRoot);
```

This will prompt the user to enter a number, and then calculate and output the square root of that number.