Block binding in JavaScript allows for declaring variables with block scope using the `let` and `const` keywords. This means that the variable's scope is only within the block that it was defined in (i.e. within curly braces `{}`), rather than function-wide as with the `var` keyword.

Here are some examples of using block binding with `let` and `const`:

1. Let

```
if (true) {
  let x = 10;
  console.log(x); // output: 10
}
console.log(x); // Uncaught ReferenceError: x is not defined
```

In this example, the variable `x` is only accessible within the if statement block.

2. Const

```
if (true) {
  const y = 20;
  console.log(y); // output: 20
}
console.log(y); // Uncaught ReferenceError: y is not defined
```

In this example, the variable `y` is also only accessible within the if statement block. However, the `const` keyword is used to indicate that the value of `y` should never change and is thus read-only.

3. Loops

```
for (let i = 0; i < 5; i++) {
  console.log(i); // output: 0, 1, 2, 3, 4
}
console.log(i); // Uncaught ReferenceError: i is not defined
```

In this example, the variable `i` is only accessible within the for loop block. This prevents issues with variable hoisting and unintended overwriting of values in complex loops.

Overall, block binding with `let` and `const` allows for safer and more concise code by limiting the scope of variables to where they are actually needed.