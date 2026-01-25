In TypeScript, block bindings are used to declare variables with block scope. Block scope means that variables declared with block bindings are only accessible within the block they are declared in. This is in contrast to variables declared with `var`, which have function scope and are accessible throughout the function they are declared in. Here's an example:

```
// Using let keyword to declare a block binding
function example() {
  let x = 1;
  if (true) {
    let x = 2; // this x refers to a different variable than the x declared above
    console.log(x); // output: 2
  }
  console.log(x); // output: 1
}
```

In the above example, the variable `x` is declared twice using the `let` keyword. The first `x` is declared within the `example` function and has a value of `1`. The second `x` is declared within the `if` block and has a value of `2`. When the first `console.log` statement executes, it outputs `2` because it is referring to the `x` declared within the `if` block. When the second `console.log` statement executes, it outputs `1` because it is referring to the `x` declared within the `example` function.

Block bindings are also particularly useful when dealing with asynchronous code:

```
// Using let keyword to declare a block binding in an asynchronous function
async function example2() {
  let x = await someAsyncFunction();
  if (x === 0) {
    let y = await someOtherAsyncFunction();
    console.log(y);
  }
}
```

In the above example, `x` is declared within the `example2` function and assigned a value from an asynchronous function. If `x` is equal to `0`, then `y` is declared within the `if` block and assigned a value from another asynchronous function. If `x` is not equal to `0`, the `y` variable is not declared at all, avoiding potential scope issues if `y` were declared globally or within the function. 

By using block bindings, you can avoid issues with variable scope and create cleaner, more understandable code.