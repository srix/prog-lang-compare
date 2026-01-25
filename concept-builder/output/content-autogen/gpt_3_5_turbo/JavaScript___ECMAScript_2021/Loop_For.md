Sure, here is an explanation on how to use `for` in JavaScript - ECMAScript 2021 with examples:

The `for` loop in JavaScript is used to iterate over a block of code repeatedly until a specified condition is met. The syntax for a `for` loop is as follows:

```
for (initialization; condition; increment/decrement) {
  // code block to be executed
}
```
- Initialization: This statement is executed only once before the loop starts. It sets the initial value for the loop counter variable.


- Condition: This statement is evaluated at the beginning of each iteration. If it is true, the loop continues; if it is false, the loop terminates.


- Increment/Decrement: This statement is executed at the end of each iteration. It increases or decreases the loop counter variable.


Here are some examples of `for` loops:

1. Printing numbers from 1 to 10:

```
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

2. Summing up all the numbers from 1 to 10:

```
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 10 is: " + sum);
```

3. Printing all the elements of an array:

```
let arr = ["apple", "banana", "cherry"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

4. Printing all the key-value pairs of an object:

```
let obj = {a: 1, b: 2, c:3};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
```

Overall, the `for` loop is a powerful tool in JavaScript that allows you to iterate over data structures, making your code more efficient and concise.