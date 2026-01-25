The `while` loop is a type of loop statement in JavaScript that allows you to repeatedly execute a block of code as long as a specified condition is true. 

The basic syntax of a `while` loop in ECMAScript 2021 is as follows:

```
while (condition) {
  // code to be executed
}
```

Here, `condition` is the expression that is tested before each iteration of the loop. As long as it returns a truthy value, the loop will continue to execute the block of code inside the loop.

Here are some examples of using `while` loop in JavaScript:

Example 1: Displaying numbers from 1 to 5 using while loop

```
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```
Output:
```
1
2
3
4
5
```

Example 2: Reversing a string using while loop

```
let str = "hello";
let reversedString = "";
let i = str.length - 1;

while (i >= 0) {
  reversedString += str[i];
  i--;
}
console.log(reversedString);
```

Output:
```
olleh
```

Example 3: Calculating the factorial of a number using while loop

```
function factorial(n) {
  let result = 1;
  let i = n;

  while (i > 0) {
    result *= i;
    i--;
  }

  return result;
}

console.log(factorial(5)); // Output: 120
```

In this example, we define a `factorial` function that takes a number `n` as input and calculates its factorial using a `while` loop. The loop keeps multiplying the `result` variable by `i`, decreasing its value by 1 at each iteration until `i` reaches 1. The final value of `result` is returned as the factorial of `n`.

These are just a few examples of how you can use the `while` loop in JavaScript. You can use it to perform a wide range of tasks, such as iterating over arrays, fetching data from APIs, implementing game loops, and more.