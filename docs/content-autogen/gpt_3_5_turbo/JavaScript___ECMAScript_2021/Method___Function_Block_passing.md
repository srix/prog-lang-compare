Block passing is a new feature introduced in ECMAScript 2021 that provides a way to pass variable declarations to blocks of code. This enables developers to easily control scope and avoid polluting the global namespace.

To use block passing, we simply need to add the keyword "let" or "const" before the opening curly brace of the block. Here's an example:

```javascript
{
  let x = 10;
  console.log(x); // Output: 10
}
console.log(x); // ReferenceError: x is not defined
```

In this example, the variable `x` is declared within the block and is only accessible within that block. Attempting to access `x` outside of the block will result in a ReferenceError.

Block passing can also be used with existing variables:

```javascript
let x = 10;
{
  const x = 20;
  console.log(x); // Output: 20
}
console.log(x); // Output: 10
```

In this example, we declare a variable `x` with the value of 10. Within the block, we declare another variable `x` with the value of 20. This does not affect the value of the original `x` variable outside of the block.

Overall, block passing is a simple but useful feature that can help developers control scope and improve code organization.