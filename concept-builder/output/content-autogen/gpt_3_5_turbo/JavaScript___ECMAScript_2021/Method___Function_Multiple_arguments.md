In JavaScript, you can pass multiple arguments to a function or method by separating them with commas. Here's an example function that takes two arguments and returns their sum:

```
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // Output: 5
```

Here, `sum` takes two arguments `a` and `b`, and returns their sum. When we call `sum(2, 3)`, it returns `5`.

You can also pass any number of arguments to a function using the `arguments` object. Here's an example function that adds any number of arguments:

```
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2, 3, 4)); // Output: 10
```

Here, `add` can accept any number of arguments. Inside the function, we iterate over the `arguments` object to add up all the values. When we call `add(1, 2, 3, 4)`, it returns `10`.

You can also use the spread operator (`...`) to pass an array of arguments to a function. Here's an example:

```
function multiply(a, b, c) {
  return a * b * c;
}

let arr = [2, 3, 4];
console.log(multiply(...arr)); // Output: 24
```

Here, we define a function `multiply` that takes three arguments `a`, `b`, and `c`, and returns their product. We create an array `arr` with three values `[2, 3, 4]`. Then, we use the spread operator to pass the array as separate arguments to the `multiply` function. When we call `multiply(...arr)`, it returns `24`.