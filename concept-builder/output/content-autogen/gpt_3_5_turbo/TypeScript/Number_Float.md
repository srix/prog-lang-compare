In TypeScript, you can use floating-point numbers to represent decimal values. To declare a floating-point number, you can use the `number` keyword.

Here are some examples of using float numbers in TypeScript:

```typescript
let num1: number = 3.14;
let num2: number = 1.5e3; // 1500
let num3: number = 0.1 + 0.2; // 0.30000000000000004

console.log(num1); // Output: 3.14
console.log(num2); // Output: 1500
console.log(num3.toFixed(1)); // Output: 0.3
```

In the above examples, `num1` is a floating-point number with a value of `3.14`. `num2` is assigned a floating-point number using exponential notation (`1.5e3` is equivalent to `1500`). `num3` is assigned the result of adding `0.1` and `0.2` which should be `0.3`, but due to the floating-point arithmetic, the result is a very close approximation (`0.30000000000000004`).

You can also perform mathematical operations on floating-point numbers, just like any other numerical type:

```typescript
let x: number = 5.2;
let y: number = 3.7;

let sum: number = x + y;
let product: number = x * y;
let quotient: number = x / y;

console.log(sum); // Output: 8.9
console.log(product); // Output: 19.24
console.log(quotient); // Output: 1.4054054054054055
```

In the above example, `sum` is the result of adding two floating-point numbers, `x` and `y`. `product` is the result of multiplying `x` and `y`, and `quotient` is the result of dividing `x` by `y`.